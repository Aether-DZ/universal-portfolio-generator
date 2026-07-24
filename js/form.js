/* =============================================
   form.js — Multi-step Form Logic + Validation
   ============================================= */
const FormState = {
  currentStep: 1,
  totalSteps: 5,
  data: {
    name: '', bio: '', role: 'Software Engineer', email: '', location: '',
    photo: '', photoFile: null,
    socials: {},
    skills: [],
    projects: [],
    education: [],
    bugbounty: [],
    theme: 3,
    metrics: [],
    lang: 'en', dir: 'ltr',
    // === Advanced Controls (v1.2+) ===
    colorPalette: 'default',
    customColors: { primary: '#2563EB', accent: '#A16207', bg: '#F8FAFC' },
    fontFamily: 'Inter',
    glassBlur: 20,
    glassTransparency: 0.12,
    borderRadius: 16,
    animations: true,
    // === Pro Features (v1.5+) ===
    contactForm: false,
    contactEmail: '',
    customDomain: '',
    analytics: '',
    githubSync: false,
    githubUsername: '',
    githubPat: ''
  },
  init() {
    // Load saved draft from localStorage
    const saved = localStorage.getItem('portfolio-draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.assign(this.data, parsed);
      } catch(e) {}
    }
    // Auto-detect country from IP (silent, no user disruption)
    this.detectCountry();
    this.renderStep(1);
    // Auto-save on changes
    document.addEventListener('input', this.autoSave.bind(this));
  },
  detectCountry() {
    // Only detect if user hasn't set a country yet
    if (this.data.location) return;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch('https://ip-api.com/json/?fields=country', { signal: controller.signal })
      .then(r => r.json())
      .then(d => {
        clearTimeout(timeout);
        if (d && d.country) {
          this.data.location = d.country;
          // Re-render if on step 1
          if (this.currentStep === 1) this.renderStep(1);
        }
      })
      .catch(() => { clearTimeout(timeout); });
  },
  autoSave() {
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => {
      localStorage.setItem('portfolio-draft', JSON.stringify(this.data));
    }, 1000);
  },
  getData() {
    const d = this.data;
    const colors = d.customColors || { primary: '#2563EB', accent: '#A16207', bg: '#F8FAFC' };
    return {
      ...d,
      year: new Date().getFullYear(),
      slug: Utils.slugify(d.name || 'portfolio'),
      lang: I18N.current,
      dir: document.documentElement.dir,
      colors,
      socialsArray: Object.entries(d.socials)
        .filter(([k,v]) => v)
        .map(([platform, url]) => ({
          platform,
          url: Utils.sanitize(url),
          icon: Utils.socialIcon(platform),
          label: Utils.socialLabel(platform)
        })),
      skillsArray: d.skills.map(s => ({
        name: s,
        icon: Utils.skillIcon(s)
      })),
      projectsArray: d.projects.map(p => ({
        ...p,
        tags: typeof p.tags === 'string' ? p.tags.split(',').map(t => t.trim()).filter(Boolean) : (p.tags || [])
      })),
      educationArray: (d.education || []).map(e => ({
        ...e,
        year: e.year || ''
      })),
      bugbountyArray: (d.bugbounty || []).map(b => ({
        ...b,
        platform: b.platform || '',
        username: b.username || ''
      })),
      glassmorphism: d.theme === 6 ? {
        blur: d.glassBlur || 20,
        opacity: d.glassTransparency || 0.12,
        radius: d.borderRadius || 16
      } : null,
      animationsEnabled: d.animations !== false,
      fontUrl: d.fontFamily === 'Inter' ? 'Inter:wght@400;500;600;700' :
               d.fontFamily === 'JetBrains Mono' ? 'JetBrains+Mono:wght@400;500;600;700' :
               d.fontFamily === 'Space Grotesk' ? 'Space+Grotesk:wght@400;500;600;700' :
               d.fontFamily === 'Fira Code' ? 'Fira+Code:wght@400;500;600;700' :
               d.fontFamily === 'Archivo' ? 'Archivo:wght@400;500;600;700' :
               d.fontFamily === 'DM Sans' ? 'DM+Sans:wght@400;500;700' :
               d.fontFamily === 'Crimson Pro' ? 'Crimson+Pro:wght@400;600;700' :
               d.fontFamily === 'Playfair Display' ? 'Playfair+Display:wght@400;600;700;800' :
               d.fontFamily === 'Cabinet Grotesk' ? 'Cabinet+Grotesk:wght@400;500;700;800' :
               d.fontFamily === 'Satoshi' ? 'Satoshi:wght@400;500;700;900' :
               d.fontFamily === 'Zodiak' ? 'Zodiak:wght@400;600;700' :
               d.fontFamily === 'Fraunces' ? 'Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700' :
               d.fontFamily === 'Clash Display' ? 'Clash+Display:wght@400;600;700' :
               d.fontFamily === 'Raleway' ? 'Raleway:wght@400;500;600;700' :
               d.fontFamily === 'Montserrat' ? 'Montserrat:wght@400;500;600;700' :
               d.fontFamily === 'Plus Jakarta Sans' ? 'Plus+Jakarta+Sans:wght@400;500;600;700;800' :
               'Inter:wght@400;500;600;700',
      fontFamilyCss: d.fontFamily || 'Inter',
      // Translated section titles for generated portfolio pages
      sectionTitles: {
        skills: I18N.current === 'ar' ? 'المهارات' : 'Skills',
        projects: I18N.current === 'ar' ? 'المشاريع' : 'Projects',
        education: I18N.current === 'ar' ? 'التعليم' : 'Education',
        bugbounty: I18N.current === 'ar' ? 'صيد الثغرات' : 'Bug Bounty',
        about: I18N.current === 'ar' ? 'نبذة' : 'About',
        contact: I18N.current === 'ar' ? 'للتواصل' : 'Contact',
        contact_sub: I18N.current === 'ar' ? 'تواصل معي عبر' : 'Get in touch via',
        skills_sub: I18N.current === 'ar' ? 'التقنيات التي أستخدمها' : 'Technologies I work with',
        projects_sub: I18N.current === 'ar' ? 'أعمالي ومشاريعي' : 'My work & projects'
      },
      // Portfolio template texts — bilingual for all hardcoded English strings
      portfolioTexts: {
        title: I18N.current === 'ar' ? 'ملفي' : 'Portfolio',
        titleAcademic: I18N.current === 'ar' ? 'أكاديمي' : 'Academic',
        viewProject: I18N.current === 'ar' ? 'عرض المشروع' : 'View Project',
        view: I18N.current === 'ar' ? 'عرض' : 'View',
        source: I18N.current === 'ar' ? 'المصدر' : 'Source',
        resume: I18N.current === 'ar' ? 'السيرة الذاتية' : 'Resume',
        cv: I18N.current === 'ar' ? 'السيرة' : 'CV',
        noProjects: I18N.current === 'ar' ? 'لا توجد مشاريع بعد' : 'No projects yet'
      }
    };
  },
  renderStep(step) {
    this.currentStep = step;
    const container = document.getElementById('form-container');
    const steps = {
      1: this.renderProfileStep,
      2: this.renderSocialStep,
      3: this.renderSkillsStep,
      4: this.renderProjectsStep,
      5: this.renderThemeStep
    };
    const html = (steps[step] || steps[1]).call(this);
    container.innerHTML = html;
    this.updateStepIndicator();
    this.bindStepEvents();
  },
  updateStepIndicator() {
    const dots = document.querySelectorAll('.step-dot');
    const lines = document.querySelectorAll('.step-line');
    dots.forEach(dot => {
      const s = parseInt(dot.dataset.step);
      dot.classList.toggle('active', s === this.currentStep);
      dot.classList.toggle('done', s < this.currentStep);
    });
    lines.forEach((line, i) => {
      line.classList.toggle('done', this.currentStep > i + 1);
    });
  },
  // --- Step 1: Profile ---
  renderProfileStep() {
    const d = this.data;
    const roles = [
      'Software Engineer', 'Security Researcher', 'Bug Bounty Hunter',
      'Tech Founder', 'UI/UX Designer', 'Data Scientist'
    ];
    const countries = this.countryList();
    return `
      <h2 class="text-sm font-semibold mb-3 uppercase tracking-wider text-mono-500" data-i18n="form.profile.title">${I18N.t('form.profile.title')}</h2>
      <!-- Row: Name + Role side by side -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.fullName">${I18N.t('form.profile.fullName')}</label>
          <input class="form-input" id="input-name" value="${Utils.sanitize(d.name)}" placeholder="${I18N.t('form.profile.placeholder.name')}">
        </div>
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.role">${I18N.t('form.profile.role')}</label>
          <div class="role-grid" id="input-role">
            ${roles.map(r => {
              const sel = d.role === r ? ' selected' : '';
              const key = 'form.role.' + r.toLowerCase().replace(/[\/\s-]/g,'');
              return `<div class="role-chip${sel}" data-role="${r}" onclick="document.querySelectorAll('.role-chip').forEach(c=>c.classList.remove('selected'));this.classList.add('selected');FormState.data.role='${r}';triggerPreview()">${I18N.t(key) || r}</div>`;
            }).join('')}
          </div>
        </div>
      </div>
      <!-- Bio full width -->
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.bio">${I18N.t('form.profile.bio')}</label>
        <textarea class="form-textarea" id="input-bio" placeholder="${I18N.t('form.profile.placeholder.bio')}" rows="2">${Utils.sanitize(d.bio)}</textarea>
      </div>
      <!-- Row: Email + Location -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.email">${I18N.t('form.profile.email')}</label>
          <input class="form-input" id="input-email" type="email" value="${Utils.sanitize(d.email)}" placeholder="user@example.com">
        </div>
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.location">${I18N.t('form.profile.location')}</label>
          <select class="form-select" id="input-location" aria-label="${I18N.current === 'ar' ? 'الدولة' : 'Country'}">
            <option value="">${I18N.current === 'ar' ? '— اختر الدولة —' : '— Select country —'}</option>
            ${countries.map(c => `<option value="${c}" ${d.location === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
      </div>
      <!-- Photo compact row -->
      <div class="photo-wrapper" style="gap:0.5rem">
        <div class="file-upload-area ${d.photo ? 'has-image' : ''}" id="photo-upload" title="${I18N.current === 'ar' ? 'اختر صورة' : 'Choose photo'}" style="width:3.5rem;height:3.5rem;flex-shrink:0">
          ${d.photo
            ? `<img src="${d.photo}" class="preview-img">`
            : `<div class="upload-placeholder"><i class="fas fa-camera text-lg"></i></div>`
          }
        </div>
        <input type="file" id="photo-input" accept="image/*" class="hidden">
        <input class="form-input photo-url-input flex-1 min-w-0" id="photo-url" placeholder="${I18N.current === 'ar' ? 'أو الصق رابط الصورة' : 'Or paste image URL'}" value="${d.photo && !d.photo.startsWith('data:') ? Utils.sanitize(d.photo) : ''}">
      </div>
      <!-- Education + Bug Bounty in a 2-col card grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        <!-- Education Card -->
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-card-title"><i class="fas fa-graduation-cap text-blue-500"></i> ${I18N.t('form.education.title')}</div>
            <button class="section-add-btn" onclick="addEducation()"><i class="fas fa-plus"></i> ${I18N.t('form.education.add')}</button>
          </div>
          <div id="education-list" class="section-card-body">
            ${(d.education||[]).length === 0
              ? `<p class="text-xs text-mono-400 text-center py-3">${I18N.current === 'ar' ? 'لا توجد مؤهلات بعد' : 'No degrees added yet'}</p>`
              : (d.education||[]).map((e,i)=>`
                <div class="sub-entry">
                  <div class="sub-entry-row">
                    <input class="form-input sub-input edu-degree" data-idx="${i}" value="${Utils.sanitize(e.degree||'')}" placeholder="${I18N.t('form.education.degree')}">
                    <input class="form-input sub-input sub-year edu-year" data-idx="${i}" value="${e.year||''}" placeholder="${I18N.t('form.education.year')}">
                    <button class="sub-remove" onclick="removeEducation(${i})"><i class="fas fa-times"></i></button>
                  </div>
                  <input class="form-input sub-input edu-school" data-idx="${i}" value="${Utils.sanitize(e.school||'')}" placeholder="${I18N.t('form.education.school')}">
                </div>
              `).join('')
            }
          </div>
        </div>
        <!-- Bug Bounty Card -->
        <div class="section-card">
          <div class="section-card-header">
            <div class="section-card-title"><i class="fas fa-shield-halved text-green-500"></i> ${I18N.t('form.bugbounty.title')}</div>
            <button class="section-add-btn" onclick="addBugBounty()"><i class="fas fa-plus"></i> ${I18N.t('form.bugbounty.add')}</button>
          </div>
          <div id="bugbounty-list" class="section-card-body">
            ${(d.bugbounty||[]).length === 0
              ? `<p class="text-xs text-mono-400 text-center py-3">${I18N.current === 'ar' ? 'لا توجد منصات بعد' : 'No platforms added yet'}</p>`
              : (d.bugbounty||[]).map((b,i)=>`
                <div class="sub-entry">
                  <div class="sub-entry-row">
                    <select class="form-select sub-input bb-platform" data-idx="${i}">
                      <option value="hackerone" ${b.platform==='hackerone'?'selected':''}>HackerOne</option>
                      <option value="bugcrowd" ${b.platform==='bugcrowd'?'selected':''}>Bugcrowd</option>
                      <option value="intigriti" ${b.platform==='intigriti'?'selected':''}>Intigriti</option>
                      <option value="yeswehack" ${b.platform==='yeswehack'?'selected':''}>YesWeHack</option>
                    </select>
                    <input class="form-input sub-input bb-username" data-idx="${i}" value="${Utils.sanitize(b.username||'')}" placeholder="${I18N.t('form.bugbounty.username')}">
                    <button class="sub-remove" onclick="removeBugBounty(${i})"><i class="fas fa-times"></i></button>
                  </div>
                </div>
              `).join('')
            }
          </div>
        </div>
      </div>
      ${this.navButtons()}
    `;
  },
  countryList() {
    const countries = [
      { en: 'Algeria', ar: 'الجزائر' }, { en: 'Argentina', ar: 'الأرجنتين' },
      { en: 'Australia', ar: 'أستراليا' }, { en: 'Austria', ar: 'النمسا' },
      { en: 'Bahrain', ar: 'البحرين' }, { en: 'Bangladesh', ar: 'بنغلاديش' },
      { en: 'Belgium', ar: 'بلجيكا' }, { en: 'Benin', ar: 'بنين' },
      { en: 'Brazil', ar: 'البرازيل' }, { en: 'Bulgaria', ar: 'بلغاريا' },
      { en: 'Burkina Faso', ar: 'بوركينا فاسو' }, { en: 'Cambodia', ar: 'كمبوديا' },
      { en: 'Cameroon', ar: 'الكاميرون' }, { en: 'Canada', ar: 'كندا' },
      { en: 'Chad', ar: 'تشاد' }, { en: 'Chile', ar: 'تشيلي' },
      { en: 'China', ar: 'الصين' }, { en: 'Colombia', ar: 'كولومبيا' },
      { en: 'Croatia', ar: 'كرواتيا' }, { en: 'Czech Republic', ar: 'التشيك' },
      { en: 'Denmark', ar: 'الدنمارك' }, { en: 'Egypt', ar: 'مصر' },
      { en: 'Finland', ar: 'فنلندا' }, { en: 'France', ar: 'فرنسا' },
      { en: 'Germany', ar: 'ألمانيا' }, { en: 'Ghana', ar: 'غانا' },
      { en: 'Greece', ar: 'اليونان' }, { en: 'Hong Kong', ar: 'هونغ كونغ' },
      { en: 'Hungary', ar: 'هنغاريا' }, { en: 'Iceland', ar: 'آيسلندا' },
      { en: 'India', ar: 'الهند' }, { en: 'Indonesia', ar: 'إندونيسيا' },
      { en: 'Iran', ar: 'إيران' }, { en: 'Iraq', ar: 'العراق' },
      { en: 'Ireland', ar: 'أيرلندا' }, { en: 'Israel', ar: 'إسرائيل' },
      { en: 'Italy', ar: 'إيطاليا' }, { en: 'Japan', ar: 'اليابان' },
      { en: 'Jordan', ar: 'الأردن' }, { en: 'Kazakhstan', ar: 'كازاخستان' },
      { en: 'Kenya', ar: 'كينيا' }, { en: 'Kuwait', ar: 'الكويت' },
      { en: 'Lebanon', ar: 'لبنان' }, { en: 'Libya', ar: 'ليبيا' },
      { en: 'Luxembourg', ar: 'لوكسمبورغ' }, { en: 'Malaysia', ar: 'ماليزيا' },
      { en: 'Maldives', ar: 'جزر المالديف' }, { en: 'Mali', ar: 'مالي' },
      { en: 'Malta', ar: 'مالطا' }, { en: 'Mexico', ar: 'المكسيك' },
      { en: 'Morocco', ar: 'المغرب' }, { en: 'Mozambique', ar: 'موزمبيق' },
      { en: 'Netherlands', ar: 'هولندا' }, { en: 'New Zealand', ar: 'نيوزيلندا' },
      { en: 'Niger', ar: 'النيجر' }, { en: 'Nigeria', ar: 'نيجيريا' },
      { en: 'Norway', ar: 'النرويج' }, { en: 'Oman', ar: 'عُمان' },
      { en: 'Pakistan', ar: 'باكستان' }, { en: 'Palestine', ar: 'فلسطين' },
      { en: 'Philippines', ar: 'الفلبين' }, { en: 'Poland', ar: 'بولندا' },
      { en: 'Portugal', ar: 'البرتغال' }, { en: 'Qatar', ar: 'قطر' },
      { en: 'Romania', ar: 'رومانيا' }, { en: 'Russia', ar: 'روسيا' },
      { en: 'Saudi Arabia', ar: 'السعودية' }, { en: 'Senegal', ar: 'السنغال' },
      { en: 'Serbia', ar: 'صربيا' }, { en: 'Singapore', ar: 'سنغافورة' },
      { en: 'Slovakia', ar: 'سلوفاكيا' }, { en: 'Slovenia', ar: 'سلوفينيا' },
      { en: 'Somalia', ar: 'الصومال' }, { en: 'South Africa', ar: 'جنوب أفريقيا' },
      { en: 'South Korea', ar: 'كوريا الجنوبية' }, { en: 'Spain', ar: 'إسبانيا' },
      { en: 'Sudan', ar: 'السودان' }, { en: 'Sweden', ar: 'السويد' },
      { en: 'Switzerland', ar: 'سويسرا' }, { en: 'Syria', ar: 'سوريا' },
      { en: 'Taiwan', ar: 'تايوان' }, { en: 'Thailand', ar: 'تايلاند' },
      { en: 'Tunisia', ar: 'تونس' }, { en: 'Turkey', ar: 'تركيا' },
      { en: 'Uganda', ar: 'أوغندا' }, { en: 'Ukraine', ar: 'أوكرانيا' },
      { en: 'United Arab Emirates', ar: 'الإمارات' },
      { en: 'United Kingdom', ar: 'بريطانيا' },
      { en: 'United States', ar: 'الولايات المتحدة' },
      { en: 'Vietnam', ar: 'فيتنام' }, { en: 'Yemen', ar: 'اليمن' }
    ].sort((a,b) => {
      const lang = I18N.current === 'ar' ? 'ar' : 'en';
      return a[lang].localeCompare(b[lang], lang);
    });
    return I18N.current === 'ar'
      ? countries.map(c => c.ar)
      : countries.map(c => c.en);
  },
  // --- Step 2: Social Links (curated top 22 platforms) ---
  renderSocialStep() {
    const d = this.data;
    const categories = [
      { label: 'Developer', key: 'dev', platforms: ['github','gitlab','stackoverflow','devto','medium','codepen','leetcode'] },
      { label: 'Security', key: 'sec', platforms: ['hackerone','bugcrowd','tryhackme','hackthebox'] },
      { label: 'Social', key: 'soc', platforms: ['twitter','linkedin','instagram','youtube','reddit','telegram','whatsapp'] },
      { label: 'Creative', key: 'creative', platforms: ['dribbble','behance'] },
      { label: 'Support', key: 'support', platforms: ['buymeacoffee'] },
      { label: 'Other', key: 'other', platforms: ['blog'] }
    ];
    const categoryIcons = { dev:'fas fa-code', sec:'fas fa-shield-halved', soc:'fas fa-users', creative:'fas fa-palette', support:'fas fa-heart', other:'fas fa-link' };
    let html = `<h2 class="text-lg font-semibold mb-4" data-i18n="form.social.title">${I18N.t('form.social.title')}</h2>
      <p class="text-sm text-gray-500 mb-4">${I18N.t('form.social.subtitle')}</p>`;
    categories.forEach(cat => {
      const catIcon = categoryIcons[cat.key] || 'fas fa-link';
      html += `<div class="mb-5">
        <h3 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2"><i class="${catIcon} mr-1"></i> ${cat.label}</h3>
        <div class="social-grid">`;
      cat.platforms.forEach(p => {
        const val = d.socials[p] || '';
        html += `<div class="social-item">
          <i class="${Utils.socialIcon(p)} social-icon"></i>
          <input class="social-input" data-platform="${p}" value="${Utils.sanitize(val)}" placeholder="${Utils.socialLabel(p)}" title="${Utils.socialLabel(p)}">
        </div>`;
      });
      html += `</div></div>`;
    });
    html += this.navButtons();
    return html;
  },
  // --- Step 3: Skills ---
  renderSkillsStep() {
    const d = this.data;
    let html = `<h2 class="text-lg font-semibold mb-4" data-i18n="form.skills.title">${I18N.t('form.skills.title')}</h2>`;
    html += `<input class="form-input mb-4" id="skill-search" placeholder="${I18N.t('form.skills.search')}" oninput="filterSkills(this.value)">`;
    html += `<div class="flex flex-wrap gap-2 mb-4" id="selected-skills">`;
    d.skills.forEach(s => {
      html += `<span class="skill-option selected" data-skill="${s}"><i class="${Utils.skillIcon(s)}"></i> ${s} <span class="ml-1 cursor-pointer" onclick="removeSkill('${s}')">&times;</span></span>`;
    });
    html += `</div><div class="flex flex-wrap gap-2" id="skill-pool">`;
    Utils.AVAILABLE_SKILLS.forEach(s => {
      if (!d.skills.includes(s)) {
        html += `<span class="skill-option" data-skill="${s}" onclick="addSkill('${s}')"><i class="${Utils.skillIcon(s)}"></i> ${s}</span>`;
      }
    });
    html += `</div>`;
    // Custom skill input
    html += `<div class="flex gap-2 mt-4"><input class="form-input flex-1" id="custom-skill" placeholder="Add custom skill..."><button class="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm" onclick="addCustomSkill()">+</button></div>`;
    html += this.navButtons();
    return html;
  },
  // --- Step 4: Projects ---
  renderProjectsStep() {
    const d = this.data;
    let html = `<div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold" data-i18n="form.projects.title">${I18N.t('form.projects.title')}</h2>
      <button class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm" onclick="addProject()"><i class="fas fa-plus"></i> ${I18N.t('form.projects.add')}</button>
    </div>`;
    if (d.projects.length === 0) {
      html += `<div class="text-center py-10 border-2 border-dashed border-mono-300 dark:border-mono-700 rounded-xl">
        <i class="fas fa-folder-open text-3xl text-mono-300 dark:text-mono-600 mb-2"></i>
        <p class="text-mono-500 text-sm mb-3">No projects yet. Add your first project!</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium inline-flex items-center gap-1.5 shadow-sm hover:bg-blue-700 transition" onclick="addProject()">
          <i class="fas fa-plus"></i> ${I18N.t('form.projects.add')}
        </button>
      </div>`;
    } else {
      html += `<p class="text-xs text-mono-500 mb-3">${d.projects.length} project${d.projects.length > 1 ? 's' : ''} added</p>`;
      html += `<div id="projects-list" class="space-y-2">`;
      d.projects.forEach((proj, i) => {
        html += `<div class="project-card">
          <button class="remove-btn" onclick="removeProject(${i})" title="Remove project">&times;</button>
          <div class="proj-header">
            <span class="proj-number">${i + 1}</span>
            <h4>${Utils.sanitize(proj.name) || 'New Project'}</h4>
          </div>
          <div class="proj-body">
            <div class="form-group">
              <label class="form-label"><i class="fas fa-pen text-xs mr-1 opacity-50"></i>${I18N.t('form.projects.name')}</label>
              <input class="form-input proj-name" data-idx="${i}" value="${Utils.sanitize(proj.name)}" placeholder="e.g. My Awesome App">
            </div>
            <div class="form-group">
              <label class="form-label"><i class="fas fa-align-left text-xs mr-1 opacity-50"></i>${I18N.t('form.projects.desc')}</label>
              <textarea class="form-textarea proj-desc" data-idx="${i}" rows="3" placeholder="What does this project do?">${Utils.sanitize(proj.desc)}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label"><i class="fas fa-tags text-xs mr-1 opacity-50"></i>${I18N.t('form.projects.tags')}</label>
              <input class="form-input proj-tags" data-idx="${i}" value="${(proj.tags||[]).join(', ')}" placeholder="React, Node.js, API">
            </div>
            <div class="form-group">
              <label class="form-label"><i class="fas fa-link text-xs mr-1 opacity-50"></i>${I18N.t('form.projects.url')}</label>
              <input class="form-input proj-url" data-idx="${i}" value="${Utils.sanitize(proj.url||'')}" placeholder="https://github.com/...">
            </div>
          </div>
        </div>`;
      });
      html += `</div>`;
    }
    html += this.navButtons();
    return html;
  },
  // --- Step 5: Theme + Advanced Controls ---
  renderThemeStep() {
    const d = this.data;
    const palettes = [
      { id: 'default', name: 'Default Blue', icon: 'fa-solid fa-sun', colors: ['#2563EB','#A16207','#F8FAFC'] },
      { id: 'dracula', name: 'Dracula', icon: 'fa-solid fa-moon', colors: ['#BD93F9','#FF79C6','#282A36'] },
      { id: 'nord', name: 'Nord', icon: 'fa-solid fa-snowflake', colors: ['#88C0D0','#BF616A','#ECEFF4'] },
      { id: 'monokai', name: 'Monokai', icon: 'fa-solid fa-leaf', colors: ['#A6E22E','#FD971F','#272822'] },
      { id: 'tailwind', name: 'Tailwind', icon: 'fa-solid fa-wind', colors: ['#3B82F6','#F59E0B','#F8FAFC'] },
      { id: 'night', name: 'Night Owl', icon: 'fa-solid fa-crown', colors: ['#82AAFF','#C792EA','#011627'] },
      { id: 'rose', name: 'Rose', icon: 'fa-solid fa-flower', colors: ['#E11D48','#FDA4AF','#FFF1F2'] },
      { id: 'emerald', name: 'Emerald', icon: 'fa-solid fa-gem', colors: ['#059669','#34D399','#ECFDF5'] }
    ];
    const fonts = ['Inter','JetBrains Mono','Space Grotesk','Fira Code','Archivo','DM Sans','Crimson Pro','Playfair Display','Fraunces','Raleway','Montserrat','Plus Jakarta Sans','Bricolage Grotesk','Epilogue','Outfit','Sora'];
    let html = `<h2 class="text-lg font-semibold mb-1" data-i18n="form.theme.title">${I18N.t('form.theme.title')}</h2>
    <p class="text-sm text-gray-500 mb-4" data-i18n="form.theme.select">${I18N.t('form.theme.select')}</p>
    <div class="theme-grid">`;
    THEMES.forEach(t => {
      const sel = d.theme === t.id ? 'selected' : '';
      const thumbs = {
        1: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#000"/><circle cx="24" cy="20" r="10" fill="#00ffaa" opacity="0.9"/><rect x="42" y="14" width="50" height="4" rx="2" fill="#fff" opacity="0.3"/><rect x="42" y="22" width="30" height="3" rx="1.5" fill="#00ffaa" opacity="0.6"/><rect x="10" y="38" width="100" height="2" rx="1" fill="#fff" opacity="0.08"/><rect x="10" y="44" width="40" height="6" rx="2" fill="#fff" opacity="0.06"/><rect x="60" y="44" width="50" height="6" rx="2" fill="#fff" opacity="0.06"/></svg>',
        2: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#0a0a0f"/><rect x="10" y="8" width="30" height="3" rx="1.5" fill="#00ff88" opacity="0.5"/><circle cx="24" cy="24" r="6" fill="#00ff88" opacity="0.3"/><rect x="10" y="22" width="60" height="2" rx="1" fill="#00ff88" opacity="0.8"/><rect x="10" y="28" width="100" height="1" rx="0.5" fill="#fff" opacity="0.04"/><rect x="10" y="34" width="45" height="4" rx="1.5" fill="#fff" opacity="0.06"/><rect x="10" y="42" width="45" height="4" rx="1.5" fill="#fff" opacity="0.04"/><rect x="10" y="50" width="35" height="4" rx="1.5" fill="#fff" opacity="0.06"/></svg>',
        3: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#fafafa"/><circle cx="20" cy="18" r="7" fill="#e4e4e7"/><rect x="34" y="12" width="50" height="4" rx="2" fill="#09090b"/><rect x="34" y="20" width="30" height="3" rx="1.5" fill="#2563EB" opacity="0.7"/><rect x="12" y="34" width="96" height="1" rx="0.5" fill="#e4e4e7"/><rect x="12" y="40" width="40" height="5" rx="2" fill="#f4f4f5"/><rect x="12" y="48" width="25" height="4" rx="2" fill="#f4f4f5"/><rect x="42" y="48" width="25" height="4" rx="2" fill="#f4f4f5"/></svg>',
        4: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#f8fafc"/><rect x="8" y="8" width="35" height="44" rx="4" fill="#fff" stroke="#e2e8f0" stroke-width="0.8"/><circle cx="18" cy="18" r="4" fill="#2563EB"/><rect x="14" y="26" width="22" height="3" rx="1" fill="#0f172a"/><rect x="14" y="32" width="16" height="2" rx="1" fill="#64748b"/><rect x="47" y="8" width="65" height="20" rx="4" fill="#fff" stroke="#e2e8f0" stroke-width="0.8"/><rect x="55" y="14" width="20" height="4" rx="2" fill="#2563EB" opacity="0.6"/><rect x="55" y="20" width="30" height="2" rx="1" fill="#e2e8f0"/><rect x="47" y="32" width="30" height="20" rx="4" fill="#fff" stroke="#e2e8f0" stroke-width="0.8"/><rect x="82" y="32" width="30" height="20" rx="4" fill="#fff" stroke="#e2e8f0" stroke-width="0.8"/></svg>',
        5: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563EB"/><stop offset="100%" stop-color="#3B82F6"/></linearGradient></defs><rect width="120" height="60" fill="url(#g5)"/><rect x="14" y="10" width="92" height="40" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/><circle cx="28" cy="22" r="6" fill="rgba(255,255,255,0.3)"/><rect x="40" y="18" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.7)"/><rect x="40" y="24" width="25" height="2" rx="1" fill="rgba(255,255,255,0.4)"/><rect x="22" y="36" width="70" height="2" rx="1" fill="rgba(255,255,255,0.08)"/><rect x="22" y="40" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.06)"/></svg>',
        6: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#0a0a0f"/><path d="M0 6h120M0 12h120M0 18h120M0 24h120M0 30h120M0 36h120M0 42h120M0 48h120M0 54h120" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/><path d="M20 0v60M50 0v60M80 0v60M110 0v60" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/><circle cx="20" cy="16" r="5" fill="#2563EB"/><rect x="32" y="11" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.8)"/><rect x="32" y="18" width="30" height="2" rx="1" fill="#2563EB" opacity="0.6"/><rect x="14" y="32" width="92" height="1" rx="0.5" fill="rgba(255,255,255,0.05)"/><rect x="14" y="38" width="35" height="8" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/><rect x="55" y="38" width="50" height="8" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/></svg>',
        7: '<svg viewBox="0 0 120 60" style="width:100%;height:100%"><rect width="120" height="60" fill="#f8fafc"/><rect x="16" y="10" width="30" height="30" rx="4" stroke="#2563EB" stroke-width="1.5" fill="none"/><rect x="52" y="10" width="52" height="2" rx="1" fill="#2563EB"/><rect x="52" y="16" width="35" height="3" rx="1" fill="#0f172a" opacity="0.8"/><rect x="52" y="22" width="48" height="2" rx="1" fill="#64748b" opacity="0.5"/><rect x="52" y="28" width="28" height="2" rx="1" fill="#64748b" opacity="0.5"/><rect x="16" y="44" width="88" height="1" rx="0.5" fill="#e2e8f0"/><rect x="16" y="48" width="60" height="3" rx="1" fill="#f1f5f9"/><rect x="16" y="53" width="40" height="3" rx="1" fill="#f1f5f9"/></svg>'
      };
      html += `<div class="theme-card ${sel}" data-theme="${t.id}" onclick="selectTheme(${t.id})">
        <div class="theme-thumb theme-thumb-${t.id}">${thumbs[t.id] || ''}</div>
        <i class="${t.icon} theme-icon"></i>
        <div class="theme-name">${I18N.t(t.nameKey)}</div>
      </div>`;
    });
    html += `</div>`;
    // === Advanced Controls ===
    html += `<div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">`;
    html += `<h3 class="text-sm font-semibold mb-3"><i class="fas fa-palette text-blue-500 mr-2"></i>Color Palette</h3>`;
    html += `<div class="palette-grid">`;
    palettes.forEach(p => {
      const sel = d.colorPalette === p.id ? 'selected' : '';
      html += `<div class="palette-card ${sel}" data-palette="${p.id}" onclick="selectPalette('${p.id}')" title="${p.name}">
        <div class="palette-swatches"><span class="palette-dot" style="background:${p.colors[0]}"></span><span class="palette-dot" style="background:${p.colors[1]}"></span><span class="palette-dot" style="background:${p.colors[2]}"></span></div>
        <div class="palette-info"><i class="${p.icon} palette-icon"></i><span class="palette-label">${p.name}</span></div>
        <div class="palette-check"><i class="fas fa-check"></i></div>
      </div>`;
    });
    html += `</div>`;
    html += `<div class="grid grid-cols-3 gap-2 mb-4">`;
    html += `<div class="color-picker-wrap"><label>Primary</label><input type="color" class="color-picker-circle" id="color-primary" value="${d.customColors.primary}" onchange="updateColor('primary',this.value)"></div>`;
    html += `<div class="color-picker-wrap"><label>Accent</label><input type="color" class="color-picker-circle" id="color-accent" value="${d.customColors.accent}" onchange="updateColor('accent',this.value)"></div>`;
    html += `<div class="color-picker-wrap"><label>Bg</label><input type="color" class="color-picker-circle" id="color-bg" value="${d.customColors.bg}" onchange="updateColor('bg',this.value)"></div>`;
    html += `</div>`;
    // Font selector
    html += `<h3 class="text-sm font-semibold mb-2 mt-4"><i class="fas fa-font text-blue-500 mr-2"></i>Font</h3>`;
    html += `<div class="font-grid" id="font-select">`;
    fonts.forEach(f => {
      const sel = d.fontFamily === f ? ' selected' : '';
      html += `<div class="font-chip${sel}" data-font="${f}" onclick="updateFont('${f}');document.querySelectorAll('.font-chip').forEach(c=>c.classList.remove('selected'));this.classList.add('selected')" style="font-family:'${f}',sans-serif">${f}</div>`;
    });
    html += `</div>`;
    // Glassmorphism sliders
    html += `<h3 class="text-sm font-semibold mb-2 mt-4"><i class="fas fa-glass-water text-blue-500 mr-2"></i>Glassmorphism</h3>`;
    html += `<div class="grid grid-cols-3 gap-3 mb-4">`;
    html += `<div><label class="text-xs text-gray-500">Blur: <span id="blur-val">${d.glassBlur}</span>px</label><input type="range" class="control-slider" min="5" max="40" value="${d.glassBlur}" oninput="updateGlass('blur',this.value)"></div>`;
    html += `<div><label class="text-xs text-gray-500">Opacity: <span id="opacity-val">${Math.round(d.glassTransparency*100)}</span>%</label><input type="range" class="control-slider" min="5" max="50" value="${Math.round(d.glassTransparency*100)}" oninput="updateGlass('opacity',this.value)"></div>`;
    html += `<div><label class="text-xs text-gray-500">Radius: <span id="radius-val">${d.borderRadius}</span>px</label><input type="range" class="control-slider" min="4" max="32" value="${d.borderRadius}" oninput="updateGlass('radius',this.value)"></div>`;
    html += `</div>`;
    // Animations toggle
    html += `<div class="flex items-center justify-between mt-4"><span class="text-sm font-medium"><i class="fas fa-play text-blue-500 mr-2"></i>Animations</span><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer" ${d.animations ? 'checked':''} onchange="toggleAnimations(this.checked)"><div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div></label></div>`;
    // Contact form toggle
    html += `<h3 class="text-sm font-semibold mb-2 mt-5"><i class="fas fa-envelope text-green-500 mr-2"></i>Contact Form</h3>`;
    html += `<div class="flex items-center justify-between mb-2"><span class="text-sm">Enable contact form</span><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer" ${d.contactForm ? 'checked':''} onchange="toggleContactForm(this.checked)"><div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div></label></div>`;
    html += `<div id="contact-email-field" class="${d.contactForm ? '' : 'hidden'}"><input class="form-input" id="contact-email" type="email" placeholder="your@email.com" value="${d.contactEmail}" oninput="FormState.data.contactEmail=this.value"></div>`;
    // GitHub Sync — free & simple, replaces custom domain
    html += `<div class="mt-5 pt-4 border-t border-mono-200 dark:border-mono-700">
      <h3 class="text-sm font-semibold mb-2"><i class="fab fa-github text-gray-800 dark:text-gray-200 mr-2"></i>GitHub Sync</h3>
      <p class="text-xs text-mono-500 mb-3">Import your GitHub repos as portfolio projects — free hosting included</p>
      <input class="form-input mb-2" id="form-pat-input" type="password" placeholder="GitHub Personal Access Token (ghp_...)" value="${d.githubPat||''}" oninput="FormState.data.githubPat=this.value">
      <div class="flex gap-2">
        <button class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-medium transition shadow-sm" onclick="syncFromForm()">
          <i class="fas fa-sync mr-1"></i> Sync Repos
        </button>
        <button class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-medium transition shadow-sm" onclick="deployFromForm()" title="Deploy to GitHub Pages">
          <i class="fab fa-github mr-1"></i> Deploy
        </button>
      </div>
      <p class="text-xs text-mono-400 mt-2">Token never saved — stays in browser memory. Requires <code>repo</code> scope.</p>
    </div>
    <!-- Export / Import Config (secondary, bottom) -->
    <div class="mt-5 pt-3 border-t border-mono-200 dark:border-mono-700 flex items-center justify-center gap-3">
      <button class="text-xs px-4 py-2 border border-mono-300 dark:border-mono-700 rounded-xl font-medium hover:bg-mono-100 dark:hover:bg-mono-800 transition flex items-center gap-1.5" onclick="exportConfig()">
        <i class="fas fa-download text-mono-500"></i>
        <span>${I18N.t('export.saveConfig')}</span>
      </button>
      <button class="text-xs px-4 py-2 border border-mono-300 dark:border-mono-700 rounded-xl font-medium hover:bg-mono-100 dark:hover:bg-mono-800 transition flex items-center gap-1.5" onclick="importConfig()">
        <i class="fas fa-upload text-mono-500"></i>
        <span>${I18N.t('export.loadConfig')}</span>
      </button>
    </div>`;
    html += `</div>`;
    html += `<div class="mt-4">${this.navButtons(true)}</div>`;
    return html;
  },
  navButtons(isLast = false) {
    const prev = this.currentStep > 1
      ? `<button class="px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition" onclick="prevStep()">${I18N.t('btn.prev')}</button>`
      : `<div></div>`;
    const next = isLast
      ? `<button class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-medium transition shadow-lg" onclick="finishForm()">${I18N.t('btn.finish')}</button>`
      : `<button class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition shadow-lg" onclick="nextStep()">${I18N.t('btn.next')}</button>`;
    return `<div class="form-nav">${prev}${next}</div>`;
  },
  bindStepEvents() {
    // Bind profile inputs
    const name = document.getElementById('input-name');
    if (name) { name.oninput = (e) => { this.data.name = e.target.value; triggerPreview(); }; }
    const bio = document.getElementById('input-bio');
    if (bio) { bio.oninput = (e) => { this.data.bio = e.target.value; triggerPreview(); }; }
    const email = document.getElementById('input-email');
    if (email) { email.oninput = (e) => { this.data.email = e.target.value; triggerPreview(); }; }
    const loc = document.getElementById('input-location');
    if (loc) { loc.onchange = (e) => { this.data.location = e.target.value; triggerPreview(); }; }
    // Photo upload
    const photoUpload = document.getElementById('photo-upload');
    const photoInput = document.getElementById('photo-input');
    const photoUrl = document.getElementById('photo-url');
    if (photoUpload && photoInput) {
      photoUpload.onclick = () => photoInput.click();
      photoInput.onchange = async (e) => {
        if (e.target.files?.[0]) {
          this.data.photo = await Utils.fileToBase64(e.target.files[0]);
          this.data.photoFile = e.target.files[0];
          triggerPreview();
          this.renderStep(this.currentStep);
        }
      };
    }
    if (photoUrl) {
      photoUrl.oninput = Utils.debounce(async (e) => {
        if (e.target.value) {
          const url = await Utils.urlToBase64(e.target.value);
          if (url) { this.data.photo = url; triggerPreview(); }
        }
      }, 500);
    }
    // Social inputs
    document.querySelectorAll('.social-input').forEach(inp => {
      inp.oninput = (e) => {
        this.data.socials[e.target.dataset.platform] = e.target.value;
        triggerPreview();
      };
    });
  }
};

// === Global helper functions (called from inline onclick) ===
function nextStep() {
  // Validate required fields before advancing
  if (FormState.currentStep === 1) {
    const name = (document.getElementById('input-name')?.value || '').trim();
    if (!name) {
      document.getElementById('input-name')?.classList.add('border-red-500', 'ring-1', 'ring-red-300');
      Utils.showToast('Name is required to build your portfolio', 'error');
      return;
    }
    document.getElementById('input-name')?.classList.remove('border-red-500', 'ring-1', 'ring-red-300');
  }
  if (FormState.currentStep < FormState.totalSteps) {
    FormState.renderStep(FormState.currentStep + 1);
  }
}
function prevStep() {
  if (FormState.currentStep > 1) {
    FormState.renderStep(FormState.currentStep - 1);
  }
}
function finishForm() {
  const name = (FormState.data.name || '').trim();
  if (!name) {
    Utils.showToast('Please enter your name first!', 'error');
    FormState.renderStep(1);
    return;
  }
  triggerPreview();

  // Check cooldown
  const lastGen = localStorage.getItem('portfolio-last-generate');
  const cooldownMs = 5 * 60 * 1000;
  const cooldownMsg = document.getElementById('modal-cooldown-msg');
  if (lastGen) {
    const elapsed = Date.now() - parseInt(lastGen);
    if (elapsed < cooldownMs) {
      const remaining = Math.ceil((cooldownMs - elapsed) / 60000);
      cooldownMsg.textContent = I18N.current === 'ar'
        ? `⏳ انتظر ${remaining} دقيقة قبل الإنشاء التالي`
        : `⏳ Please wait ${remaining} minute(s) before next generation`;
      cooldownMsg.style.color = '#f59e0b';
    } else {
      cooldownMsg.textContent = '';
    }
  } else {
    cooldownMsg.textContent = '';
  }

  // Show confirmation modal
  document.getElementById('generate-modal').classList.remove('hidden');
  document.getElementById('generate-modal').style.display = 'flex';
}
function confirmGenerate() {
  document.getElementById('generate-modal').classList.add('hidden');
  document.getElementById('generate-modal').style.display = 'none';

  localStorage.setItem('portfolio-last-generate', String(Date.now()));

  // Show completion footer with Deploy + ZIP
  const footer = document.getElementById('completion-footer');
  footer.classList.remove('hidden');
  document.getElementById('completion-actions').classList.remove('hidden');
  document.getElementById('deploy-section').classList.add('hidden');
  setTimeout(() => footer.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);

  Utils.showToast(I18N.t('export.success') || 'Portfolio ready! Use deploy or ZIP to publish.', 'success');
}
function cancelGenerate() {
  document.getElementById('generate-modal').classList.add('hidden');
  document.getElementById('generate-modal').style.display = 'none';
}
function selectTheme(id) {
  FormState.data.theme = id;
  document.querySelectorAll('.theme-card').forEach(c => c.classList.toggle('selected', parseInt(c.dataset.theme) === id));
  triggerPreview();
}
function addSkill(skill) {
  if (!FormState.data.skills.includes(skill)) {
    FormState.data.skills.push(skill);
    FormState.renderStep(3);
    triggerPreview();
  }
}
function removeSkill(skill) {
  FormState.data.skills = FormState.data.skills.filter(s => s !== skill);
  FormState.renderStep(3);
  triggerPreview();
}
function addCustomSkill() {
  const inp = document.getElementById('custom-skill');
  if (inp?.value.trim()) {
    addSkill(inp.value.trim());
    inp.value = '';
  }
}
function filterSkills(q) {
  document.querySelectorAll('#skill-pool .skill-option').forEach(el => {
    el.style.display = el.textContent.toLowerCase().includes(q.toLowerCase()) ? '' : 'none';
  });
}
function addProject() {
  FormState.data.projects.push({ name: '', desc: '', tags: [], url: '' });
  FormState.renderStep(4);
}
function removeProject(idx) {
  FormState.data.projects.splice(idx, 1);
  FormState.renderStep(4);
}
function triggerPreview() {
  if (typeof renderPreview === 'function') renderPreview();
}

// === Education Helpers ===
function addEducation() {
  FormState.data.education.push({ degree: '', school: '', year: '' });
  FormState.renderStep(1);
}
function removeEducation(idx) {
  FormState.data.education.splice(idx, 1);
  FormState.renderStep(1);
}

// === Bug Bounty Helpers ===
function addBugBounty() {
  FormState.data.bugbounty.push({ platform: 'hackerone', username: '' });
  FormState.renderStep(1);
}
function removeBugBounty(idx) {
  FormState.data.bugbounty.splice(idx, 1);
  FormState.renderStep(1);
}

// === Advanced Controls Global Functions ===
function selectPalette(id) {
  const palettes = {
    default: { primary: '#2563EB', accent: '#A16207', bg: '#F8FAFC' },
    dracula: { primary: '#BD93F9', accent: '#FF79C6', bg: '#282A36' },
    nord: { primary: '#88C0D0', accent: '#BF616A', bg: '#ECEFF4' },
    monokai: { primary: '#A6E22E', accent: '#FD971F', bg: '#272822' },
    tailwind: { primary: '#3B82F6', accent: '#F59E0B', bg: '#F8FAFC' },
    night: { primary: '#82AAFF', accent: '#C792EA', bg: '#011627' }
  };
  FormState.data.colorPalette = id;
  if (palettes[id]) {
    FormState.data.customColors = palettes[id];
    ['primary','accent','bg'].forEach(k => {
      const el = document.getElementById('color-'+k);
      if (el) el.value = palettes[id][k];
    });
  }
  document.querySelectorAll('.palette-card').forEach(c => c.classList.remove('selected'));
  const el = document.querySelector(`.palette-card[data-palette="${id}"]`);
  if (el) el.classList.add('selected');
  triggerPreview();
}
function updateColor(key, val) {
  FormState.data.customColors[key] = val;
  FormState.data.colorPalette = 'custom';
  triggerPreview();
}
function updateFont(val) {
  FormState.data.fontFamily = val;
  triggerPreview();
}
function updateGlass(type, val) {
  if (type === 'blur') { FormState.data.glassBlur = parseInt(val); document.getElementById('blur-val').textContent = val; }
  if (type === 'opacity') { FormState.data.glassTransparency = parseInt(val)/100; document.getElementById('opacity-val').textContent = val; }
  if (type === 'radius') { FormState.data.borderRadius = parseInt(val); document.getElementById('radius-val').textContent = val; }
  triggerPreview();
}
function toggleAnimations(val) {
  FormState.data.animations = val;
  triggerPreview();
}
function toggleContactForm(val) {
  FormState.data.contactForm = val;
  document.getElementById('contact-email-field').classList.toggle('hidden', !val);
}
function syncFromForm() {
  const pat = FormState.data.githubPat || document.getElementById('form-pat-input')?.value?.trim();
  if (!pat) {
    Utils.showToast(I18N.current === 'ar' ? 'أدخل رمز GitHub أولاً' : 'Enter GitHub token first', 'error');
    return;
  }
  document.getElementById('pat-input') ? document.getElementById('pat-input').value = pat : null;
  syncGitHubRepos();
}
function deployFromForm() {
  const pat = FormState.data.githubPat || document.getElementById('form-pat-input')?.value?.trim();
  if (!pat) {
    Utils.showToast(I18N.current === 'ar' ? 'أدخل رمز GitHub أولاً' : 'Enter GitHub token first', 'error');
    return;
  }
  document.getElementById('pat-input') ? document.getElementById('pat-input').value = pat : null;
  document.getElementById('btn-deploy').click();
}
