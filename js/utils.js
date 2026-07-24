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

  // Social platforms — ALL platforms with username/profile ID
  SOCIAL_PLATFORMS: [
    // Developer / Code
    'github', 'gitlab', 'bitbucket', 'codepen', 'codesandbox', 'replit',
    'stackblitz', 'leetcode', 'hackerrank', 'codewars', 'exercism',
    'stackoverflow', 'devto', 'medium', 'hashnode', 'substack',
    'dockerhub', 'npmjs', 'pypi', 'cratesio',
    // Security / Bug Bounty
    'hackerone', 'bugcrowd', 'intigriti', 'tryhackme', 'hackthebox',
    'pentesterlab', 'rootme', 'synack',
    // Social Media
    'twitter', 'linkedin', 'facebook', 'instagram', 'threads',
    'tiktok', 'snapchat', 'pinterest', 'reddit', 'mastodon', 'bluesky',
    // Messaging / Chat
    'telegram', 'whatsapp', 'discord', 'signal', 'matrix',
    // Creative / Design
    'dribbble', 'behance', 'artstation', 'deviantart', 'flickr',
    'unsplash', 'imgur', 'letterboxd', 'goodreads',
    // Video / Streaming
    'youtube', 'twitch', 'kick', 'vimeo', 'dailymotion', 'rumble', 'odysee',
    // Audio / Podcast
    'spotify', 'soundcloud', 'bandcamp', 'mixcloud',
    // Support / Donation
    'patreon', 'ko-fi', 'buymeacoffee', 'githubsponsors',
    'paypal', 'liberapay', 'opencollective',
    // Professional
    'upwork', 'fiverr', 'freelancer', 'toptal', 'wellfound',
    'calendly', 'linktree', 'aboutme',
    // Gaming
    'steam', 'epicgames', 'xbox', 'playstation',
    // Other
    'blog', 'notion', 'wikipedia', 'keybase', 'etsy', 'strava'
  ],

  socialIcon(platform) {
    const icons = {
      // Developer / Code
      github: 'fab fa-github', gitlab: 'fab fa-gitlab', bitbucket: 'fab fa-bitbucket',
      codepen: 'fab fa-codepen', codesandbox: 'fas fa-cube', replit: 'fas fa-terminal',
      stackblitz: 'fas fa-bolt', leetcode: 'fas fa-code', hackerrank: 'fab fa-hackerrank',
      codewars: 'fas fa-khanda', exercism: 'fas fa-dumbbell',
      stackoverflow: 'fab fa-stack-overflow', devto: 'fab fa-dev',
      medium: 'fab fa-medium', hashnode: 'fas fa-hashtag', substack: 'fas fa-scroll',
      dockerhub: 'fab fa-docker', npmjs: 'fab fa-npm', pypi: 'fab fa-python',
      cratesio: 'fas fa-cube',
      // Security
      hackerone: 'fab fa-hackerone', bugcrowd: 'fas fa-bug',
      intigriti: 'fas fa-shield-halved', tryhackme: 'fas fa-mask',
      hackthebox: 'fas fa-cube', pentesterlab: 'fas fa-flask',
      rootme: 'fas fa-skull', synack: 'fas fa-shield',
      // Social
      twitter: 'fab fa-x-twitter', linkedin: 'fab fa-linkedin-in',
      facebook: 'fab fa-facebook-f', instagram: 'fab fa-instagram',
      threads: 'fab fa-threads', tiktok: 'fab fa-tiktok',
      snapchat: 'fab fa-snapchat', pinterest: 'fab fa-pinterest',
      reddit: 'fab fa-reddit-alien', mastodon: 'fab fa-mastodon',
      bluesky: 'fab fa-bluesky',
      // Messaging
      telegram: 'fab fa-telegram-plane', whatsapp: 'fab fa-whatsapp',
      discord: 'fab fa-discord', signal: 'fas fa-message',
      matrix: 'fas fa-arrow-right-arrow-left',
      // Creative
      dribbble: 'fab fa-dribbble', behance: 'fab fa-behance',
      artstation: 'fab fa-artstation', deviantart: 'fab fa-deviantart',
      flickr: 'fab fa-flickr', unsplash: 'fas fa-camera',
      imgur: 'fas fa-image', letterboxd: 'fas fa-film',
      goodreads: 'fab fa-goodreads',
      // Video
      youtube: 'fab fa-youtube', twitch: 'fab fa-twitch',
      kick: 'fas fa-play', vimeo: 'fab fa-vimeo-v',
      dailymotion: 'fab fa-dailymotion', rumble: 'fas fa-video',
      odysee: 'fas fa-eye',
      // Audio
      spotify: 'fab fa-spotify', soundcloud: 'fab fa-soundcloud',
      bandcamp: 'fab fa-bandcamp', mixcloud: 'fab fa-mixcloud',
      // Support
      patreon: 'fab fa-patreon', 'ko-fi': 'fas fa-coffee',
      buymeacoffee: 'fas fa-mug-hot', githubsponsors: 'fab fa-github',
      paypal: 'fab fa-paypal', liberapay: 'fab fa-liberapay',
      opencollective: 'fab fa-opencollective',
      // Professional
      upwork: 'fab fa-upwork', fiverr: 'fas fa-hand-peace',
      freelancer: 'fas fa-briefcase', toptal: 'fas fa-crown',
      wellfound: 'fas fa-rocket', calendly: 'fas fa-calendar',
      linktree: 'fas fa-tree', aboutme: 'fas fa-user',
      // Gaming
      steam: 'fab fa-steam', epicgames: 'fab fa-epic-games',
      xbox: 'fab fa-xbox', playstation: 'fab fa-playstation',
      // Other
      blog: 'fas fa-blog', notion: 'fab fa-notion',
      wikipedia: 'fab fa-wikipedia-w', keybase: 'fab fa-keybase',
      etsy: 'fab fa-etsy', strava: 'fab fa-strava'
    };
    return icons[platform] || 'fas fa-link';
  },

  socialLabel(platform) {
    const labels = {
      // Developer / Code
      github: 'GitHub', gitlab: 'GitLab', bitbucket: 'Bitbucket',
      codepen: 'CodePen', codesandbox: 'CodeSandbox', replit: 'Replit',
      stackblitz: 'StackBlitz', leetcode: 'LeetCode', hackerrank: 'HackerRank',
      codewars: 'Codewars', exercism: 'Exercism',
      stackoverflow: 'Stack Overflow', devto: 'Dev.to',
      medium: 'Medium', hashnode: 'Hashnode', substack: 'Substack',
      dockerhub: 'Docker Hub', npmjs: 'npm', pypi: 'PyPI', cratesio: 'crates.io',
      // Security
      hackerone: 'HackerOne', bugcrowd: 'Bugcrowd', intigriti: 'Intigriti',
      tryhackme: 'TryHackMe', hackthebox: 'HackTheBox',
      pentesterlab: 'PentesterLab', rootme: 'Root Me', synack: 'Synack',
      // Social
      twitter: 'X (Twitter)', linkedin: 'LinkedIn', facebook: 'Facebook',
      instagram: 'Instagram', threads: 'Threads', tiktok: 'TikTok',
      snapchat: 'Snapchat', pinterest: 'Pinterest', reddit: 'Reddit',
      mastodon: 'Mastodon', bluesky: 'Bluesky',
      // Messaging
      telegram: 'Telegram', whatsapp: 'WhatsApp', discord: 'Discord',
      signal: 'Signal', matrix: 'Matrix',
      // Creative
      dribbble: 'Dribbble', behance: 'Behance', artstation: 'ArtStation',
      deviantart: 'DeviantArt', flickr: 'Flickr', unsplash: 'Unsplash',
      imgur: 'Imgur', letterboxd: 'Letterboxd', goodreads: 'Goodreads',
      // Video
      youtube: 'YouTube', twitch: 'Twitch', kick: 'Kick',
      vimeo: 'Vimeo', dailymotion: 'Dailymotion', rumble: 'Rumble',
      odysee: 'Odysee',
      // Audio
      spotify: 'Spotify', soundcloud: 'SoundCloud', bandcamp: 'Bandcamp',
      mixcloud: 'Mixcloud',
      // Support
      patreon: 'Patreon', 'ko-fi': 'Ko-fi', buymeacoffee: 'Buy Me a Coffee',
      githubsponsors: 'GitHub Sponsors', paypal: 'PayPal',
      liberapay: 'Liberapay', opencollective: 'Open Collective',
      // Professional
      upwork: 'Upwork', fiverr: 'Fiverr', freelancer: 'Freelancer',
      toptal: 'Toptal', wellfound: 'Wellfound (AngelList)',
      calendly: 'Calendly', linktree: 'Linktree', aboutme: 'About.me',
      // Gaming
      steam: 'Steam', epicgames: 'Epic Games',
      xbox: 'Xbox', playstation: 'PlayStation',
      // Other
      blog: 'Blog / Website', notion: 'Notion',
      wikipedia: 'Wikipedia', keybase: 'Keybase',
      etsy: 'Etsy', strava: 'Strava'
    };
    return labels[platform] || platform;
  }
};
