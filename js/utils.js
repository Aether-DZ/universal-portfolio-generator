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

  // Skill icon mapping — covers ALL 75+ AVAILABLE_SKILLS
  skillIcon(skill) {
    const icons = {
      // Languages
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
      'Zig': 'devicon-zig-plain',
      'Scala': 'devicon-scala-plain colored',
      'Elixir': 'devicon-elixir-plain colored',
      'Haskell': 'devicon-haskell-plain',
      'Lua': 'devicon-lua-plain',
      'R': 'devicon-r-original',
      'Julia': 'devicon-julia-plain',
      'Dart': 'devicon-dart-plain colored',
      'Assembly': 'fas fa-microchip',
      'Shell Script': 'devicon-bash-plain',
      'Bash': 'devicon-bash-plain',
      'PowerShell': 'devicon-powershell-plain colored',
      // Frontend
      'React': 'devicon-react-original colored',
      'Vue': 'devicon-vuejs-plain colored',
      'Angular': 'devicon-angularjs-plain colored',
      'Svelte': 'devicon-svelte-plain colored',
      'Next.js': 'devicon-nextjs-original',
      'Nuxt': 'devicon-nuxtjs-plain colored',
      'Astro': 'devicon-astro-plain',
      'Solid.js': 'devicon-solidjs-plain',
      'Qwik': 'devicon-qwik-plain',
      'Remix': 'devicon-remix-original',
      'SvelteKit': 'devicon-svelte-plain colored',
      // Backend
      'Node.js': 'devicon-nodejs-plain colored',
      'Express': 'devicon-express-original',
      'Django': 'devicon-django-plain',
      'Flask': 'devicon-flask-original',
      'FastAPI': 'devicon-fastapi-plain colored',
      'Laravel': 'devicon-laravel-plain colored',
      'Spring Boot': 'devicon-spring-plain colored',
      'ASP.NET': 'devicon-dotnetcore-plain colored',
      'Gin': 'devicon-go-original-wordmark',
      'Echo': 'devicon-go-original-wordmark',
      'Actix': 'devicon-rust-plain',
      'NestJS': 'devicon-nestjs-plain colored',
      'Ruby on Rails': 'devicon-rails-plain colored',
      'Phoenix': 'devicon-phoenix-plain',
      'Symfony': 'devicon-symfony-original',
      // Database
      'MongoDB': 'devicon-mongodb-plain colored',
      'PostgreSQL': 'devicon-postgresql-plain colored',
      'MySQL': 'devicon-mysql-plain colored',
      'MariaDB': 'devicon-mariadb-original colored',
      'Redis': 'devicon-redis-plain colored',
      'SQLite': 'devicon-sqlite-plain',
      'Elasticsearch': 'devicon-elasticsearch-plain colored',
      'Cassandra': 'devicon-cassandra-plain',
      'DynamoDB': 'devicon-dynamodb-plain',
      'Firebase': 'devicon-firebase-plain colored',
      'Supabase': 'devicon-supabase-plain colored',
      'Neon': 'fas fa-database',
      'PlanetScale': 'fas fa-database',
      // DevOps & Cloud
      'Docker': 'devicon-docker-plain colored',
      'Kubernetes': 'devicon-kubernetes-plain colored',
      'AWS': 'devicon-amazonwebservices-original colored',
      'Azure': 'devicon-azure-plain colored',
      'GCP': 'devicon-googlecloud-plain colored',
      'Terraform': 'devicon-terraform-plain colored',
      'Ansible': 'devicon-ansible-plain',
      'Helm': 'devicon-helm-plain',
      'Cloudflare': 'devicon-cloudflare-plain',
      'Vercel': 'devicon-vercel-original',
      'Netlify': 'devicon-netlify-plain',
      'GitHub Actions': 'devicon-githubactions-plain colored',
      'CI/CD': 'fas fa-arrows-rotate',
      'Nginx': 'devicon-nginx-original colored',
      'Apache': 'devicon-apache-plain colored',
      'Prometheus': 'devicon-prometheus-original',
      'Grafana': 'devicon-grafana-original colored',
      'Datadog': 'devicon-datadog-plain',
      'Sentry': 'devicon-sentry-plain colored',
      // Security
      'Burp Suite': 'fas fa-bug',
      'Metasploit': 'fas fa-skull',
      'Nmap': 'fas fa-network-wired',
      'Wireshark': 'fas fa-plug',
      'OWASP': 'fas fa-shield-halved',
      'Penetration Testing': 'fas fa-crosshairs',
      'Web Security': 'fas fa-globe',
      'API Security': 'fas fa-key',
      'Reverse Engineering': 'fas fa-microscope',
      'Binary Exploitation': 'fas fa-bolt',
      'Social Engineering': 'fas fa-user-secret',
      'OSINT': 'fas fa-search',
      'Threat Modeling': 'fas fa-diagram-project',
      'Cryptography': 'fas fa-lock',
      'Malware Analysis': 'fas fa-virus',
      'Forensics': 'fas fa-magnifying-glass-chart',
      'Cloud Security': 'fas fa-cloud-shield',
      'Kubernetes Security': 'fas fa-shield-halved',
      'Zero Trust': 'fas fa-fingerprint',
      // AI / ML
      'Machine Learning': 'fas fa-robot',
      'Deep Learning': 'fas fa-brain',
      'LLM': 'fas fa-message',
      'AI Security': 'fas fa-shield-halved',
      'Prompt Engineering': 'fas fa-pen',
      'TensorFlow': 'devicon-tensorflow-original colored',
      'PyTorch': 'devicon-pytorch-original colored',
      'OpenAI': 'devicon-openai-plain',
      'LangChain': 'fas fa-link',
      'Hugging Face': 'fas fa-face-smile',
      'RAG': 'fas fa-cubes-stacked',
      'Computer Vision': 'fas fa-eye',
      // Mobile
      'Flutter': 'devicon-flutter-plain colored',
      'React Native': 'devicon-react-original colored',
      'SwiftUI': 'devicon-swift-plain colored',
      'Jetpack Compose': 'devicon-jetpackcompose-plain colored',
      'Android': 'devicon-android-plain colored',
      'iOS': 'devicon-apple-original',
      'Kotlin Multiplatform': 'devicon-kotlin-plain colored',
      // Tools
      'Figma': 'devicon-figma-plain colored',
      'Tailwind': 'devicon-tailwindcss-plain colored',
      'Git': 'devicon-git-plain colored',
      'Linux': 'devicon-linux-plain',
      'Vim': 'devicon-vim-plain',
      'Neovim': 'devicon-neovim-plain',
      'Docker Compose': 'devicon-docker-plain colored',
      'Kafka': 'devicon-apachekafka-original',
      'RabbitMQ': 'devicon-rabbitmq-plain',
      'WebAssembly': 'devicon-wasm-plain',
      'GraphQL': 'devicon-graphql-plain colored',
      'gRPC': 'fas fa-plug-circle-check',
      'REST API': 'fas fa-sitemap',
      'WebSockets': 'fas fa-plug',
      // Blockchain / Web3
      'Solidity': 'devicon-solidity-plain',
      'Ethereum': 'fab fa-ethereum',
      'Web3': 'fab fa-ethereum',
      'Smart Contracts': 'fas fa-file-contract',
      'Rust Solana': 'devicon-rust-plain',
      'Foundry': 'fas fa-hammer',
      'Hardhat': 'devicon-hardhat-plain'
    };
    return icons[skill] || 'fas fa-code';
  },

  // Available skills list
  AVAILABLE_SKILLS: [
    // Languages
    'JavaScript', 'TypeScript', 'Python', 'Rust', 'Go', 'Java', 'Kotlin',
    'Swift', 'PHP', 'Ruby', 'C', 'C++', 'C#', 'Zig', 'Scala',
    'Elixir', 'Haskell', 'Lua', 'R', 'Julia', 'Dart', 'Assembly',
    'Shell Script', 'Bash', 'PowerShell',
    // Frontend
    'React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Astro',
    'Solid.js', 'Qwik', 'Remix', 'SvelteKit',
    // Backend
    'Node.js', 'Express', 'Django', 'Flask', 'FastAPI', 'Laravel',
    'Spring Boot', 'ASP.NET', 'Gin', 'Echo', 'Actix',
    'NestJS', 'Ruby on Rails', 'Phoenix', 'Symfony',
    // Database
    'MongoDB', 'PostgreSQL', 'MySQL', 'MariaDB', 'Redis',
    'SQLite', 'Elasticsearch', 'Cassandra', 'DynamoDB',
    'Firebase', 'Supabase', 'Neon', 'PlanetScale',
    // DevOps & Cloud
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
    'Terraform', 'Ansible', 'Helm', 'Cloudflare', 'Vercel',
    'Netlify', 'GitHub Actions', 'CI/CD', 'Nginx', 'Apache',
    'Prometheus', 'Grafana', 'Datadog', 'Sentry',
    // Security
    'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark',
    'OWASP', 'Penetration Testing', 'Web Security',
    'API Security', 'Reverse Engineering', 'Binary Exploitation',
    'Social Engineering', 'OSINT', 'Threat Modeling',
    'Cryptography', 'Malware Analysis', 'Forensics',
    'Cloud Security', 'Kubernetes Security', 'Zero Trust',
    // AI / ML
    'Machine Learning', 'Deep Learning', 'LLM', 'AI Security',
    'Prompt Engineering', 'TensorFlow', 'PyTorch', 'OpenAI',
    'LangChain', 'Hugging Face', 'RAG', 'Computer Vision',
    // Mobile
    'Flutter', 'React Native', 'SwiftUI', 'Jetpack Compose',
    'Android', 'iOS', 'Kotlin Multiplatform',
    // Tools
    'Figma', 'Tailwind', 'Git', 'Linux', 'Vim', 'Neovim',
    'Docker Compose', 'Kafka', 'RabbitMQ', 'WebAssembly',
    'GraphQL', 'gRPC', 'REST API', 'WebSockets',
    // Blockchain / Web3
    'Solidity', 'Ethereum', 'Web3', 'Smart Contracts',
    'Rust Solana', 'Foundry', 'Hardhat'
  ],

  // Social platforms — curated top ~22 for portfolio use
  SOCIAL_PLATFORMS: [
    'github', 'gitlab', 'stackoverflow', 'devto', 'medium', 'codepen', 'leetcode',
    'hackerone', 'bugcrowd', 'tryhackme', 'hackthebox',
    'twitter', 'linkedin', 'instagram', 'youtube', 'reddit', 'telegram', 'whatsapp',
    'dribbble', 'behance',
    'buymeacoffee',
    'blog'
  ],

  socialUrl(platform, value) {
    if (!value) return '';
    // If already a full URL, use as-is
    if (value.startsWith('http://') || value.startsWith('https://')) return value;
    const clean = value.replace(/^@/, '').trim();
    const urls = {
      github: `https://github.com/${clean}`,
      gitlab: `https://gitlab.com/${clean}`,
      stackoverflow: `https://stackoverflow.com/users/${clean}`,
      devto: `https://dev.to/${clean}`,
      medium: `https://medium.com/@${clean}`,
      codepen: `https://codepen.io/${clean}`,
      leetcode: `https://leetcode.com/u/${clean}`,
      hackerone: `https://hackerone.com/${clean}`,
      bugcrowd: `https://bugcrowd.com/${clean}`,
      tryhackme: `https://tryhackme.com/p/${clean}`,
      hackthebox: `https://app.hackthebox.com/profile/${clean}`,
      twitter: `https://x.com/${clean}`,
      linkedin: `https://linkedin.com/in/${clean}`,
      instagram: `https://instagram.com/${clean}`,
      youtube: `https://youtube.com/@${clean}`,
      reddit: `https://reddit.com/u/${clean}`,
      telegram: `https://t.me/${clean}`,
      whatsapp: `https://wa.me/${clean.replace(/[^0-9]/g,'')}`,
      dribbble: `https://dribbble.com/${clean}`,
      behance: `https://behance.net/${clean}`,
      buymeacoffee: `https://buymeacoffee.com/${clean}`,
      blog: value // blog needs full URL, fallback to raw
    };
    return urls[platform] || value;
  },

  socialIcon(platform) {
    const icons = {
      github: 'fab fa-github', gitlab: 'fab fa-gitlab',
      stackoverflow: 'fab fa-stack-overflow', devto: 'fab fa-dev',
      medium: 'fab fa-medium', codepen: 'fab fa-codepen',
      leetcode: 'fas fa-code',
      hackerone: 'fab fa-hackerone', bugcrowd: 'fas fa-bug',
      tryhackme: 'fas fa-mask', hackthebox: 'fas fa-cube',
      twitter: 'fab fa-x-twitter', linkedin: 'fab fa-linkedin-in',
      instagram: 'fab fa-instagram', youtube: 'fab fa-youtube',
      reddit: 'fab fa-reddit-alien', telegram: 'fab fa-telegram-plane',
      whatsapp: 'fab fa-whatsapp',
      dribbble: 'fab fa-dribbble', behance: 'fab fa-behance',
      buymeacoffee: 'fas fa-mug-hot',
      blog: 'fas fa-blog'
    };
    return icons[platform] || 'fas fa-link';
  },

  socialLabel(platform) {
    const labels = {
      github: 'GitHub', gitlab: 'GitLab',
      stackoverflow: 'Stack Overflow', devto: 'Dev.to',
      medium: 'Medium', codepen: 'CodePen',
      leetcode: 'LeetCode',
      hackerone: 'HackerOne', bugcrowd: 'Bugcrowd',
      tryhackme: 'TryHackMe', hackthebox: 'HackTheBox',
      twitter: 'X (Twitter)', linkedin: 'LinkedIn',
      instagram: 'Instagram', youtube: 'YouTube',
      reddit: 'Reddit', telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      dribbble: 'Dribbble', behance: 'Behance',
      buymeacoffee: 'Buy Me a Coffee',
      blog: 'Blog / Website'
    };
    return labels[platform] || platform;
  },

  socialPlaceholder(platform) {
    const hints = {
      github: 'username', gitlab: 'username',
      stackoverflow: 'user ID', devto: 'username',
      medium: 'username', codepen: 'username',
      leetcode: 'username',
      hackerone: 'username', bugcrowd: 'username',
      tryhackme: 'username', hackthebox: 'user ID',
      twitter: 'username', linkedin: 'username',
      instagram: 'username', youtube: 'channel',
      reddit: 'username', telegram: 'username',
      whatsapp: 'phone number',
      dribbble: 'username', behance: 'username',
      buymeacoffee: 'username',
      blog: 'URL'
    };
    return hints[platform] || 'username';
  }
};
