/* =============================================
   i18n.js — Arabic / English Translation System
   ============================================= */
const I18N = {
  current: 'en',
  dirs: { en: 'ltr', ar: 'rtl' },
  strings: {
    'app.title': {
      en: 'Universal Portfolio Generator',
      ar: 'مُنشئ البورتفوليو العالمي'
    },
    'app.step1': { en: 'Profile', ar: 'الملف الشخصي' },
    'app.step2': { en: 'Social', ar: 'التواصل الاجتماعي' },
    'app.step3': { en: 'Skills', ar: 'المهارات' },
    'app.step4': { en: 'Projects', ar: 'المشاريع' },
    'app.step5': { en: 'Theme', ar: 'القالب' },
    'form.profile.title': { en: 'Personal Information', ar: 'المعلومات الشخصية' },
    'form.profile.fullName': { en: 'Full Name *', ar: 'الاسم الكامل *' },
    'form.profile.bio': { en: 'Bio / Tagline', ar: 'السيرة المختصرة' },
    'form.profile.role': { en: 'Primary Role *', ar: 'المجال الأساسي *' },
    'form.profile.email': { en: 'Email', ar: 'البريد الإلكتروني' },
    'form.profile.location': { en: 'Location', ar: 'الموقع' },
    'form.profile.photo': { en: 'Profile Photo', ar: 'الصورة الشخصية' },
    'form.profile.cv': { en: 'CV / Resume (PDF)', ar: 'السيرة الذاتية (PDF)' },
    'form.profile.placeholder.name': { en: 'e.g. John Doe', ar: 'مثال: أحمد علي' },
    'form.profile.placeholder.bio': { en: 'Full-stack developer & security researcher', ar: 'مطور ويب وباحث أمني' },
    'form.role.software': { en: 'Software Engineer', ar: 'مهندس برمجيات' },
    'form.role.founder': { en: 'Tech Founder / Entrepreneur', ar: 'مؤسس تقني / رائد أعمال' },
    'form.role.designer': { en: 'UI/UX Designer', ar: 'مصمم واجهات' },
    'form.role.security': { en: 'Security Researcher', ar: 'باحث أمني' },
    'form.role.data': { en: 'Data Scientist', ar: 'عالم بيانات' },
    'form.social.title': { en: 'Social Links', ar: 'روابط التواصل' },
    'form.skills.title': { en: 'Skills & Technologies', ar: 'المهارات والتقنيات' },
    'form.skills.search': { en: 'Search skills...', ar: 'ابحث عن مهارة...' },
    'form.projects.title': { en: 'Projects / Work', ar: 'المشاريع / الأعمال' },
    'form.projects.add': { en: '+ Add Project', ar: '+ إضافة مشروع' },
    'form.projects.name': { en: 'Project Name', ar: 'اسم المشروع' },
    'form.projects.desc': { en: 'Description', ar: 'الوصف' },
    'form.projects.tags': { en: 'Tags (comma separated)', ar: 'وسوم (مفصولة بفواصل)' },
    'form.projects.url': { en: 'Project URL', ar: 'رابط المشروع' },
    'form.theme.title': { en: 'Choose Your Theme', ar: 'اختر قالبك' },
    'form.theme.select': { en: 'Select a theme for your portfolio', ar: 'اختر قالباً لبورتفوليو الخاص بك' },
    'theme.1': { en: 'Startup Minimal', ar: 'شركات ناشئة' },
    'theme.2': { en: 'Network Mesh', ar: 'شبكة أمان' },
    'theme.3': { en: 'Software Engineer', ar: 'مهندس برمجيات' },
    'theme.4': { en: 'Bento Grid', ar: 'بينتو جريد' },
    'theme.5': { en: 'Terminal CLI', ar: 'واجهة أوامر' },
    'theme.6': { en: 'Glassmorphic', ar: 'زجاجي' },
    'theme.7': { en: 'Academic', ar: 'أكاديمي' },
    'btn.next': { en: 'Next →', ar: 'التالي ←' },
    'btn.prev': { en: '← Back', ar: '← السابق' },
    'btn.finish': { en: 'Generate ✓', ar: 'إنشاء ✓' },
    'export.deploy': { en: 'Deploy to GitHub Pages', ar: 'نشر على GitHub Pages' },
    'export.zip': { en: 'Download ZIP', ar: 'تحميل ZIP' },
    'export.saveConfig': { en: 'Export Config', ar: 'تصدير الإعدادات' },
    'export.loadConfig': { en: 'Import Config', ar: 'استيراد الإعدادات' },
    'export.patLabel': { en: 'GitHub Personal Access Token', ar: 'رمز الوصول الشخصي GitHub' },
    'export.patNote': { en: 'Requires repo scope. Never stored — stays in browser memory only.', ar: 'يتطلب صلاحية repo. لا يُحفظ — يبقى في ذاكرة المتصفح فقط.' },
    'loading.generating': { en: 'Generating your portfolio...', ar: 'جارٍ إنشاء البورتفوليو...' },
    'loading.deploying': { en: 'Deploying to GitHub Pages...', ar: 'جارٍ النشر على GitHub Pages...' },
    'loading.zipping': { en: 'Creating ZIP archive...', ar: 'جارٍ إنشاء الملف المضغوط...' },
    'success.deployed': { en: '🎉 Deployed successfully!', ar: '🎉 تم النشر بنجاح!' },
    'success.zipped': { en: 'ZIP downloaded!', ar: 'تم تحميل ZIP!' },
    'success.configSaved': { en: 'Config exported!', ar: 'تم تصدير الإعدادات!' },
    'success.configLoaded': { en: 'Config imported!', ar: 'تم استيراد الإعدادات!' },
    'error.patRequired': { en: 'Please enter your GitHub PAT first.', ar: 'الرجاء إدخال رمز GitHub PAT أولاً.' },
    'error.deployFailed': { en: 'Deployment failed. Check your PAT.', ar: 'فشل النشر. تحقق من الرمز.' },
    'error.fillRequired': { en: 'Please fill in all required fields (*).', ar: 'الرجاء تعبئة جميع الحقول الإلزامية (*).' },
  },
  t(key) {
    return this.strings[key]?.[this.current] || key;
  },
  setLang(lang) {
    if (!this.strings['app.title'][lang]) return;
    this.current = lang;
    document.documentElement.dir = this.dirs[lang] || 'ltr';
    document.documentElement.lang = lang;
    document.getElementById('lang-label').textContent = lang === 'ar' ? 'EN' : 'AR';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      el.textContent = this.t(k);
    });
    this.updateForm();
  },
  toggle() {
    this.setLang(this.current === 'en' ? 'ar' : 'en');
  },
  updateForm() {
    // Re-render current form step with new language
    if (typeof renderFormStep === 'function') {
      const currentStep = document.querySelector('.form-step.active')?.dataset?.step || 1;
      renderFormStep(parseInt(currentStep));
    }
  }
};
