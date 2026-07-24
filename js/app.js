/* =============================================
   app.js — Main App Initialization & Event Binding
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({ duration: 600, once: true });

  // Initialize form
  FormState.init();

  // Initialize preview
  initPreview();

  // Language toggle
  document.getElementById('lang-toggle').addEventListener('click', () => I18N.toggle());

  // Theme toggle (dark/light)
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = document.querySelector('#theme-toggle i');
    icon.className = document.documentElement.classList.contains('dark') ? 'fas fa-sun text-lg' : 'fas fa-moon text-lg';
  });

  // GitHub deploy button
  document.getElementById('btn-deploy').addEventListener('click', deployToGitHub);

  // ZIP download button
  document.getElementById('btn-zip').addEventListener('click', downloadZIP);

  // Config export
  document.getElementById('btn-save-config').addEventListener('click', exportConfig);

  // Config import
  document.getElementById('btn-load-config').addEventListener('click', importConfig);

  // Show deploy section when deploy is clicked first time
  document.getElementById('btn-deploy').addEventListener('click', function showDeploy() {
    document.getElementById('deploy-section').classList.remove('hidden');
  }, { once: true });

  // GitHub Sync Repos
  document.getElementById('btn-sync-repos').addEventListener('click', syncGitHubRepos);

  // Custom Domain CNAME
  document.getElementById('btn-cname').addEventListener('click', generateCNAME);

  console.log('🏗️ Universal Portfolio Generator initialized');
  console.log('📦 Libraries: Handlebars, JSZip, FileSaver, Octokit, Chart.js, AOS');
  console.log('🎨 7 themes loaded');
  console.log('🌐 Bilingual: AR/EN');
});
