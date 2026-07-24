/* Handlebars Helpers for Theme Rendering */
Handlebars.registerHelper('t', function(key) {
  const dict = {
    'skills': I18N.current === 'ar' ? 'المهارات' : 'Skills',
    'projects': I18N.current === 'ar' ? 'المشاريع' : 'Projects',
    'education': I18N.current === 'ar' ? 'التعليم' : 'Education',
    'bugbounty': I18N.current === 'ar' ? 'صيد الثغرات' : 'Bug Bounty',
    'about': I18N.current === 'ar' ? 'نبذة' : 'About',
    'contact': I18N.current === 'ar' ? 'تواصل' : 'Contact'
  };
  return dict[key] || key;
});
Handlebars.registerHelper('eq', function(a, b) { return a === b; });
Handlebars.registerHelper('ne', function(a, b) { return a !== b; });

document.addEventListener('DOMContentLoaded', function() {
  AOS.init({ duration: 600, once: true });

  FormState.init();
  initPreview();

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => I18N.toggle());

  // Detect system dark mode preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  if (prefersDark.matches) {
    document.documentElement.classList.add('dark');
  }
  const icon = document.querySelector('#theme-toggle i');
  icon.className = prefersDark.matches ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm';

  // Listen for system theme changes (browser toggle)
  prefersDark.addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const i = document.querySelector('#theme-toggle i');
    i.className = e.matches ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm';
  });

  // Manual dark/light toggle (overrides system)
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = document.querySelector('#theme-toggle i');
    icon.className = document.documentElement.classList.contains('dark') ? 'fas fa-sun text-sm' : 'fas fa-moon text-sm';
  });

  // Preview panel toggle
  const previewToggle = document.getElementById('preview-toggle');
  const previewPanel = document.getElementById('preview-panel');

  previewToggle.addEventListener('click', () => {
    const isOpen = previewPanel.classList.contains('open');
    previewPanel.classList.toggle('open');
    previewToggle.classList.toggle('active');
    previewToggle.innerHTML = isOpen
      ? '<i class="fas fa-eye"></i><span class="hidden sm:inline">Preview</span>'
      : '<i class="fas fa-eye"></i><span class="hidden sm:inline">Preview</span>';
    if (!isOpen) renderPreview();
  });

  document.getElementById('preview-close').addEventListener('click', () => {
    previewPanel.classList.remove('open');
    previewToggle.classList.remove('active');
    previewToggle.innerHTML = '<i class="fas fa-eye"></i><span class="hidden sm:inline">Preview</span>';
  });

  // GitHub deploy
  document.getElementById('btn-deploy').addEventListener('click', deployToGitHub);

  // ZIP download
  document.getElementById('btn-zip').addEventListener('click', downloadZIP);

  // Show deploy section on first deploy click
  document.getElementById('btn-deploy').addEventListener('click', function showDeploy() {
    document.getElementById('deploy-section').classList.remove('hidden');
  }, { once: true });

  // GitHub sync + CNAME
  document.getElementById('btn-sync-repos').addEventListener('click', syncGitHubRepos);
  document.getElementById('btn-cname').addEventListener('click', generateCNAME);

  // Generate confirmation modal
  document.getElementById('modal-confirm').addEventListener('click', confirmGenerate);
  document.getElementById('modal-cancel').addEventListener('click', cancelGenerate);

  // Download tip modal
  document.getElementById('tip-modal-ok').addEventListener('click', function() {
    document.getElementById('tip-modal').classList.add('hidden');
    document.getElementById('tip-modal').style.display = 'none';
  });

  // Close modals on backdrop click
  document.getElementById('generate-modal').addEventListener('click', function(e) {
    if (e.target === this) cancelGenerate();
  });
  document.getElementById('tip-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      document.getElementById('tip-modal').classList.add('hidden');
      document.getElementById('tip-modal').style.display = 'none';
    }
  });

  console.log('Universal Portfolio Generator v2 initialized');
});
