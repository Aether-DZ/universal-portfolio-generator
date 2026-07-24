/* =============================================
   utils.js — Sanitization, Base64, Helpers
   ============================================= */
const Utils = {
  sanitize(str) {
    if (!str) return '';
    return DOMPurify.sanitize(String(str), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  },

  sanitizeHTML(str) {
    if (!str) return '';
    return DOMPurify.sanitize(String(str), {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'code', 'span', 'br'],
      ALLOWED_ATTR: ['href', 'target', 'class', 'rel']
    });
  },

  fileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  urlToBase64(url) {
    return new Promise((resolve) => {
      if (!url) return resolve(null);
      // If it's already a data URL, return as-is
      if (url.startsWith('data:')) return resolve(url);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = () => resolve(null);
      img.src = url;
    });
  },

  slugify(str) {
    return String(str).toLowerCase().trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  },

  truncate(str, len = 100) {
    if (!str || str.length <= len) return str || '';
    return str.slice(0, len).trim() + '...';
  },

  formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  },

  debounce(fn, ms = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  },

  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  downloadJSON(data, filename = 'portfolio-config.json') {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  },

  loadJSONFile(file) {
    return new Promise((resolve, reject) => {
      if (!file) return reject('No file');
      const reader = new FileReader();
      reader.onload = () => {
        try { resolve(JSON.parse(reader.result)); }
        catch (e) { reject('Invalid JSON'); }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  },

  showLoading(text) {
    const overlay = document.getElementById('loading-overlay');
    document.getElementById('loading-text').textContent = text || I18N.t('loading.generating');
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
  },

  hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
  },

  showToast(message, type = 'success') {
    const colors = {
      success: 'bg-green-600',
      error: 'bg-red-600',
      info: 'bg-blue-600',
      warn: 'bg-amber-600'
    };
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 z-50 ${colors[type] || colors.info} text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium animate-slide-up`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // Skill icon mapping
  skillIcon(skill) {
    const icons = {
      'JavaScript': 'devicon-javascript-plain colored',
      'TypeScript': 'devicon-typescript-plain colored',
      'Python': 'devicon-python-plain colored',
      'Rust': 'devicon-rust-plain',
      'Go': 'devicon-go-original-wordmark',
      'Java': 'devicon-java-plain colored',
      'Kotlin': 'devicon-kotlin-plain colored',
      'Swift': 'devicon-swift-plain colored',
      'PHP': 'devicon-php-plain colored',
      'Ruby': 'devicon-ruby-plain colored',
      'C': 'devicon-c-plain colored',
      'C++': 'devicon-cplusplus-plain colored',
      'C#': 'devicon-csharp-plain colored',
      'React': 'devicon-react-original colored',
      'Vue': 'devicon-vuejs-plain colored',
      'Angular': 'devicon-angularjs-plain colored',
      'Svelte': 'devicon-svelte-plain colored',
      'Next.js': 'devicon-nextjs-original',
      'Node.js': 'devicon-nodejs-plain colored',
      'Express': 'devicon-express-original',
      'Django': 'devicon-django-plain',
      'Flask': 'devicon-flask-original',
      'FastAPI': 'devicon-fastapi-plain colored',
      'Laravel': 'devicon-laravel-plain colored',
      'Docker': 'devicon-docker-plain colored',
      'Kubernetes': 'devicon-kubernetes-plain colored',
      'AWS': 'devicon-amazonwebservices-original colored',
      'Azure': 'devicon-azure-plain colored',
      'GCP': 'devicon-googlecloud-plain colored',
      'MongoDB': 'devicon-mongodb-plain colored',
      'PostgreSQL': 'devicon-postgresql-plain colored',
      'MySQL': 'devicon-mysql-plain colored',
      'Redis': 'devicon-redis-plain colored',
      'GraphQL': 'devicon-graphql-plain colored',
      'Figma': 'devicon-figma-plain',
      'Tailwind': 'devicon-tailwindcss-plain colored',
      'Flutter': 'devicon-flutter-plain colored',
      'React Native': 'devicon-react-original colored',
      'Solidity': 'devicon-solidity-plain',
      'Terraform': 'devicon-terraform-plain colored',
      'Nginx': 'devicon-nginx-original colored',
      'Git': 'devicon-git-plain colored',
      'Linux': 'devicon-linux-plain',
      'Figma': 'devicon-figma-plain colored',
    };
    return icons[skill] || 'fas fa-code';
  },

  // Available skills list
  AVAILABLE_SKILLS: [
    'JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java', 'Kotlin',
    'Swift', 'PHP', 'Ruby', 'C', 'C++', 'C#',
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js',
    'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Laravel',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'GraphQL',
    'Figma', 'Tailwind', 'Flutter', 'React Native', 'Solidity',
    'Terraform', 'Nginx', 'Git', 'Linux'
  ],

  // Social platforms
  SOCIAL_PLATFORMS: [
    'github', 'linkedin', 'twitter', 'telegram', 'instagram',
    'facebook', 'whatsapp', 'tiktok', 'youtube', 'discord',
    'medium', 'devto', 'blog', 'dribbble', 'behance',
    'stackoverflow', 'reddit', 'pinterest', 'threads', 'snapchat',
    'hashnode', 'producthunt'
  ],

  socialIcon(platform) {
    const icons = {
      github: 'fab fa-github', linkedin: 'fab fa-linkedin-in', twitter: 'fab fa-x-twitter',
      telegram: 'fab fa-telegram-plane', instagram: 'fab fa-instagram', facebook: 'fab fa-facebook-f',
      whatsapp: 'fab fa-whatsapp', tiktok: 'fab fa-tiktok', youtube: 'fab fa-youtube',
      discord: 'fab fa-discord', medium: 'fab fa-medium', devto: 'fab fa-dev',
      blog: 'fas fa-blog', dribbble: 'fab fa-dribbble', behance: 'fab fa-behance',
      stackoverflow: 'fab fa-stack-overflow', reddit: 'fab fa-reddit-alien',
      pinterest: 'fab fa-pinterest', threads: 'fab fa-threads', snapchat: 'fab fa-snapchat',
      hashnode: 'fas fa-hashtag', producthunt: 'fab fa-product-hunt'
    };
    return icons[platform] || 'fas fa-link';
  },

  socialLabel(platform) {
    const labels = {
      github: 'GitHub', linkedin: 'LinkedIn', twitter: 'X (Twitter)', telegram: 'Telegram',
      instagram: 'Instagram', facebook: 'Facebook', whatsapp: 'WhatsApp', tiktok: 'TikTok',
      youtube: 'YouTube', discord: 'Discord', medium: 'Medium', devto: 'Dev.to',
      blog: 'Blog / Website', dribbble: 'Dribbble', behance: 'Behance',
      stackoverflow: 'Stack Overflow', reddit: 'Reddit', pinterest: 'Pinterest',
      threads: 'Threads', snapchat: 'Snapchat', hashnode: 'Hashnode', producthunt: 'Product Hunt'
    };
    return labels[platform] || platform;
  }
};
