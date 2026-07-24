<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Universal%20Portfolio%20Generator-0a0a0f?style=for-the-badge&labelColor=111&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMjU2M0VCIi8+PHBhdGggZD0iTTEyIDIwaDE2TTIwIDEydjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE0IDE0bDEyIDEyTTI2IDE0bC0xMiAxMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+">
    <img src="https://img.shields.io/badge/Universal%20Portfolio%20Generator-2563EB?style=for-the-badge&labelColor=1e40af&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMjU2M0VCIi8+PHBhdGggZD0iTTEyIDIwaDE2TTIwIDEydjE2IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTE0IDE0bDEyIDEyTTI2IDE0bC0xMiAxMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+">
  </picture>
</p>

<p align="center">
  <b>10 portfolio themes</b> &bull; <b>RTL/Arabic support</b> &bull; <b>GitHub Pages deploy</b> &bull; <b>ZIP export</b>
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#themes">Themes</a> &bull;
  <a href="#deploy">Deploy</a> &bull;
  <a href="#tech-stack">Tech Stack</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT">
  <img src="https://img.shields.io/badge/AR%2FRTL-Full%20Support-22c55e?style=flat-square" alt="RTL">
  <img src="https://img.shields.io/badge/themes-10-8b5cf6?style=flat-square" alt="Themes">
  <img src="https://img.shields.io/badge/deploy-GitHub%20Pages-181717?style=flat-square&logo=github" alt="GitHub">
</p>

---

A fully client-side portfolio website generator. No build step, no server, no backend. Pick a theme, fill in your details, and deploy to GitHub Pages or download a ZIP. Supports Arabic/RTL natively across all themes.

---

## Features

- **10 visually distinct themes** -- from terminal-inspired to glassmorphic to bento grid
- **Arabic/RTL support** -- all themes mirror layout and typography for right-to-left scripts
- **Live preview** -- see changes as you type across desktop, tablet, and mobile viewports
- **GitHub Pages deploy** -- one-click deploy with auto-created repository and Pages enablement
- **ZIP download** -- standalone HTML ready to host anywhere
- **Color palettes** -- 8 curated palettes plus custom color picker
- **16+ premium Google Fonts** -- including Playfair Display, Fraunces, Bricolage Grotesk, and more
- **Glassmorphism controls** -- blur, opacity, and border-radius sliders
- **Education & Bug Bounty sections** -- built-in fields for academic background and security platform profiles
- **GitHub repo sync** -- auto-import your repositories as portfolio projects
- **Animations** -- toggleable AOS scroll animations
- **Config export/import** -- save and reload your portfolio setup
- **Dark/Light mode** -- respects system preference with manual toggle

---

## Quick Start

No installation required. Open the tool in any modern browser:

```
https://aether-dz.github.io/universal-portfolio-generator
```

Or serve locally:

```bash
npx serve /path/to/universal-portfolio-generator
# or
python3 -m http.server 8080 -d /path/to/universal-portfolio-generator
```

Then open `http://localhost:8080` in your browser.

### Usage

| Step | Action |
|------|--------|
| 1. Profile | Enter name, bio, role, photo, education, and Bug Bounty profiles |
| 2. Social | Connect GitHub, LinkedIn, HackerOne, and 20+ other platforms |
| 3. Skills | Select from 75+ pre-loaded skills with auto-detected icons |
| 4. Projects | Add projects with descriptions, tags, and URLs |
| 5. Theme & Deploy | Pick a theme, tune colors/fonts, preview live, then deploy |

---

## Themes

| Theme | Style | Best for |
|-------|-------|----------|
| **Aether** | Cyberpunk/glow | Developers, tech portfolios |
| **Terminal** | CLI-inspired | Security researchers, hackers |
| **Minimal** | Clean white space | Designers, creatives |
| **Bento Grid** | Card-based layout | Multi-section portfolios |
| **Glassmorphic** | Frosted glass | Modern, premium feel |
| **Dark Premium** | Dark mode grid | SaaS founders, executives |
| **Academic** | Timeline/research | Researchers, academics |

*3 additional themes being added -- Nebula (parallax), Neo Brutalism, Cyberpunk 2.0*

---

## Deploy

### GitHub Pages (free)

1. Generate your portfolio in the tool
2. Enter a GitHub Personal Access Token with `repo` scope
3. Click "Deploy to GitHub Pages"
4. Your site is live at `https://<username>.github.io/<repo>/`

The deploy flow:
- Creates a repository (or pushes to an existing one)
- Commits `index.html`, `.nojekyll`, and optional `CNAME`
- Enables GitHub Pages automatically

### ZIP Export

For hosting on Netlify, Vercel, or any static host:
1. Click "Download ZIP"
2. Extract and upload `index.html` to your host
3. Done

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Core | Vanilla JavaScript (no framework) |
| Templating | Handlebars.js |
| Styling | Tailwind CSS (CDN) + custom CSS |
| Icons | Devicon + Font Awesome 6 |
| Charts | Chart.js |
| ZIP | JSZip + FileSaver.js |
| Deploy | Octokit (GitHub API) |
| Animations | AOS (Animate on Scroll) |
| Preview | Sandboxed iframe |

All processing happens client-side. No data is sent to any server (except GitHub API during deploy, which requires explicit PAT input).

---

## Project Structure

```
universal-portfolio-generator/
  index.html            Entry point
  css/style.css         Custom styles + Tailwind overrides
  js/
    i18n.js             Arabic/English internationalization
    utils.js            Icon mappings, sanitization, helpers
    design-tokens.js    Color tokens, spacing, font definitions
    themes.js           7 theme templates (inline HTML/CSS/JS)
    form.js             Multi-step form controller and state
    preview.js          Live preview iframe rendering
    github.js           GitHub deploy + repo sync
    export.js           ZIP download + config import/export
    app.js              App initialization, event bindings
  assets/               Thumbnails, images
```

---

## Development

No build tools required. Edit the JS files directly:

```bash
# Clone
git clone https://github.com/Aether-DZ/universal-portfolio-generator.git

# Edit and serve
cd universal-portfolio-generator
npx serve .
```

### Key Files

| File | Purpose |
|------|---------|
| `js/themes.js` | Theme templates -- each is a `{id, name, icon, render()}` object |
| `js/form.js` | Form state, steps, and data collection |
| `js/utils.js` | Skill icons, social icons, sanitization |
| `js/i18n.js` | Translation strings for all UI labels |

---

## License

MIT -- free to use, modify, and distribute.

---

<p align="center">
  <sub>Built by <a href="https://github.com/Aether-DZ">Aether-DZ</a></sub>
  <br>
  <sub>Bug Bounty Hunter &bull; Software Engineer &bull; AI Security Researcher</sub>
</p>
