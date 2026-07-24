/* =============================================
   themes.js — 7 Handlebars Portfolio Templates
   ============================================= */
const THEMES = [
  {
    id: 1,
    nameKey: 'theme.1',
    icon: 'fa-solid fa-rocket',
    description: 'Clean startup-focused layout with metrics, traction, CTAs',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:#1E3A5F;--accent:#2563EB;--bg:#F8FAFC;--fg:#0F172A;--card:#fff;--muted:#E9EEF5}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--fg);line-height:1.6}
.container{max-width:1100px;margin:0 auto;padding:2rem 1.5rem}
header{text-align:center;padding:4rem 1.5rem 2rem}
.profile-img{width:120px;height:120px;border-radius:50%;object-fit:cover;border:4px solid var(--accent);margin-bottom:1rem}
h1{font-family:'Space Grotesk',sans-serif;font-size:2.5rem;font-weight:700}
.role{color:var(--accent);font-size:1.1rem;font-weight:500;margin:0.5rem 0 0.25rem}
.bio{color:#64748B;max-width:600px;margin:0.75rem auto}
.location{color:#94A3B8;font-size:0.9rem}
.socials{display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap}
.socials a{color:var(--fg);font-size:1.25rem;opacity:0.6;transition:opacity 0.2s}
.socials a:hover{opacity:1;color:var(--accent)}
.btn{display:inline-block;padding:0.75rem 2rem;background:var(--accent);color:#fff;border-radius:9999px;text-decoration:none;font-weight:600;transition:transform 0.2s}
.btn:hover{transform:translateY(-2px)}
.section{padding:2.5rem 0}
.section h2{font-family:'Space Grotesk',sans-serif;font-size:1.5rem;margin-bottom:1.5rem;position:relative}
.section h2:after{content:'';display:block;width:40px;height:3px;background:var(--accent);margin-top:0.5rem}
.skills{display:flex;flex-wrap:wrap;gap:0.75rem}
.skill-tag{padding:0.5rem 1rem;background:var(--card);border:1px solid #E2E8F0;border-radius:9999px;font-size:0.875rem;font-weight:500;display:inline-flex;align-items:center;gap:0.375rem}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem}
.project-card{background:var(--card);border:1px solid #E2E8F0;border-radius:1rem;padding:1.5rem;transition:box-shadow 0.2s,transform 0.2s}
.project-card:hover{box-shadow:0 8px 25px rgba(0,0,0,0.06);transform:translateY(-2px)}
.project-card h3{font-family:'Space Grotesk',sans-serif;font-size:1.1rem;margin-bottom:0.5rem}
.project-card p{color:#64748B;font-size:0.9rem;margin-bottom:0.75rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.375rem}
.project-tags span{font-size:0.75rem;padding:0.2rem 0.5rem;background:var(--muted);border-radius:9999px}
.project-card .btn{font-size:0.8rem;padding:0.4rem 1rem;margin-top:0.75rem}
footer{text-align:center;padding:2rem;color:#94A3B8;font-size:0.875rem;border-top:1px solid #E2E8F0}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;margin-top:1rem}
{{#if metrics}} .metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;margin:1.5rem 0;text-align:center}
.metric{background:var(--card);border:1px solid #E2E8F0;border-radius:0.75rem;padding:1rem}
.metric-num{font-size:1.5rem;font-weight:700;color:var(--accent);font-family:'Space Grotesk',sans-serif}
.metric-label{font-size:0.8rem;color:#64748B} {{/if}}
@media(max-width:640px){h1{font-size:1.75rem}.projects-grid{grid-template-columns:1fr}}
</style></head>
<body>
<header>
  {{#if photo}}<img src="{{photo}}" alt="{{name}}" class="profile-img">{{/if}}
  <h1>{{name}}</h1>
  <div class="role">{{role}}</div>
  {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
  {{#if location}}<p class="location"><i class="fas fa-location-dot"></i> {{location}}</p>{{/if}}
  {{#if email}}<p class="location"><i class="fas fa-envelope"></i> {{email}}</p>{{/if}}
  <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank" rel="noopener"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> Download CV</a>{{/if}}
</header>
<div class="container">
  {{#if metrics}}<div class="metrics">{{#each metrics}}<div class="metric"><div class="metric-num">{{this.value}}</div><div class="metric-label">{{this.label}}</div></div>{{/each}}</div>{{/if}}
  <section class="section">
    <h2>Skills</h2>
    <div class="skills">{{#each skills}}<span class="skill-tag">{{#if this.icon}}<i class="{{this.icon}}"></i>{{/if}} {{this.name}}</span>{{/each}}</div>
  </section>
  <section class="section">
    <h2>Projects</h2>
    <div class="projects-grid">{{#each projects}}<div class="project-card"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<br><a href="{{this.url}}" target="_blank" rel="noopener" class="btn">View Project</a>{{/if}}</div>{{/each}}</div>
  </section>
</div>
<footer>&copy; {{year}} {{name}}. Built with Universal Portfolio Generator.</footer>
</body></html>`)(data)
  },

  {
    id: 2,
    nameKey: 'theme.2',
    icon: 'fa-solid fa-network-wired',
    description: 'Dark cyber aesthetic with canvas particle network background',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#e0e0e0;font-family:'Inter',sans-serif;overflow-x:hidden;min-height:100vh}
#particles-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}
.content{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:3rem 1.5rem}
header{text-align:center;padding:4rem 0 2rem}
.profile-img{width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid #00ff88;box-shadow:0 0 20px rgba(0,255,136,0.3);margin-bottom:1rem}
h1{font-family:'JetBrains Mono',monospace;font-size:2rem;color:#00ff88;text-shadow:0 0 10px rgba(0,255,136,0.3)}
.role{color:#00ff88;opacity:0.8;font-family:'JetBrains Mono',monospace;font-size:0.9rem;margin:0.5rem 0;letter-spacing:0.1em}
.bio{color:#94A3B8;font-size:0.9rem;max-width:600px;margin:0.75rem auto;font-family:'JetBrains Mono',monospace}
.socials{display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap}
.socials a{color:#00ff88;font-size:1.25rem;opacity:0.6;transition:opacity 0.2s}
.socials a:hover{opacity:1;text-shadow:0 0 8px rgba(0,255,136,0.5)}
.section{border:1px solid rgba(0,255,136,0.15);border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;background:rgba(0,255,136,0.02)}
.section h2{font-family:'JetBrains Mono',monospace;font-size:1rem;color:#00ff88;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.15em}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.35rem 0.75rem;border:1px solid rgba(0,255,136,0.2);border-radius:0.25rem;font-size:0.8rem;font-family:'JetBrains Mono',monospace;color:#94A3B8}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem}
.project-card{border:1px solid rgba(0,255,136,0.15);border-radius:0.5rem;padding:1.25rem;background:rgba(0,0,0,0.3);transition:border-color 0.2s}
.project-card:hover{border-color:#00ff88}
.project-card h3{color:#00ff88;font-family:'JetBrains Mono',monospace;font-size:0.95rem;margin-bottom:0.5rem}
.project-card p{color:#94A3B8;font-size:0.8rem;margin-bottom:0.5rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.5rem}
.project-tags span{font-size:0.7rem;color:#64748B;font-family:'JetBrains Mono',monospace}
.project-card a{color:#00ff88;font-size:0.8rem;text-decoration:none;font-family:'JetBrains Mono',monospace;display:inline-block;margin-top:0.5rem}
.project-card a:hover{text-decoration:underline}
.ln{color:#64748B;font-family:'JetBrains Mono',monospace;font-size:0.8rem;margin-bottom:0.25rem}
.ln span{color:#00ff88}.cursor{animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
footer{border-top:1px solid rgba(0,255,136,0.1);padding:1.5rem 0;margin-top:2rem;text-align:center;font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:#64748B}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:#00ff88;text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:0.85rem;margin-top:1rem}
@media(max-width:640px){h1{font-size:1.5rem}.projects-grid{grid-template-columns:1fr}}
</style></head>
<body>
<canvas id="particles-canvas"></canvas>
<div class="content">
  <div class="ln"><span>visitor@{{slug}}</span>:~$ <span>cat</span> /home/{{slug}}/profile.txt <span class="cursor">|</span></div>
  <header>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>> {{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">/* {{bio}} */</p>{{/if}}
    {{#if email}}<p class="bio">[+] contact: {{email}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> [download_cv.sh]</a>{{/if}}
  </header>
  <section class="section">
    <h2># skills.txt</h2>
    <div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div>
  </section>
  <section class="section">
    <h2># projects.log</h2>
    <div class="projects-grid">{{#each projects}}<div class="project-card"><h3>$ {{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>[{{this}}]</span>{{/each}}</div>{{#if this.url}}<br><a href="{{this.url}}" target="_blank">> view_source</a>{{/if}}</div>{{/each}}</div>
  </section>
  <footer>>
 <span class="cursor">_</span>  &copy; {{year}} {{name}}. All rights reserved.</footer>
</div>
<script>
const c=document.getElementById('particles-canvas'),ctx=c.getContext('2d');
let w,h,mouse={x:0,y:0};
function resize(){w=c.width=innerWidth;h=c.height=innerHeight}
resize();window.addEventListener('resize',resize);
document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
const particles=Array.from({length:80},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5,size:Math.random()*2+1}));
function anim(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle='rgba(0,255,136,'+(0.2-dist/600)+')';ctx.lineWidth=0.5;ctx.stroke()}ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle='rgba(0,255,136,0.6)';ctx.fill()});requestAnimationFrame(anim)}
anim()
</script>
</body></html>`)(data)
  },

  {
    id: 3,
    nameKey: 'theme.3',
    icon: 'fa-solid fa-code',
    description: 'Clean typography-focused design with dark/light toggle',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | {{role}}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#FAFAFA;--fg:#09090B;--muted:#E8ECF0;--accent:#2563EB;--card:#fff;--border:#E4E4E7}
.dark{--bg:#09090B;--fg:#FAFAFA;--muted:#27272A;--card:#18181B;--border:#3F3F46}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7;transition:background 0.3s,color 0.3s}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
.container{max-width:720px;margin:0 auto;padding:2rem 1.5rem}
.theme-btn{position:fixed;top:1rem;right:1rem;z-index:10;width:2.5rem;height:2.5rem;border-radius:9999px;border:1px solid var(--border);background:var(--card);color:var(--fg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.125rem;transition:all 0.2s}
.theme-btn:hover{background:var(--muted)}
header{padding:4rem 0 2rem;text-align:center}
.profile-img{width:96px;height:96px;border-radius:50%;object-fit:cover;margin-bottom:1rem}
h1{font-size:2rem;font-weight:700;letter-spacing:-0.02em}
.role{color:var(--accent);font-weight:500;font-size:1rem;margin:0.25rem 0}
.bio{color:#64748B;font-size:0.95rem;max-width:550px;margin:0.75rem auto}
.socials{display:flex;justify-content:center;gap:0.75rem;margin:1.25rem 0;flex-wrap:wrap}
.socials a{color:var(--fg);opacity:0.5;font-size:1.125rem;transition:opacity 0.2s}
.socials a:hover{opacity:1}
.section{padding:2rem 0}
.section h2{font-size:1.125rem;font-weight:600;margin-bottom:1rem;letter-spacing:-0.01em}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.25rem 0.75rem;background:var(--muted);border-radius:9999px;font-size:0.8125rem;font-weight:500}
.projects-list{display:flex;flex-direction:column;gap:1rem}
.project-entry{padding:1rem;border:1px solid var(--border);border-radius:0.75rem;transition:border-color 0.2s}
.project-entry:hover{border-color:var(--accent)}
.project-entry h3{font-size:1rem;font-weight:600;margin-bottom:0.25rem}
.project-entry p{font-size:0.875rem;color:#64748B;margin-bottom:0.5rem}
.project-entry .tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-entry .tags span{font-size:0.75rem;padding:0.125rem 0.5rem;background:var(--muted);border-radius:9999px}
.project-entry a{color:var(--accent);font-size:0.875rem;text-decoration:none;font-weight:500;display:inline-block;margin-top:0.25rem}
footer{padding:2rem;text-align:center;color:#94A3B8;font-size:0.8125rem;border-top:1px solid var(--border);margin-top:2rem}
@media(max-width:640px){h1{font-size:1.5rem}}
</style></head>
<body>
<button class="theme-btn" id="darkToggle" aria-label="Toggle theme"><i class="fas fa-moon"></i></button>
<div class="container">
  <header>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio" style="color:#94A3B8;font-size:0.85rem"><i class="fas fa-location-dot"></i> {{location}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<p style="margin-top:1rem"><a href="{{cv}}" download style="color:var(--accent);text-decoration:none;font-weight:500;font-size:0.875rem"><i class="fas fa-file-pdf"></i> Resume</a></p>{{/if}}
  </header>
  <section class="section"><h2>Skills</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></section>
  <section class="section"><h2>Projects</h2><div class="projects-list">{{#each projects}}<div class="project-entry"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank">View →</a>{{/if}}</div>{{/each}}</div></section>
</div>
<footer>&copy; {{year}} {{name}}</footer>
<script>(()=>{const b=document.getElementById('darkToggle'),i=b.querySelector('i');const t=()=>{document.documentElement.classList.toggle('dark');const d=document.documentElement.classList.contains('dark');i.className=d?'fas fa-sun':'fas fa-moon';localStorage.setItem('theme',d?'dark':'light')};if(localStorage.getItem('theme')==='dark')t();b.addEventListener('click',t)})()</script>
</body></html>`)(data)
  },

  {
    id: 4,
    nameKey: 'theme.4',
    icon: 'fa-solid fa-table-cells-large',
    description: 'Modern Bento Box card layout for visual portfolios',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#FAFAFA;--fg:#09090B;--card:#fff;--muted:#F0F0F0;--accent:#2563EB;--radius:1.5rem}
body{font-family:'Archivo',sans-serif;background:var(--bg);color:var(--fg);padding:1rem;min-height:100vh}
.bento{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:auto;gap:1rem;padding:1rem}
.card{background:var(--card);border-radius:var(--radius);padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:transform 0.2s,box-shadow 0.2s}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,0.06)}
.card-wide{grid-column:span 2}.card-tall{grid-row:span 2}.card-full{grid-column:1/-1}
.profile-section{display:flex;flex-direction:column;align-items:center;text-align:center;padding:2rem 1.5rem;grid-column:1;grid-row:1/3}
.profile-img{width:80px;height:80px;border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid var(--accent)}
h1{font-family:'Space Grotesk',sans-serif;font-size:1.5rem;font-weight:700}
.role{color:var(--accent);font-size:0.85rem;font-weight:500;margin:0.25rem 0}
.bio{color:#64748B;font-size:0.8rem;margin:0.5rem 0}
.socials{display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;justify-content:center}
.socials a{width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:9999px;background:var(--muted);color:var(--fg);text-decoration:none;font-size:0.875rem;transition:all 0.2s}
.socials a:hover{background:var(--accent);color:#fff}
h2{font-family:'Space Grotesk',sans-serif;font-size:1rem;font-weight:600;margin-bottom:1rem}
.skills-bento{display:flex;flex-wrap:wrap;gap:0.375rem}
.skill-chip{padding:0.25rem 0.625rem;background:var(--muted);border-radius:9999px;font-size:0.75rem;font-weight:500}
.project-bento{display:flex;flex-direction:column;gap:0.75rem}
.project-mini{border-bottom:1px solid #F0F0F0;padding-bottom:0.75rem}
.project-mini:last-child{border:none;padding-bottom:0}
.project-mini h3{font-size:0.9rem;font-weight:600;margin-bottom:0.125rem}
.project-mini p{font-size:0.75rem;color:#64748B}
.project-mini .tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.25rem}
.project-mini .tags span{font-size:0.65rem;padding:0.125rem 0.375rem;background:var(--muted);border-radius:9999px}
.project-mini a{color:var(--accent);font-size:0.75rem;text-decoration:none;font-weight:500}
.metrics{display:flex;justify-content:space-around;text-align:center;padding:1rem 0}
.metric-num{font-size:1.25rem;font-weight:700;font-family:'Space Grotesk',sans-serif;color:var(--accent)}
.metric-label{font-size:0.7rem;color:#94A3B8;margin-top:0.125rem}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-size:0.85rem;font-weight:500;margin-top:1rem}
footer{grid-column:1/-1;text-align:center;padding:1rem;color:#94A3B8;font-size:0.75rem;border-top:1px solid #F0F0F0}
@media(max-width:768px){.bento{grid-template-columns:1fr}.profile-section{grid-column:1;grid-row:auto}.card-wide{grid-column:1}}
</style></head>
<body>
<div class="bento">
  <div class="card profile-section">
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio"><i class="fas fa-location-dot"></i> {{location}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> CV</a>{{/if}}
  </div>
  <div class="card card-wide"><h2>Skills</h2><div class="skills-bento">{{#each skills}}<span class="skill-chip">{{this.name}}</span>{{/each}}</div></div>
  {{#if metrics}}<div class="card"><h2>Metrics</h2><div class="metrics">{{#each metrics}}<div><div class="metric-num">{{this.value}}</div><div class="metric-label">{{this.label}}</div></div>{{/each}}</div></div>{{/if}}
  <div class="card card-tall card-wide"><h2>Projects</h2><div class="project-bento">{{#each projects}}<div class="project-mini"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank">View →</a>{{/if}}</div>{{/each}}</div></div>
  <footer>&copy; {{year}} {{name}}</footer>
</div>
</body></html>`)(data)
  },

  {
    id: 5,
    nameKey: 'theme.5',
    icon: 'fa-solid fa-terminal',
    description: 'Interactive terminal-style interface for CLI enthusiasts',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} ~ portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{background:#0d1117;color:#c9d1d9;font-family:'JetBrains Mono',monospace;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1rem}
.terminal{background:#161b22;border:1px solid #30363d;border-radius:0.75rem;width:100%;max-width:820px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.5)}
.terminal-bar{background:#21262d;padding:0.625rem 1rem;display:flex;align-items:center;gap:0.5rem;border-bottom:1px solid #30363d}
.terminal-dot{width:0.75rem;height:0.75rem;border-radius:50%}.dot-red{background:#ff5555}.dot-yellow{background:#f1fa8c}.dot-green{background:#50fa7b}
.terminal-title{color:#8b949e;font-size:0.75rem;margin-left:0.5rem}
.terminal-body{padding:1.5rem;overflow-y:auto;max-height:80vh;font-size:0.85rem;line-height:1.6}
.prompt{color:#50fa7b;user-select:none}
.cmd{color:#ff79c6}.output{color:#c9d1d9;margin-bottom:0.75rem}
.output-gray{color:#8b949e}.accent{color:#50fa7b}
a{color:#58a6ff;text-decoration:none}a:hover{text-decoration:underline}
.section-title{color:#ff79c6;margin:1rem 0 0.5rem}.skills-line{display:flex;flex-wrap:wrap;gap:0.25rem 0.75rem}
.skill-item{color:#f1fa8c}.projects-section{margin-top:0.5rem}
.project-line{border-left:2px solid #30363d;padding-left:1rem;margin:0.5rem 0}
.project-name{color:#58a6ff;font-weight:500}.project-desc{color:#8b949e;font-size:0.8rem}
.project-tags{color:#f1fa8c;font-size:0.75rem}.social-line{display:flex;gap:1rem;flex-wrap:wrap;margin:0.5rem 0}
.error{color:#ff5555}.cursor-blink{animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
@media(max-width:640px){.terminal-body{font-size:0.75rem;padding:1rem}}
</style></head>
<body>
<div class="terminal">
  <div class="terminal-bar"><span class="terminal-dot dot-red"></span><span class="terminal-dot dot-yellow"></span><span class="terminal-dot dot-green"></span><span class="terminal-title">{{name}}@portfolio:~</span></div>
  <div class="terminal-body">
    <div><span class="prompt">visitor@portfolio</span>:<span class="prompt">~</span>$ <span class="cmd">cat</span> /etc/motd</div>
    <div class="output accent">
      ╔══════════════════════════════════╗<br>
      ║  {{name}} — {{role}}  ║<br>
      ╚══════════════════════════════════╝
    </div>
    {{#if bio}}<div><span class="prompt">visitor@portfolio:~</span>$ <span class="cmd">echo</span> $BIO</div><div class="output output-gray">"{{bio}}"</div>{{/if}}
    <div><span class="prompt">visitor@portfolio:~</span>$ <span class="cmd">whoami</span></div>
    <div class="output">{{name}}{{#if location}} | {{location}}{{/if}} {{#if email}} | {{email}}{{/if}}</div>
    <div><span class="prompt">visitor@portfolio:~</span>$ <span class="cmd">cat</span> skills.txt <span class="output-gray">| head -20</span></div>
    <div class="skills-line">{{#each skills}}<span class="skill-item">[{{this.name}}]</span>{{/each}}</div>
    <div class="section-title"># Projects:</div>
    <div class="projects-section">{{#each projects}}<div class="project-line"><div><span class="prompt">$</span> <span class="project-name">{{this.name}}</span></div><div class="project-desc">{{this.desc}}</div><div class="project-tags">{{#each this.tags}}<span>[{{this}}]</span> {{/each}}</div>{{#if this.url}}<div><a href="{{this.url}}" target="_blank">→ view</a></div>{{/if}}</div>{{/each}}</div>
    <div><span class="prompt">visitor@portfolio:~</span>$ <span class="cmd">cat</span> social.txt</div>
    <div class="social-line">{{#each socials}}<a href="{{this.url}}" target="_blank">{{this.label}}</a>{{/each}}</div>
    {{#if cv}}<div><span class="prompt">visitor@portfolio:~</span>$ <span class="cmd">wget</span> <a href="{{cv}}" download>cv.pdf</a></div>{{/if}}
    <div><span class="prompt">visitor@portfolio:~</span>$ <span class="error">|</span><span class="cursor-blink">_</span></div>
  </div>
</div>
</body></html>`)(data)
  },

  {
    id: 6,
    nameKey: 'theme.6',
    icon: 'fa-solid fa-droplet',
    description: 'Frosted glass cards over animated gradient background',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);font-family:'Archivo',sans-serif;display:flex;align-items:center;justify-content:center;padding:1rem;position:relative;overflow-x:hidden}
.bg-blob{position:fixed;border-radius:50%;filter:blur(80px);opacity:0.4;animation:float 20s ease-in-out infinite;pointer-events:none;z-index:0}
.blob1{width:400px;height:400px;background:#ff6b6b;top:-100px;left:-100px;animation-delay:0s}
.blob2{width:350px;height:350px;background:#48dbfb;bottom:-80px;right:-80px;animation-delay:-7s}
.blob3{width:300px;height:300px;background:#ff9ff3;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-14s}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-30px) scale(1.1)}66%{transform:translate(-20px,20px) scale(0.9)}}
.glass-container{position:relative;z-index:1;width:100%;max-width:820px}
.glass-card{background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);border-radius:1.5rem;padding:2rem;margin-bottom:1rem;transition:transform 0.3s,background 0.3s}
.glass-card:hover{background:rgba(255,255,255,0.18);transform:translateY(-2px)}
.text-center{text-align:center}.profile-img{width:88px;height:88px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,0.3);margin-bottom:1rem}
h1{color:white;font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;text-shadow:0 2px 10px rgba(0,0,0,0.1)}
.role{color:rgba(255,255,255,0.8);font-size:1rem;font-weight:500;margin:0.25rem 0}
.bio{color:rgba(255,255,255,0.7);font-size:0.9rem;max-width:500px;margin:0.5rem auto}
.socials{display:flex;justify-content:center;gap:0.75rem;margin:1rem 0;flex-wrap:wrap}
.socials a{width:2.5rem;height:2.5rem;border-radius:9999px;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;font-size:1rem;transition:all 0.2s;border:1px solid rgba(255,255,255,0.15)}
.socials a:hover{background:rgba(255,255,255,0.25);transform:scale(1.1)}
h2{color:white;font-size:1.125rem;font-weight:600;margin-bottom:1rem;font-family:'Space Grotesk',sans-serif}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.35rem 0.875rem;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:9999px;color:white;font-size:0.8125rem;border:1px solid rgba(255,255,255,0.1)}
.projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}
.project-item{padding:1.25rem;background:rgba(255,255,255,0.06);border-radius:1rem;border:1px solid rgba(255,255,255,0.1);transition:all 0.2s}
.project-item:hover{background:rgba(255,255,255,0.12)}
.project-item h3{color:white;font-size:0.95rem;font-weight:600;margin-bottom:0.25rem}
.project-item p{color:rgba(255,255,255,0.65);font-size:0.8rem;margin-bottom:0.5rem}
.project-item .tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-item .tags span{font-size:0.7rem;padding:0.125rem 0.5rem;background:rgba(255,255,255,0.1);border-radius:9999px;color:rgba(255,255,255,0.7)}
.project-item a{color:white;font-size:0.8rem;text-decoration:none;font-weight:500;opacity:0.7;transition:opacity 0.2s;display:inline-block;margin-top:0.375rem}
.project-item a:hover{opacity:1}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:white;text-decoration:none;font-size:0.875rem;opacity:0.8;transition:opacity 0.2s;margin-top:0.75rem}
.cv-link:hover{opacity:1}
footer{text-align:center;color:rgba(255,255,255,0.4);font-size:0.75rem;margin-top:1rem;padding:1rem}
@media(max-width:640px){h1{font-size:1.5rem}.projects{grid-template-columns:1fr}}
</style></head>
<body>
<div class="bg-blob blob1"></div><div class="bg-blob blob2"></div><div class="bg-blob blob3"></div>
<div class="glass-container">
  <div class="glass-card text-center">
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio"><i class="fas fa-location-dot"></i> {{location}}</p>{{/if}}
    {{#if email}}<p class="bio"><i class="fas fa-envelope"></i> {{email}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<br><a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> Download CV</a>{{/if}}
  </div>
  {{#if skills.length}}<div class="glass-card"><h2>✦ Skills</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  {{#if projects.length}}<div class="glass-card"><h2>✦ Projects</h2><div class="projects">{{#each projects}}<div class="project-item"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<br><a href="{{this.url}}" target="_blank">View Project →</a>{{/if}}</div>{{/each}}</div></div>{{/if}}
  <footer>&copy; {{year}} {{name}}. Glassmorphic.</footer>
</div>
</body></html>`)(data)
  },

  {
    id: 7,
    nameKey: 'theme.7',
    icon: 'fa-solid fa-graduation-cap',
    description: 'Structured academic layout with timeline sections',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Academic Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:#1E3A5F;--accent:#A16207;--bg:#F8FAFC;--fg:#0F172A;--card:#fff;--muted:#F1F5F9}
body{font-family:'Atkinson Hyperlegible',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7}
.container{max-width:860px;margin:0 auto;padding:2rem 1.5rem}
header{border-bottom:2px solid var(--primary);padding-bottom:1.5rem;margin-bottom:2rem;display:flex;gap:1.5rem;align-items:start}
.profile-img{width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid var(--primary);flex-shrink:0}
h1{font-family:'Crimson Pro',serif;font-size:2rem;font-weight:700;color:var(--primary)}
.header-sub{color:var(--accent);font-weight:500;font-size:0.95rem;margin:0.25rem 0}
.bio{color:#475569;font-size:0.9rem;margin-top:0.5rem;max-width:600px}
.contact-line{font-size:0.85rem;color:#64748B;margin-top:0.5rem;display:flex;flex-wrap:wrap;gap:0.75rem}
.contact-line i{color:var(--accent);width:1rem}
.section{padding:1.5rem 0;border-bottom:1px solid #E2E8F0}
.section:last-of-type{border-bottom:none}
.section h2{font-family:'Crimson Pro',serif;font-size:1.25rem;color:var(--primary);margin-bottom:1rem;display:flex;align-items:center;gap:0.5rem}
.section h2 i{color:var(--accent)}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.3rem 0.75rem;background:var(--muted);border:1px solid #E2E8F0;border-radius:0.375rem;font-size:0.8rem;color:var(--primary);font-weight:500}
.timeline{position:relative;padding-left:1.5rem}
.timeline:before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:#E2E8F0}
.timeline-item{position:relative;margin-bottom:1.25rem;padding-left:0.5rem}
.timeline-item:before{content:'';position:absolute;left:-1.65rem;top:0.5rem;width:0.625rem;height:0.625rem;border-radius:50%;background:var(--accent);border:2px solid var(--bg)}
.timeline-item h3{font-size:1rem;font-weight:600;color:var(--primary)}
.timeline-item .meta{font-size:0.8rem;color:#64748B;margin:0.125rem 0 0.25rem}
.timeline-item p{font-size:0.875rem;color:#475569}
.timeline-item .tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.375rem}
.timeline-item .tags span{font-size:0.7rem;padding:0.125rem 0.5rem;background:var(--muted);border-radius:9999px;color:#64748B}
.project-card{background:var(--card);border:1px solid #E2E8F0;border-radius:0.5rem;padding:1rem;margin-bottom:0.75rem}
.project-card h3{font-size:1rem;font-weight:600;color:var(--primary)}
.project-card .meta{font-size:0.8rem;color:#64748B}
.project-card p{font-size:0.85rem;color:#475569;margin:0.25rem 0}
.project-card a{color:var(--accent);font-size:0.85rem;text-decoration:none;font-weight:500}
.socials{display:flex;gap:0.75rem;flex-wrap:wrap}
.socials a{color:#64748B;font-size:1.125rem;transition:color 0.2s}
.socials a:hover{color:var(--accent)}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;font-size:0.875rem}
footer{text-align:center;padding:1.5rem;color:#94A3B8;font-size:0.8125rem;border-top:1px solid #E2E8F0;margin-top:2rem}
@media(max-width:640px){header{flex-direction:column;align-items:center;text-align:center}.contact-line{justify-content:center}}
</style></head>
<body>
<div class="container">
  <header>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <div>
      <h1>{{name}}</h1>
      <div class="header-sub">{{role}}</div>
      {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
      <div class="contact-line">{{#if email}}<span><i class="fas fa-envelope"></i> {{email}}</span>{{/if}}{{#if location}}<span><i class="fas fa-location-dot"></i> {{location}}</span>{{/if}}</div>
      <div class="contact-line" style="margin-top:0.5rem">
        <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
        {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> Download CV</a>{{/if}}
      </div>
    </div>
  </header>

  {{#if skills.length}}<section class="section"><h2><i class="fas fa-flask"></i> Research Areas & Skills</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></section>{{/if}}

  <section class="section"><h2><i class="fas fa-book"></i> Publications & Projects</h2>
    <div class="timeline">{{#each projects}}<div class="timeline-item"><h3>{{this.name}}</h3><div class="meta">{{this.date}}</div><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<p style="margin-top:0.25rem"><a href="{{this.url}}" target="_blank">→ View Publication</a></p>{{/if}}</div>{{/each}}</div>
  </section>

  <footer>&copy; {{year}} {{name}}. Academic Portfolio</footer>
</div>
</body></html>`)(data)
  }
];

// Helper: get theme by ID
function getTheme(id) {
  return THEMES.find(t => t.id === id) || THEMES[0];
}
