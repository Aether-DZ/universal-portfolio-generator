/* =============================================
   preview.js — Live Preview Engine with Viewport Toggle
   ============================================= */
let _previewTimeout = null;

function initPreview() {
  // Viewport toggle buttons
  document.querySelectorAll('.viewport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active', 'bg-blue-600', 'text-white'));
      btn.classList.add('active', 'bg-blue-600', 'text-white');
      btn.classList.remove('border', 'border-gray-300', 'dark:border-gray-700', 'hover:bg-gray-100', 'dark:hover:bg-gray-800');
      const vp = btn.dataset.viewport;
      const wrapper = document.getElementById('preview-wrapper');
      wrapper.className = 'rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-white transition-all';
      if (vp === 'tablet') wrapper.classList.add('tablet');
      else if (vp === 'mobile') wrapper.classList.add('mobile');
      renderPreview();
    });
  });
  // Initial preview
  renderPreview();
}

function renderPreview() {
  clearTimeout(_previewTimeout);
  _previewTimeout = setTimeout(() => {
    const data = FormState.getData();
    const theme = getTheme(FormState.data.theme || 3);
    try {
      const html = theme.render(data);
      const frame = document.getElementById('preview-frame');
      frame.srcdoc = html;
    } catch (e) {
      console.warn('Preview render error:', e);
    }
  }, 300);
}
