/* =============================================
   i18n.js — Arabic / English Translation System
   ============================================= */
const I18N = {
  current: 'en',
  dirs: { en: 'ltr', ar: 'rtl' },
  strings: {
    'app.title': {
      en: 'Universal Portfolio Generator',
      ar: 'أداة إنشاء المحفظة الشخصية'
    },
    'app.step1': { en: 'Profile', ar: 'الملف الشخصي' },
    'app.step2': { en: 'Social', ar: 'التواصل الاجتماعي' },
    'app.step3': { en: 'Skills', ar: 'المهارات' },
    'app.step4': { en: 'Projects', ar: 'المشاريع' },
    'app.step5': { en: 'Theme', ar: 'القالب' },
    'form.profile.title': { en: 'Personal Information', ar: 'المعلومات الشخصية' },
    'form.profile.fullName': { en: 'Full Name *', ar: 'الاسم الكامل *' },
    'form.profile.bio': { en: 'Bio / Tagline', ar: 'نبذة تعريفية' },
    'form.profile.role': { en: 'Primary Role *', ar: 'المسمى الوظيفي *' },
    'form.profile.email': { en: 'Email', ar: 'البريد الإلكتروني' },
    'form.profile.location': { en: 'Location', ar: 'الموقع' },
    'form.profile.photo': { en: 'Profile Photo', ar: 'الصورة الشخصية' },
    'form.profile.cv': { en: 'CV / Resume (PDF)', ar: 'السيرة الذاتية (PDF)' },
    'form.profile.placeholder.name': { en: 'e.g. John Doe', ar: 'مثال: أحمد علي' },
    'form.profile.placeholder.bio': { en: 'Full-stack developer & security researcher', ar: 'مطور ويب وباحث أمني' },
    'form.role.softwareengineer': { en: 'Software Engineer', ar: 'مهندس برمجيات' },
    'form.role.securityresearcher': { en: 'Security Researcher', ar: 'باحث أمني' },
    'form.role.bugbountyhunter': { en: 'Bug Bounty Hunter', ar: 'صياد ثغرات' },
    'form.role.techfounder': { en: 'Tech Founder', ar: 'مؤسس تقني' },
    'form.role.uidesigner': { en: 'UI/UX Designer', ar: 'مصمم واجهات' },
    'form.role.datascientist': { en: 'Data Scientist', ar: 'عالم بيانات' },
    'form.social.title': { en: 'Social Links', ar: 'حساباتي' },
    'form.social.subtitle': { en: 'Add your online presence links', ar: 'أضف روابط حضورك الرقمي' },
    'form.education.title': { en: 'Education', ar: 'المؤهلات العلمية' },
    'form.education.add': { en: 'Add Degree', ar: 'إضافة مؤهل' },
    'form.education.degree': { en: 'Degree / Major', ar: 'الشهادة / التخصص' },
    'form.education.school': { en: 'Institution', ar: 'الجهة التعليمية' },
    'form.education.year': { en: 'Year', ar: 'السنة' },
    'form.bugbounty.title': { en: 'Bug Bounty', ar: 'صيد الثغرات' },
    'form.bugbounty.add': { en: 'Add Platform', ar: 'إضافة منصة' },
    'form.bugbounty.username': { en: 'Username / Profile', ar: 'اسم المستخدم' },
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
    'theme.1': { en: 'Aether', ar: 'أثير' },
    'theme.2': { en: 'Terminal', ar: 'سطر الأوامر' },
    'theme.3': { en: 'Minimal', ar: 'أنيق' },
    'theme.4': { en: 'Bento Grid', ar: 'شبكي' },
    'theme.5': { en: 'Glassmorphic', ar: 'بلوري' },
    'theme.6': { en: 'Dark Premium', ar: 'ليلي' },
    'theme.7': { en: 'Academic', ar: 'أكاديمي' },
    'btn.next': { en: 'Next →', ar: 'التالي ←' },
    'btn.prev': { en: '← Back', ar: '← السابق' },
    'btn.finish': { en: 'Generate', ar: 'إنشاء' },
    'export.deploy': { en: 'Deploy to GitHub Pages', ar: 'نشر على GitHub Pages' },
    'export.zip': { en: 'Download ZIP', ar: 'تحميل ZIP' },
    'export.success': { en: 'Portfolio ready!', ar: 'البورتفوليو جاهز!' },
    'export.saveConfig': { en: 'Export Config', ar: 'تصدير الإعدادات' },
    'export.loadConfig': { en: 'Import Config', ar: 'استيراد الإعدادات' },
    'export.patLabel': { en: 'GitHub Token', ar: 'رمز GitHub الشخصي' },
    'export.patNote': { en: 'Requires repo scope. Never stored — stays in browser memory only.', ar: 'يتطلب صلاحية repo. لا يُحفظ — يبقى في ذاكرة المتصفح فقط.' },
    'app.preview': { en: 'Preview', ar: 'معاينة' },
    'loading.generating': { en: 'Generating your portfolio...', ar: 'جارٍ إنشاء البورتفوليو...' },
    'loading.deploying': { en: 'Deploying to GitHub Pages...', ar: 'جارٍ النشر على GitHub Pages...' },
    'loading.zipping': { en: 'Creating ZIP archive...', ar: 'جارٍ إنشاء الملف المضغوط...' },
    'success.deployed': { en: 'Deployed successfully!', ar: 'تم النشر بنجاح!' },
    'success.zipped': { en: 'ZIP downloaded!', ar: 'تم تحميل الملف!' },
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
    FormState.renderStep(FormState.currentStep);
  }
};
