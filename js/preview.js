/* =============================================
   preview.js — Live Preview Engine with Viewport Toggle
   ============================================= */
let _previewTimeout = null;

function initPreview() {
  document.querySelectorAll('.viewport-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.viewport-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vp = btn.dataset.viewport;
      const wrapper = document.getElementById('preview-wrapper');
      wrapper.className = 'rounded-xl overflow-hidden border border-mono-200 dark:border-mono-800 shadow-sm bg-white transition-all';
      if (vp === 'tablet') wrapper.classList.add('tablet');
      else if (vp === 'mobile') wrapper.classList.add('mobile');
      renderPreview();
    });
  });
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
