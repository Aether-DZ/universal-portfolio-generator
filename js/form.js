/* =============================================
   form.js — Multi-step Form Logic + Validation
   ============================================= */
const FormState = {
  currentStep: 1,
  totalSteps: 5,
  data: {
    name: '', bio: '', role: 'Software Engineer', email: '', location: '',
    photo: '', photoFile: null, cv: '', cvFile: null,
    socials: {},
    skills: [],
    projects: [],
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
    githubUsername: ''
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
    this.renderStep(1);
    // Auto-save on changes
    document.addEventListener('input', this.autoSave.bind(this));
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
               'Inter:wght@400;500;600;700',
      fontFamilyCss: d.fontFamily || 'Inter'
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
    document.querySelectorAll('.step-dot').forEach(dot => {
      const s = parseInt(dot.dataset.step);
      dot.classList.toggle('active', s === this.currentStep);
      dot.classList.toggle('done', s < this.currentStep);
    });
    const progress = document.querySelector('.step-progress');
    if (progress) {
      progress.style.width = ((this.currentStep - 1) / (this.totalSteps - 1) * 100) + '%';
    }
  },
  // --- Step 1: Profile ---
  renderProfileStep() {
    const d = this.data;
    const roles = [
      'Software Engineer', 'Tech Founder / Entrepreneur', 'UI/UX Designer',
      'Security Researcher', 'Data Scientist'
    ];
    return `
      <h2 class="text-lg font-semibold mb-4" data-i18n="form.profile.title">${I18N.t('form.profile.title')}</h2>
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.fullName">${I18N.t('form.profile.fullName')}</label>
        <input class="form-input" id="input-name" value="${Utils.sanitize(d.name)}" placeholder="${I18N.t('form.profile.placeholder.name')}">
      </div>
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.bio">${I18N.t('form.profile.bio')}</label>
        <textarea class="form-textarea" id="input-bio" placeholder="${I18N.t('form.profile.placeholder.bio')}">${Utils.sanitize(d.bio)}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.role">${I18N.t('form.profile.role')}</label>
        <select class="form-select" id="input-role">
          ${roles.map(r => `<option value="${r}" ${d.role === r ? 'selected' : ''}>${I18N.t('form.role.' + r.toLowerCase().replace(/[^a-z]/g,'')) || r}</option>`).join('')}
        </select>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.email">${I18N.t('form.profile.email')}</label>
          <input class="form-input" id="input-email" type="email" value="${Utils.sanitize(d.email)}">
        </div>
        <div class="form-group">
          <label class="form-label" data-i18n="form.profile.location">${I18N.t('form.profile.location')}</label>
          <input class="form-input" id="input-location" value="${Utils.sanitize(d.location)}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.photo">${I18N.t('form.profile.photo')}</label>
        <div class="file-upload-area ${d.photo ? 'has-image' : ''}" id="photo-upload">
          ${d.photo ? `<img src="${d.photo}" class="w-20 h-20 rounded-full object-cover mx-auto mb-2">` : '<i class="fas fa-camera text-3xl text-gray-400 mb-2"></i>'}
          <p class="text-sm text-gray-500">${d.photo ? 'Click to change' : 'Click or drag image here'}</p>
        </div>
        <input type="file" id="photo-input" accept="image/*" class="hidden">
        <input class="form-input mt-2" id="photo-url" placeholder="Or paste image URL" value="${d.photo && !d.photo.startsWith('data:') ? Utils.sanitize(d.photo) : ''}">
      </div>
      <div class="form-group">
        <label class="form-label" data-i18n="form.profile.cv">${I18N.t('form.profile.cv')}</label>
        <input type="file" id="cv-input" accept=".pdf" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
      </div>
      ${this.navButtons()}
    `;
  },
  // --- Step 2: Social Links ---
  renderSocialStep() {
    const d = this.data;
    let html = `<h2 class="text-lg font-semibold mb-4" data-i18n="form.social.title">${I18N.t('form.social.title')}</h2><p class="text-sm text-gray-500 mb-4">Add your social profiles (optional — leave blank to skip)</p>`;
    Utils.SOCIAL_PLATFORMS.forEach(p => {
      const val = d.socials[p] || '';
      html += `<div class="social-row">
        <i class="${Utils.socialIcon(p)} social-icon"></i>
        <input class="form-input social-input" data-platform="${p}" value="${Utils.sanitize(val)}" placeholder="${Utils.socialLabel(p)} URL">
      </div>`;
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
      html += `<p class="text-gray-500 text-sm py-8 text-center">No projects yet. Click "Add Project" to start.</p>`;
    } else {
      html += `<div id="projects-list">`;
      d.projects.forEach((proj, i) => {
        html += `<div class="project-card">
          <button class="remove-btn" onclick="removeProject(${i})">&times;</button>
          <div class="form-group"><label class="form-label">${I18N.t('form.projects.name')}</label><input class="form-input proj-name" data-idx="${i}" value="${Utils.sanitize(proj.name)}"></div>
          <div class="form-group"><label class="form-label">${I18N.t('form.projects.desc')}</label><textarea class="form-textarea proj-desc" data-idx="${i}">${Utils.sanitize(proj.desc)}</textarea></div>
          <div class="form-group"><label class="form-label">${I18N.t('form.projects.tags')}</label><input class="form-input proj-tags" data-idx="${i}" value="${(proj.tags||[]).join(', ')}"></div>
          <div class="form-group"><label class="form-label">${I18N.t('form.projects.url')}</label><input class="form-input proj-url" data-idx="${i}" value="${Utils.sanitize(proj.url||'')}"></div>
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
      { id: 'default', name: 'Default Blue', colors: ['#2563EB','#A16207','#F8FAFC'] },
      { id: 'dracula', name: 'Dracula', colors: ['#BD93F9','#FF79C6','#282A36'] },
      { id: 'nord', name: 'Nord', colors: ['#88C0D0','#BF616A','#ECEFF4'] },
      { id: 'monokai', name: 'Monokai', colors: ['#A6E22E','#FD971F','#272822'] },
      { id: 'tailwind', name: 'Tailwind', colors: ['#3B82F6','#F59E0B','#F8FAFC'] },
      { id: 'night', name: 'Night Owl', colors: ['#82AAFF','#C792EA','#011627'] }
    ];
    const fonts = ['Inter','JetBrains Mono','Space Grotesk','Fira Code','Archivo','DM Sans','Crimson Pro'];
    let html = `<h2 class="text-lg font-semibold mb-1" data-i18n="form.theme.title">${I18N.t('form.theme.title')}</h2>
    <p class="text-sm text-gray-500 mb-4" data-i18n="form.theme.select">${I18N.t('form.theme.select')}</p>
    <div class="theme-grid">`;
    THEMES.forEach(t => {
      const sel = d.theme === t.id ? 'selected' : '';
      html += `<div class="theme-card ${sel}" data-theme="${t.id}" onclick="selectTheme(${t.id})">
        <i class="${t.icon} theme-icon"></i>
        <div class="theme-name">${I18N.t(t.nameKey)}</div>
      </div>`;
    });
    html += `</div>`;
    // === Advanced Controls ===
    html += `<div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">`;
    html += `<h3 class="text-sm font-semibold mb-3"><i class="fas fa-palette text-blue-500 mr-2"></i>Color Palette</h3>`;
    html += `<div class="flex flex-wrap gap-2 mb-4">`;
    palettes.forEach(p => {
      const sel = d.colorPalette === p.id ? 'selected ring-2 ring-blue-500' : '';
      html += `<div class="color-swatch ${sel} cursor-pointer" data-palette="${p.id}" onclick="selectPalette('${p.id}')" title="${p.name}" style="background:${p.colors[0]}"></div>`;
    });
    html += `</div>`;
    html += `<div class="grid grid-cols-3 gap-2 mb-4">`;
    html += `<div><label class="text-xs text-gray-500">Primary</label><input type="color" class="block w-full h-8 rounded border" id="color-primary" value="${d.customColors.primary}" onchange="updateColor('primary',this.value)"></div>`;
    html += `<div><label class="text-xs text-gray-500">Accent</label><input type="color" class="block w-full h-8 rounded border" id="color-accent" value="${d.customColors.accent}" onchange="updateColor('accent',this.value)"></div>`;
    html += `<div><label class="text-xs text-gray-500">Background</label><input type="color" class="block w-full h-8 rounded border" id="color-bg" value="${d.customColors.bg}" onchange="updateColor('bg',this.value)"></div>`;
    html += `</div>`;
    // Font selector
    html += `<h3 class="text-sm font-semibold mb-2 mt-4"><i class="fas fa-font text-blue-500 mr-2"></i>Font</h3>`;
    html += `<select class="form-select mb-4" id="font-select" onchange="updateFont(this.value)">`;
    fonts.forEach(f => html += `<option value="${f}" ${d.fontFamily === f ? 'selected':''}>${f}</option>`);
    html += `</select>`;
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
    // Custom domain
    html += `<h3 class="text-sm font-semibold mb-2 mt-5"><i class="fas fa-globe text-purple-500 mr-2"></i>Custom Domain</h3>`;
    html += `<input class="form-input" placeholder="yourdomain.com" value="${d.customDomain}" oninput="FormState.data.customDomain=this.value">`;
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
    const role = document.getElementById('input-role');
    if (role) { role.onchange = (e) => { this.data.role = e.target.value; triggerPreview(); }; }
    const email = document.getElementById('input-email');
    if (email) { email.oninput = (e) => { this.data.email = e.target.value; triggerPreview(); }; }
    const loc = document.getElementById('input-location');
    if (loc) { loc.oninput = (e) => { this.data.location = e.target.value; triggerPreview(); }; }
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
    // CV upload
    const cvInput = document.getElementById('cv-input');
    if (cvInput) {
      cvInput.onchange = async (e) => {
        if (e.target.files?.[0]) {
          this.data.cvFile = e.target.files[0];
          this.data.cv = await Utils.fileToBase64(e.target.files[0]);
        }
      };
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
  // Validate required fields
  if (!FormState.data.name.trim()) {
    Utils.showToast(I18N.t('error.fillRequired'), 'error');
    FormState.renderStep(1);
    return;
  }
  triggerPreview();
  Utils.showToast('Portfolio ready! Generate or deploy using the buttons below.', 'success');
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
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected','ring-2','ring-blue-500'));
  const el = document.querySelector(`.color-swatch[data-palette="${id}"]`);
  if (el) el.classList.add('selected','ring-2','ring-blue-500');
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
