/* =============================================
   app.js — Main App Initialization & Event Binding
   ============================================= */
/** Render README preview from current form data */
function renderReadmePreview() {
  const data = FormState.getData();
  const templateId = FormState.data.readmeTemplate || 1;
  const template = getReadmeTemplate(templateId);
  const readmeData = {
    ...data,
    githubUsername: data.githubUsername || 'github-user',
    githubStats: {
      repos: data.metrics?.[0]?.value || 0,
      stars: data.metrics?.[1]?.value || 0,
      followers: data.metrics?.[2]?.value || 0,
      forks: 0
    },
    skills: data.skillsArray?.map(s => s.name) || data.skills || [],
    socials: data.socialsArray || [],
    projects: data.projectsArray || []
  };
  try {
    const md = template.render(readmeData);
    const rawEl = document.getElementById('readme-preview-content');
    const renderedEl = document.getElementById('readme-rendered-content');
    rawEl.textContent = md;
    // Use marked if available for rendered view
    if (typeof marked !== 'undefined') {
      renderedEl.innerHTML = marked.parse(md, { breaks: true });
    } else {
      renderedEl.textContent = md;
    }
  } catch (e) {
    console.warn('README render error:', e);
    document.getElementById('readme-preview-content').textContent = 'Error rendering README template.';
  }
}

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

  // === Preview Tab Switching (Portfolio / README) ===
  let previewMode = 'portfolio'; // 'portfolio' or 'readme'

  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.mode;
      if (mode === previewMode) return;
      previewMode = mode;
      // Toggle active class
      document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active', 'bg-white', 'dark:bg-gray-700', 'shadow-sm'));
      tab.classList.add('active', 'bg-white', 'dark:bg-gray-700', 'shadow-sm');
      // Show/hide preview containers
      document.getElementById('preview-wrapper').classList.toggle('hidden', mode === 'readme');
      document.getElementById('readme-preview-wrapper').classList.toggle('hidden', mode === 'portfolio');
      // Render if switching to README
      if (mode === 'readme') renderReadmePreview();
    });
  });

  // README Copy to Clipboard
  document.getElementById('btn-copy-readme')?.addEventListener('click', () => {
    const content = document.getElementById('readme-preview-content')?.textContent;
    if (content) {
      navigator.clipboard.writeText(content).then(() => {
        Utils.showToast(I18N.t('readme.copied'), 'success');
      }).catch(() => {
        // Fallback
        const ta = document.createElement('textarea');
        ta.value = content;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        Utils.showToast(I18N.t('readme.copied'), 'success');
      });
    }
  });

  // README View Toggle (Raw / Rendered)
  document.querySelectorAll('.readme-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.readme-view-btn').forEach(b => {
        b.classList.remove('active', 'bg-white', 'dark:bg-gray-600', 'shadow-sm');
      });
      btn.classList.add('active', 'bg-white', 'dark:bg-gray-600', 'shadow-sm');
      document.getElementById('readme-preview-content').classList.toggle('hidden', view !== 'raw');
      document.getElementById('readme-rendered-content').classList.toggle('hidden', view !== 'rendered');
    });
  });

  // Initialize first tab active state
  const firstTab = document.querySelector('.preview-tab');
  if (firstTab) firstTab.classList.add('active', 'bg-white', 'dark:bg-gray-700', 'shadow-sm');

  console.log('🏗️ Universal Portfolio Generator initialized');
  console.log('📦 Libraries: Handlebars, JSZip, FileSaver, Octokit, Chart.js, AOS');
  console.log('🎨 13 portfolio themes + 10 README templates loaded');
  console.log('🌐 Bilingual: AR/EN');
});
