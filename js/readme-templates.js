/* =============================================
   readme-templates.js — 10 GitHub Profile README Templates
   Markdown templates rendered via Handlebars
   ============================================= */

// Register i18n strings for template names
Object.assign(I18N.strings, {
  'readme.1': { en: 'Minimal', ar: 'بسيط' },
  'readme.2': { en: 'Premium', ar: 'متميز' },
  'readme.3': { en: 'Cyberpunk', ar: 'سايبربانك' },
  'readme.4': { en: 'Glassmorphism', ar: 'زجاجي' },
  'readme.5': { en: 'Developer Dashboard', ar: 'لوحة المطور' },
  'readme.6': { en: 'Terminal', ar: 'واجهة أوامر' },
  'readme.7': { en: 'Elegant', ar: 'أنيق' },
  'readme.8': { en: 'Open Source', ar: 'مصدر مفتوح' },
  'readme.9': { en: 'Dark Modern', ar: 'داكن حديث' },
  'readme.10': { en: 'AI Theme', ar: 'ذكاء اصطناعي' },
  'readme.title': { en: 'GitHub Profile README', ar: 'ملف تعريف GitHub' },
  'readme.select': { en: 'Choose a README template for your GitHub profile', ar: 'اختر قالباً لملفك الشخصي على GitHub' },
  'readme.export': { en: 'Copy to Clipboard', ar: 'نسخ إلى الحافظة' },
  'readme.copied': { en: 'README copied to clipboard!', ar: 'تم نسخ README!' },
  'readme.tab': { en: 'README', ar: 'الملف' }
});

const README_TEMPLATES = [
  // =============================================
  // 1. Minimal — Clean, essential-only Markdown
  // =============================================
  {
    id: 1, nameKey: 'readme.1', icon: 'fa-solid fa-leaf', category: 'minimal',
    description: 'Clean, minimal Markdown with only the essentials. No badges, no clutter.',
    render: (data) => Handlebars.compile(`
### Hi there 👋 I'm {{name}}

{{#if bio}}{{bio}}{{/if}}

{{#if role}}🔭 **Current focus:** {{role}}{{/if}}
{{#if location}}📍 **Location:** {{location}}{{/if}}
{{#if email}}📫 **Contact:** {{email}}{{/if}}

---

### 🛠 Tech Stack

{{#each skills}}` + '`{{this}}`' + ` {{/each}}

{{#if projects.length}}
### 📌 Projects

{{#each projects}}
- **{{this.name}}** — {{this.desc}} {{#if this.url}}[→]]({{this.url}}){{/if}}
{{/each}}
{{/if}}

{{#if socials.length}}
### 🌐 Connect

{{#each socials}}[{{this.label}}]({{this.url}}) · {{/each}}
{{/if}}

---

*Generated with ❤️*
`)(data)
  },

  // =============================================
  // 2. Premium — Full-featured with badges, stats
  // =============================================
  {
    id: 2, nameKey: 'readme.2', icon: 'fa-solid fa-crown', category: 'premium',
    description: 'Full-featured with shields.io badges, GitHub stats cards, and organized sections.',
    render: (data) => Handlebars.compile(`
<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text={{encodeURIComponent name}}&fontSize=60&fontAlignY=35" width="100%" />
</div>

<h1 align="center">Hi 👋, I'm {{name}}</h1>
<h3 align="center">{{role}}</h3>

<p align="center">
  {{#if bio}}<i>{{bio}}</i>{{/if}}
</p>

<p align="center">
  {{#if location}}<img src="https://img.shields.io/badge/Location-{{encodeURIComponent location}}-blue?style=flat-square" />{{/if}}
  {{#if email}}<img src="https://img.shields.io/badge/Email-{{encodeURIComponent email}}-brightgreen?style=flat-square" />{{/if}}
  <img src="https://img.shields.io/github/followers/{{githubUsername}}?label=Followers&style=flat-square" />
  <img src="https://img.shields.io/github/stars/{{githubUsername}}?label=Stars&style=flat-square" />
</p>

---

### 🚀 About Me

- 🔭 **Role:** {{role}}
- 🌱 **Focus:** {{bio}}
{{#if location}}- 📍 **Based in:** {{location}}{{/if}}
{{#if email}}- 📫 **Reach me:** {{email}}{{/if}}

---

### 🛠️ Languages & Tools

<p align="center">
{{#each skills}}
  <img src="https://img.shields.io/badge/{{this}}-{{this}}-informational?style=flat-square&logo={{this}}&logoColor=white" />
{{/each}}
</p>

---

### 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={{githubUsername}}&show_icons=true&theme=radical&hide_border=true" width="48%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={{githubUsername}}&theme=radical&hide_border=true" width="48%" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={{githubUsername}}&layout=compact&theme=radical&hide_border=true" width="40%" />
</p>

### ⏱️ WakaTime Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username={{githubUsername}}&theme=radical&hide_border=true&layout=compact" width="60%" alt="WakaTime Stats" />
</p>

### 🏆 GitHub Trophies

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={{githubUsername}}&theme=radical&no-frame=true&no-bg=true&margin-w=4&row=1" alt="GitHub Trophies" />
</p>

### 📈 Contribution Activity

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{githubUsername}}&theme=react-dark&bg_color=0d1117&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</p>

{{#if projects.length}}
### 💼 Featured Projects

{{#each projects}}
| [**{{this.name}}**]({{#if this.url}}{{this.url}}{{else}}#{{/if}}) | {{this.desc}} |
|:---|:---|
{{/each}}
{{/if}}

### 🤝 Connect with Me

<p align="center">
{{#each socials}}
  <a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-{{this.label}}-blue?style=for-the-badge" /></a>
{{/each}}
</p>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=blue" />
  <p>⭐️ From [{{name}}](https://github.com/{{githubUsername}})</p>
</div>
`)(data)
  },

  // =============================================
  // 3. Cyberpunk — Neon ASCII art hacker aesthetic
  // =============================================
  {
    id: 3, nameKey: 'readme.3', icon: 'fa-solid fa-bolt', category: 'cyber',
    description: 'Neon-inspired hacker aesthetic with ASCII art and glitch effects.',
    render: (data) => Handlebars.compile(`
<div align="center">

\`\`\`
  ████████╗██╗  ██╗███████╗    ███╗   ██╗███████╗████████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
  ╚══██╔══╝██║  ██║██╔════╝    ████╗  ██║██╔════╝╚══██╔══╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
     ██║   ███████║█████╗      ██╔██╗ ██║█████╗     ██║   ██║ █╗ ██║██║   ██║██████╔╝█████╔╝
     ██║   ██╔══██║██╔══╝      ██║╚██╗██║██╔══╝     ██║   ██║███╗██║██║   ██║██╔══██╗██╔═██╗
     ██║   ██║  ██║███████╗    ██║ ╚████║███████╗   ██║   ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
     ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═══╝╚══════╝   ╚═╝    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
\`\`\`

<img src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&color=00FFF0&size=18&center=true&lines={{encodeURIComponent name}};{{encodeURIComponent role}}">

</div>

\`\`\`yaml
user: {{name}}
role: "{{role}}"
location: "{{location}}"
bio: "{{bio}}"
contact: "{{email}}"
\`\`\`

---

### ⚡ SYSTEM STATUS

| MODULE | STATUS | VERSION |
|:-------|:-------|:--------|
| 🧠 Core Processor | 🟢 ONLINE | {{name}} v1.0 |
| 🔧 Skills Matrix | 🟢 INITIALIZED | {{skills.length}} modules loaded |
| 📦 Project Engine | 🟢 ACTIVE | {{projects.length}} deployments |
| 🌐 Network | 🟢 CONNECTED | {{socials.length}} channels |

---

### 🔧 SKILLS.MATRIX

\`\`\`
{{#each skills}}[+] {{this}} ... LOADED
{{/each}}
\`\`\`

{{#if projects.length}}
### 📁 PROJECT.DATABASE

\`\`\`bash
{{#each projects}}
# {{this.name}}
$ cat README.md
> {{this.desc}}
{{#if this.url}}$ open {{this.url}}{{/if}}
{{/each}}
\`\`\`
{{/if}}

---

### 🌐 NETWORK PORTS

<p align="center">
{{#each socials}}<a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-{{this.label}}-brightgreen?style=for-the-badge&logo={{this.platform}}&logoColor=white&color=00FF00&labelColor=0A0A1A" /></a>
{{/each}}
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=for-the-badge&color=00FF00&labelColor=0A0A1A" />
</p>

\`\`\`
> system.status: CONNECTED
> uptime: ∞
> battle.net: READY
\`\`\`
`)(data)
  },

  // =============================================
  // 4. Glassmorphism — Frosted glass aesthetic
  // =============================================
  {
    id: 4, nameKey: 'readme.4', icon: 'fa-solid fa-droplet', category: 'glass',
    description: 'Frosted glass aesthetic with blur effects and subtle transparency.',
    render: (data) => Handlebars.compile(`
<div align="center">

# ✦ {{name}} ✦

### {{role}}

<img src="https://img.shields.io/badge/style-glass-8A2BE2?style=for-the-badge&labelColor=transparent" />

</div>

---

<div align="center">

✦ ✦ ✦

*{{#if bio}}{{bio}}{{/if}}*

✦ ✦ ✦

</div>

| 🌐 | 📍 | 📫 |
|:---|:---|:---|
{{#if location}}| Location | {{location}} |{{/if}}
{{#if email}}| Email | {{email}} |{{/if}}
| Focus | {{role}} |

---

### ✦ Skills ✦

<p align="center">
{{#each skills}}
<img src="https://img.shields.io/badge/{{this}}-{{this}}-8A2BE2?style=flat-square&labelColor=transparent" />
{{/each}}
</p>

{{#if projects.length}}
### ✦ Projects ✦

| Project | Description |
|:--------|:------------|
{{#each projects}}
| [**{{this.name}}**]({{#if this.url}}{{this.url}}{{else}}#{{/if}}) | {{this.desc}} |
{{/each}}
{{/if}}

### ✦ Connect ✦

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-{{this.label}}-8A2BE2?style=for-the-badge&labelColor=transparent" /></a>
{{/each}}
</p>

---

<div align="center">

*✦ glassmorphism · elegance · clarity ✦*

<img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=8A2BE2" />

</div>
`)(data)
  },

  // =============================================
  // 5. Developer Dashboard — Stats-heavy dataviz
  // =============================================
  {
    id: 5, nameKey: 'readme.5', icon: 'fa-solid fa-chart-simple', category: 'dashboard',
    description: 'Data-heavy layout with progress bars, stat grids, and GitHub analytics.',
    render: (data) => Handlebars.compile(`
# 📊 Developer Dashboard — {{name}}

> {{role}}
>
> {{bio}}

---

## 📈 Performance Metrics

\`\`\`
┌──────────────────────────────────────────────────────┐
│  SYSTEM DASHBOARD                                    │
├──────────────────────────────────────────────────────┤
│  NAME       │  {{name}}{{padding name 30}}     │
│  ROLE       │  {{role}}{{padding role 25}}     │
│  LOCATION   │  {{location}}{{padding location 20}}    │
│  CONTACT    │  {{email}}{{padding email 20}}          │
└──────────────────────────────────────────────────────┘
\`\`\`

## 🛠 Skills Loadout

\`\`\`
{{#each skills}}
  [{{this}}] {{progressBar this.length 20}}
{{/each}}
\`\`\`

## 📦 Repository Stats

| Metric | Value |
|:-------|:------|
| 📁 Repositories | {{githubStats.repos}} |
| ⭐ Total Stars | {{githubStats.stars}} |
| 👥 Followers | {{githubStats.followers}} |
| 🍴 Forks | {{githubStats.forks}} |

## 📈 Contribution Activity

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={{githubUsername}}&theme=react-dark&bg_color=0d1117&hide_border=true&area=true" width="100%" alt="Activity Graph" />
</p>

## ⏱️ Coding Activity

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username={{githubUsername}}&theme=react-dark&hide_border=true&layout=compact" width="60%" alt="WakaTime Stats" />
</p>

{{#if projects.length}}
## 🚀 Deployed Projects

\`\`\`
{{#each projects}}
  [{{@index}}] {{this.name}}
      → {{this.desc}}
      → tags: [{{#each this.tags}}{{this}} {{/each}}]
      → url: {{this.url}}
{{/each}}
\`\`\`
{{/if}}

## 🌐 Network

<p align="center">
{{#each socials}}
<img src="https://img.shields.io/badge/{{this.label}}-informational?style=flat-square&logo={{this.platform}}" />
{{/each}}
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=blue" />
  <img src="https://img.shields.io/github/followers/{{githubUsername}}?style=flat-square" />
</p>
`)(data)
  },

  // =============================================
  // 6. Terminal — CLI-inspired, monospace, prompt markers
  // =============================================
  {
    id: 6, nameKey: 'readme.6', icon: 'fa-solid fa-terminal', category: 'terminal',
    description: 'CLI-inspired interface with terminal prompt markers and ASCII structure.',
    render: (data) => Handlebars.compile(`
\`\`\`
╔═══════════════════════════════════════════════╗
║          {{name}} — {{role}}           ║
╚═══════════════════════════════════════════════╝
\`\`\`

\`\`\`bash
visitor@github:~$ cat /home/{{githubUsername}}/profile.txt
\`\`\`

\`\`\`
{{#if bio}}"{{bio}}"{{/if}}
{{#if location}}Location: {{location}}{{/if}}
{{#if email}}Email: {{email}}{{/if}}
\`\`\`

\`\`\`bash
visitor@github:~$ ls -la /home/{{githubUsername}}/skills/
\`\`\`

\`\`\`bash
total {{skills.length}}
{{#each skills}}drwxr-xr-x  2 {{githubUsername}} {{githubUsername}}  4096 {{date}} {{this}}
{{/each}}
\`\`\`

{{#if projects.length}}
\`\`\`bash
visitor@github:~$ cat /home/{{githubUsername}}/projects.log
\`\`\`

\`\`\`log
{{#each projects}}
[{{@index}}] {{this.name}}
    Description: {{this.desc}}
    Tags: {{#each this.tags}}[{{this}}] {{/each}}
    URL: {{this.url}}
{{/each}}
\`\`\`
{{/if}}

\`\`\`bash
visitor@github:~$ ./connect.sh
\`\`\`

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><code>[{{this.label}}]</code></a>
{{/each}}
</p>

\`\`\`
visitor@github:~$ █
\`\`\`

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=green" />
</p>
`)(data)
  },

  // =============================================
  // 7. Elegant — Refined, serif-influenced, professional
  // =============================================
  {
    id: 7, nameKey: 'readme.7', icon: 'fa-solid fa-feather', category: 'elegant',
    description: 'Refined professional layout with centered columns and publication-style sections.',
    render: (data) => Handlebars.compile(`
<div align="center">

# {{name}}

### *{{role}}*

{{#if bio}}*{{bio}}*{{/if}}

{{#if location}}📍 {{location}} · {{/if}}{{#if email}}✉️ {{email}}{{/if}}

</div>

---

<div align="center">

### *Craft · Build · Secure*

</div>

---

### Skills

| | | |
|:---|:---|:---|
{{#each skills}}| \`{{this}}\` |{{#if @index}}{{#if @last}} |{{/if}}{{/if}}
{{/each}}

{{#if projects.length}}
### Selected Works

{{#each projects}}
**{{this.name}}** — {{this.desc}}
{{#if this.url}} [↗]({{this.url}}){{/if}}
{{/each}}
{{/if}}

---

### Connect

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-{{this.label}}-grey?style=flat-square&logo={{this.platform}}" /></a>
{{/each}}
</p>

---

<div align="center">
  <sub><sup>✻ *Elegance in simplicity* ✻</sup></sub>
  <br />
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=lightgrey" />
</div>
`)(data)
  },

  // =============================================
  // 8. Open Source — Contribution-focused, community
  // =============================================
  {
    id: 8, nameKey: 'readme.8', icon: 'fa-solid fa-code-fork', category: 'oss',
    description: 'Open source contribution showcase with community metrics and repo highlights.',
    render: (data) => Handlebars.compile(`
# 👋 Hey, I'm {{name}}

> {{role}} · Open Source Advocate

{{#if bio}}{{bio}}{{/if}}

---

## 📦 Open Source Contributions

| Metric | Count |
|:-------|:------|
| 📁 Repositories | {{githubStats.repos}} |
| ⭐ Stars Earned | {{githubStats.stars}} |
| 👥 Community | {{githubStats.followers}} followers |

---

## 🛠 Stack

<p align="center">
{{#each skills}}
<img src="https://img.shields.io/badge/{{this}}-{{this}}-brightgreen?style=flat-square" />
{{/each}}
</p>

{{#if projects.length}}
## 🌟 Featured Repositories

{{#each projects}}
<details>
<summary><b>{{this.name}}</b> — {{this.desc}}</summary>

- **Tags:** {{#each this.tags}}\`{{this}}\` {{/each}}
- **URL:** [{{this.url}}]({{this.url}})
</details>
{{/each}}
{{/if}}

---

## 📊 Weekly Breakdown

\`\`\`
┌─────────────────────────────────────────────┐
│  Open Source Activity                       │
├─────────────────────────────────────────────┤
│  Commits    │ ████████░░░░░░░░░░░░  40%    │
│  PRs        │ ██████░░░░░░░░░░░░░░  30%    │
│  Reviews    │ ████░░░░░░░░░░░░░░░░  20%    │
│  Issues     │ ██░░░░░░░░░░░░░░░░░░  10%    │
└─────────────────────────────────────────────┘
\`\`\`

---

### 🤝 Let's Collaborate

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-{{this.label}}-blue?style=for-the-badge&logo={{this.platform}}" /></a>
{{/each}}
</p>

---

<p align="center">
  <sub>💡 *Open source is the people's software*</sub>
  <br />
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square" />
</p>
`)(data)
  },

  // =============================================
  // 9. Dark Modern — Sleek dark-optimized design
  // =============================================
  {
    id: 9, nameKey: 'readme.9', icon: 'fa-solid fa-moon', category: 'dark',
    description: 'Sleek dark-mode design optimized for GitHub dark theme with clean typography.',
    render: (data) => Handlebars.compile(`
<div align="center">

# {{name}}

### \`{{role}}\`

<img src="https://img.shields.io/badge/dark_mode-enabled-18181B?style=for-the-badge&logo=github&logoColor=white" />

</div>

---

\`\`\`json
{
  "name": "{{name}}",
  "role": "{{role}}",
  "bio": "{{bio}}",
  "location": "{{location}}",
  "contact": "{{email}}"
}
\`\`\`

---

### ⚙️ Core Technologies

\`\`\`
{{#each skills}}
  [{{this}}]
{{/each}}
\`\`\`

{{#if projects.length}}
### 📁 Active Projects

{{#each projects}}
- **[{{this.name}}]({{#if this.url}}{{this.url}}{{else}}#{{/if}})** — {{this.desc}}
{{/each}}
{{/if}}

---

### 🌐 Network

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><code>⟐ {{this.label}}</code></a>
{{/each}}
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=18181B" />
  <br />
  <sub><sup>✦ dark modern · minimal · focused ✦</sup></sub>
</p>
`)(data)
  },

  // =============================================
  // 10. AI Theme — Futuristic, neural network, tech-forward
  // =============================================
  {
    id: 10, nameKey: 'readme.10', icon: 'fa-solid fa-brain', category: 'ai',
    description: 'Futuristic AI-themed profile with neural network ASCII art and model card layout.',
    render: (data) => Handlebars.compile(`
<div align="center">

\`\`\`
   ╔═══════════════════════════════════════╗
   ║  NEURAL IDENTITY MATRIX v2.0         ║
   ║  {{name}}                         ║
   ║  {{role}}                     ║
   ╚═══════════════════════════════════════╝
\`\`\`

</div>

\`\`\`
⟐ MODEL CARD — {{name}}
├── Architecture: General Intelligence
├── Parameters: ∞
├── Training Data: Lifetime Experience
├── Specialization: {{role}}
├── Context Window: {{skills.length}} skills
└── Status: 🟢 ACTIVE
\`\`\`

---

### 🧠 Neural Skills Graph

\`\`\`
Input Layer
{{#each skills}}  ├── [{{this}}]
{{/each}}
Output Layer
  └── [Problem Solving]
\`\`\`

{{#if projects.length}}
### 🤖 Deployed Models

| Model | Description | Status |
|:------|:------------|:-------|
{{#each projects}}
| [{{this.name}}]({{#if this.url}}{{this.url}}{{else}}#{{/if}}) | {{this.desc}} | 🟢 DEPLOYED |
{{/each}}
{{/if}}

---

### 🔗 API Endpoints

<p align="center">
{{#each socials}}
<a href="{{this.url}}"><img src="https://img.shields.io/badge/{{this.label}}-00FFAA?style=flat-square&logo={{this.platform}}&logoColor=black" /></a>
{{/each}}
</p>

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username={{githubUsername}}&style=flat-square&color=00FFAA" />
  <br />
  <sub><sup>⚡ AI · Automation · Intelligence ⚡</sup></sub>
</p>
`)(data)
  }
];

/** Helper: get README template by ID */
function getReadmeTemplate(id) {
  return README_TEMPLATES.find(t => t.id === id) || README_TEMPLATES[0];
}

/** Helper: encode URI component (for Handlebars) */
Handlebars.registerHelper('encodeURIComponent', function(str) {
  return encodeURIComponent(String(str || ''));
});

/** Helper: progress bar using block characters */
Handlebars.registerHelper('progressBar', function(val, max) {
  const ratio = Math.min(1, (String(val).length % 20) / 20 || 0.5);
  const filled = Math.round(ratio * max);
  const empty = max - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ' ' + Math.round(ratio * 100) + '%';
});

/** Helper: date string */
Handlebars.registerHelper('date', function() {
  return new Date().toISOString().slice(0, 10);
});

/** Helper: padding */
Handlebars.registerHelper('padding', function(str, len) {
  str = String(str || '');
  if (str.length >= len) return '';
  return ' '.repeat(len - str.length);
});
