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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:{{colors.primary}};--accent:{{colors.accent}};--bg:{{colors.bg}};--fg:#0F172A;--card:#fff;--muted:#E9EEF5}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);line-height:1.6}
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
<body{{#if animationsEnabled}} data-aos="fade-up"{{/if}}>
<header{{#if animationsEnabled}} data-aos="fade-down"{{/if}}>
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:{{colors.bg}};color:#e0e0e0;font-family:'{{fontFamilyCss}}',sans-serif;overflow-x:hidden;min-height:100vh}
#particles-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}
.content{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:3rem 1.5rem}
header{text-align:center;padding:4rem 0 2rem}
.profile-img{width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid {{colors.accent}};box-shadow:0 0 20px {{colors.accent}}33;margin-bottom:1rem}
h1{font-family:'JetBrains Mono',monospace;font-size:2rem;color:{{colors.accent}};text-shadow:0 0 10px {{colors.accent}}44}
.role{color:{{colors.accent}};opacity:0.8;font-family:'JetBrains Mono',monospace;font-size:0.9rem;margin:0.5rem 0;letter-spacing:0.1em}
.bio{color:#94A3B8;font-size:0.9rem;max-width:600px;margin:0.75rem auto;font-family:'JetBrains Mono',monospace}
.socials{display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap}
.socials a{color:{{colors.accent}};font-size:1.25rem;opacity:0.6;transition:opacity 0.2s}
.socials a:hover{opacity:1;text-shadow:0 0 8px {{colors.accent}}77}
.section{border:1px solid {{colors.accent}}22;border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;background:{{colors.accent}}08}
.section h2{font-family:'JetBrains Mono',monospace;font-size:1rem;color:{{colors.accent}};margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.15em}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.35rem 0.75rem;border:1px solid {{colors.accent}}33;border-radius:0.25rem;font-size:0.8rem;font-family:'JetBrains Mono',monospace;color:#94A3B8}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1rem}
.project-card{border:1px solid {{colors.accent}}22;border-radius:0.5rem;padding:1.25rem;background:rgba(0,0,0,0.3);transition:border-color 0.2s}
.project-card:hover{border-color:{{colors.accent}}}
.project-card h3{color:{{colors.accent}};font-family:'JetBrains Mono',monospace;font-size:0.95rem;margin-bottom:0.5rem}
.project-card p{color:#94A3B8;font-size:0.8rem;margin-bottom:0.5rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.5rem}
.project-tags span{font-size:0.7rem;color:#64748B;font-family:'JetBrains Mono',monospace}
.project-card a{color:{{colors.accent}};font-size:0.8rem;text-decoration:none;font-family:'JetBrains Mono',monospace;display:inline-block;margin-top:0.5rem}
.project-card a:hover{text-decoration:underline}
.ln{color:#64748B;font-family:'JetBrains Mono',monospace;font-size:0.8rem;margin-bottom:0.25rem}
.ln span{color:{{colors.accent}}}.cursor{animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
footer{border-top:1px solid {{colors.accent}}18;padding:1.5rem 0;margin-top:2rem;text-align:center;font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:#64748B}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:{{colors.accent}};text-decoration:none;font-family:'JetBrains Mono',monospace;font-size:0.85rem;margin-top:1rem}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:{{colors.bg}};--fg:#09090B;--muted:#E8ECF0;--accent:{{colors.accent}};--card:#fff;--border:#E4E4E7}
.dark{--bg:{{colors.bg}};--fg:#FAFAFA;--muted:#27272A;--card:#18181B;--border:#3F3F46}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7;transition:background 0.3s,color 0.3s}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:{{colors.bg}};--fg:#09090B;--card:#fff;--muted:#F0F0F0;--accent:{{colors.accent}};--radius:1.5rem}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);padding:1rem;min-height:100vh}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{background:{{colors.bg}};color:#c9d1d9;font-family:'{{fontFamilyCss}}',monospace;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1rem}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:linear-gradient(135deg,{{colors.primary}} 0%,{{colors.accent}} 100%);font-family:'{{fontFamilyCss}}',sans-serif;display:flex;align-items:center;justify-content:center;padding:1rem;position:relative;overflow-x:hidden}
.bg-blob{position:fixed;border-radius:50%;filter:blur(80px);opacity:0.4;animation:float 20s ease-in-out infinite;pointer-events:none;z-index:0}
.blob1{width:400px;height:400px;background:#ff6b6b;top:-100px;left:-100px;animation-delay:0s}
.blob2{width:350px;height:350px;background:#48dbfb;bottom:-80px;right:-80px;animation-delay:-7s}
.blob3{width:300px;height:300px;background:#ff9ff3;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-14s}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-30px) scale(1.1)}66%{transform:translate(-20px,20px) scale(0.9)}}
.glass-container{position:relative;z-index:1;width:100%;max-width:820px}
.glass-card{background:rgba(255,255,255,0.12);backdrop-filter:blur({{#if glassmorphism}}{{glassmorphism.blur}}{{else}}20{{/if}}px);-webkit-backdrop-filter:blur({{#if glassmorphism}}{{glassmorphism.blur}}{{else}}20{{/if}}px);border:1px solid rgba(255,255,255,0.2);border-radius:{{#if glassmorphism}}{{glassmorphism.radius}}{{else}}24{{/if}}px;padding:2rem;margin-bottom:1rem;transition:transform 0.3s,background 0.3s}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
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
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:{{colors.primary}};--accent:{{colors.accent}};--bg:{{colors.bg}};--fg:#0F172A;--card:#fff;--muted:#F1F5F9}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7}
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
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },
  // =============================================
  // 8. Dark Modern — Ultra-minimal dark design
  // =============================================
  {
    id: 8,
    nameKey: 'theme.8',
    icon: 'fa-solid fa-moon',
    description: 'Ultra-minimal dark design with elegant typography and generous whitespace',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Portfolio</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#e4e4e7;font-family:'{{fontFamilyCss}}',sans-serif;overflow-x:hidden}
.bg-grid{position:fixed;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;z-index:0}
.content{position:relative;z-index:1;max-width:1000px;margin:0 auto;padding:4rem 2rem}
header{text-align:center;padding:6rem 0 3rem}
.profile-img{width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid {{colors.primary}};margin-bottom:1.5rem}
h1{font-size:3.5rem;font-weight:700;letter-spacing:-0.03em;background:linear-gradient(135deg,#fff 0%,{{colors.primary}} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.role{color:{{colors.accent}};font-size:1.1rem;font-weight:500;margin:0.75rem 0 0.25rem;letter-spacing:0.05em;text-transform:uppercase}
.bio{color:#71717a;font-size:1rem;max-width:550px;margin:1rem auto;line-height:1.7}
.meta-info{display:flex;justify-content:center;gap:2rem;margin:1.5rem 0;flex-wrap:wrap;color:#52525b;font-size:0.875rem}
.meta-info i{color:{{colors.primary}};margin-right:0.375rem}
.socials{display:flex;justify-content:center;gap:0.75rem;margin:2rem 0;flex-wrap:wrap}
.socials a{width:2.75rem;height:2.75rem;border-radius:50%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;color:#a1a1aa;text-decoration:none;font-size:1.125rem;transition:all 0.3s}
.socials a:hover{background:{{colors.primary}}22;border-color:{{colors.primary}}44;color:{{colors.primary}};transform:translateY(-3px)}
.section{padding:3rem 0}
.section-title{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;color:#52525b;margin-bottom:1.5rem}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.5rem 1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:9999px;font-size:0.8125rem;color:#a1a1aa;transition:all 0.2s;display:inline-flex;align-items:center;gap:0.375rem}
.skill-tag:hover{border-color:{{colors.primary}}44;color:{{colors.primary}}}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem}
.project-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:1rem;padding:1.5rem;transition:all 0.3s;cursor:default}
.project-card:hover{border-color:{{colors.primary}}33;background:rgba(255,255,255,0.04);transform:translateY(-2px)}
.project-card h3{font-size:1.125rem;font-weight:600;color:#e4e4e7;margin-bottom:0.5rem}
.project-card p{color:#71717a;font-size:0.875rem;line-height:1.6;margin-bottom:0.75rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-tags span{font-size:0.7rem;padding:0.125rem 0.5rem;background:rgba(255,255,255,0.04);border-radius:9999px;color:#52525b}
.project-link{display:inline-flex;align-items:center;gap:0.375rem;color:{{colors.primary}};font-size:0.8125rem;font-weight:500;text-decoration:none;margin-top:0.75rem;transition:gap 0.2s}
.project-link:hover{gap:0.625rem}
.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;margin:1.5rem 0}
.metric{text-align:center;padding:1.25rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem}
.metric-num{font-size:1.75rem;font-weight:700;color:{{colors.primary}};font-family:'Space Grotesk',sans-serif}
.metric-label{font-size:0.75rem;color:#52525b;margin-top:0.25rem}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:{{colors.primary}};text-decoration:none;font-size:0.875rem;font-weight:500;margin-top:0.75rem;padding:0.5rem 1.25rem;border:1px solid {{colors.primary}}33;border-radius:9999px;transition:all 0.2s}
.cv-link:hover{background:{{colors.primary}}11;border-color:{{colors.primary}}66}
footer{text-align:center;padding:3rem 0;color:#52525b;font-size:0.8125rem;border-top:1px solid rgba(255,255,255,0.06);margin-top:2rem}
@media(max-width:640px){h1{font-size:2rem}.content{padding:2rem 1rem}.projects-grid{grid-template-columns:1fr}}
</style></head>
<body>
<div class="bg-grid"></div>
<div class="content">
  <header{{#if animationsEnabled}} data-aos="fade-down"{{/if}}>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    <div class="meta-info">
      {{#if location}}<span><i class="fas fa-location-dot"></i> {{location}}</span>{{/if}}
      {{#if email}}<span><i class="fas fa-envelope"></i> {{email}}</span>{{/if}}
    </div>
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank" rel="noopener"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> Download CV</a>{{/if}}
  </header>
  {{#if metrics}}<div class="metrics">{{#each metrics}}<div class="metric"><div class="metric-num">{{this.value}}</div><div class="metric-label">{{this.label}}</div></div>{{/each}}</div>{{/if}}
  <section class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}>
    <div class="section-title">Skills & Technologies</div>
    <div class="skills">{{#each skills}}<span class="skill-tag">{{#if this.icon}}<i class="{{this.icon}}"></i>{{/if}} {{this.name}}</span>{{/each}}</div>
  </section>
  <section class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}>
    <div class="section-title">Projects</div>
    <div class="projects-grid">{{#each projects}}<div class="project-card"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank" rel="noopener" class="project-link">View Project <i class="fas fa-arrow-right" style="font-size:0.7rem"></i></a>{{/if}}</div>{{/each}}</div>
  </section>
  <footer>&copy; {{year}} {{name}}. Dark Modern Theme</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },

  // =============================================
  // 9. AI Theme — Futuristic tech with gradient glow
  // =============================================
  {
    id: 9,
    nameKey: 'theme.9',
    icon: 'fa-solid fa-brain',
    description: 'Futuristic AI-themed portfolio with animated gradients and neon glow effects',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | AI Portfolio</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
@keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes pulseGlow{0%,100%{opacity:0.6}50%{opacity:1}}
body{min-height:100vh;background:linear-gradient(-45deg,{{colors.bg}},{{colors.primary}}22,{{colors.accent}}22,{{colors.bg}});background-size:400% 400%;animation:gradientShift 15s ease infinite;color:#e0e0e0;font-family:'{{fontFamilyCss}}',sans-serif;overflow-x:hidden}
.bg-pattern{position:fixed;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(circle at 25% 25%,{{colors.primary}}11 0%,transparent 50%),radial-gradient(circle at 75% 75%,{{colors.accent}}11 0%,transparent 50%);pointer-events:none;z-index:0}
.content{position:relative;z-index:1;max-width:960px;margin:0 auto;padding:3rem 1.5rem}
header{text-align:center;padding:5rem 0 2rem}
.profile-img{width:110px;height:110px;border-radius:50%;object-fit:cover;border:3px solid transparent;background:linear-gradient(135deg,{{colors.primary}},{{colors.accent}}) border-box;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;margin-bottom:1.5rem;animation:float 4s ease-in-out infinite}
h1{font-size:3rem;font-weight:700;background:linear-gradient(135deg,{{colors.primary}},{{colors.accent}},{{colors.primary}});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background-size:200% 200%;animation:gradientShift 4s ease infinite}
.role{color:{{colors.accent}};font-size:1rem;font-weight:500;margin:0.5rem 0;opacity:0.9;letter-spacing:0.1em}
.bio{color:rgba(255,255,255,0.6);font-size:0.95rem;max-width:550px;margin:0.75rem auto;line-height:1.7}
.glow-line{width:60px;height:2px;background:linear-gradient(90deg,transparent,{{colors.primary}},{{colors.accent}},transparent);margin:1rem auto;border-radius:2px}
.socials{display:flex;justify-content:center;gap:0.75rem;margin:1.5rem 0;flex-wrap:wrap}
.socials a{width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.7);text-decoration:none;font-size:1rem;transition:all 0.3s;position:relative}
.socials a:hover{background:{{colors.primary}}22;border-color:{{colors.primary}};color:{{colors.primary}};box-shadow:0 0 20px {{colors.primary}}33;transform:translateY(-3px)}
.section-card{background:rgba(255,255,255,0.03);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.06);border-radius:1.25rem;padding:2rem;margin-bottom:1.5rem;transition:all 0.3s}
.section-card:hover{border-color:{{colors.primary}}33;box-shadow:0 0 30px {{colors.primary}}11}
.section-title{font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;color:{{colors.primary}};margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.4rem 0.875rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:0.5rem;font-size:0.8125rem;color:rgba(255,255,255,0.7);transition:all 0.2s;display:inline-flex;align-items:center;gap:0.375rem}
.skill-tag:hover{border-color:{{colors.accent}}66;color:{{colors.accent}};box-shadow:0 0 12px {{colors.accent}}22}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}
.project-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:1rem;padding:1.25rem;transition:all 0.3s;position:relative;overflow:hidden}
.project-item::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,{{colors.primary}},{{colors.accent}},transparent);opacity:0;transition:opacity 0.3s}
.project-item:hover::before{opacity:1}
.project-item:hover{border-color:{{colors.primary}}44;transform:translateY(-2px)}
.project-item h3{font-size:1rem;font-weight:600;color:#e0e0e0;margin-bottom:0.375rem}
.project-item p{font-size:0.8125rem;color:rgba(255,255,255,0.5);line-height:1.5;margin-bottom:0.625rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-tags span{font-size:0.65rem;padding:0.125rem 0.5rem;background:rgba(255,255,255,0.04);border-radius:9999px;color:rgba(255,255,255,0.4)}
.project-link{display:inline-flex;align-items:center;gap:0.375rem;color:{{colors.primary}};font-size:0.8rem;text-decoration:none;font-weight:500;margin-top:0.5rem;transition:gap 0.2s}
.project-link:hover{gap:0.75rem}
.metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:0.75rem;margin-top:1rem}
.metric{text-align:center;padding:1rem;background:rgba(255,255,255,0.03);border-radius:0.75rem;border:1px solid rgba(255,255,255,0.04)}
.metric-num{font-size:1.5rem;font-weight:700;background:linear-gradient(135deg,{{colors.primary}},{{colors.accent}});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Space Grotesk',sans-serif}
.metric-label{font-size:0.7rem;color:rgba(255,255,255,0.4);margin-top:0.125rem}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:{{colors.primary}};text-decoration:none;font-size:0.85rem;font-weight:500;padding:0.5rem 1.25rem;border:1px solid {{colors.primary}}44;border-radius:9999px;transition:all 0.2s}
.cv-link:hover{background:{{colors.primary}}11;border-color:{{colors.primary}};box-shadow:0 0 15px {{colors.primary}}22}
footer{text-align:center;padding:2rem;color:rgba(255,255,255,0.25);font-size:0.75rem;border-top:1px solid rgba(255,255,255,0.04);margin-top:2rem}
.typing-wrapper{display:inline-block;overflow:hidden;white-space:nowrap;border-right:2px solid {{colors.accent}};animation:typing 3s steps(30) 1s forwards,blinkCaret 0.75s step-end infinite;max-width:0;animation-fill-mode:forwards}
@keyframes typing{to{max-width:30ch}}@keyframes blinkCaret{50%{border-color:transparent}}
@media(max-width:640px){h1{font-size:2rem}.content{padding:2rem 1rem}.projects-grid{grid-template-columns:1fr}}
</style></head>
<body>
<div class="bg-pattern"></div>
<div class="content">
  <header{{#if animationsEnabled}} data-aos="fade-down"{{/if}}>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    <div class="glow-line"></div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    <div class="bio" style="font-size:0.85rem;opacity:0.5">
      {{#if location}}<i class="fas fa-location-dot"></i> {{location}}{{/if}}
      {{#if email}} &nbsp;·&nbsp; <i class="fas fa-envelope"></i> {{email}}{{/if}}
    </div>
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank" rel="noopener"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> Download CV</a>{{/if}}
  </header>
  {{#if metrics}}<div class="metrics">{{#each metrics}}<div class="metric"><div class="metric-num">{{this.value}}</div><div class="metric-label">{{this.label}}</div></div>{{/each}}</div>{{/if}}
  <section class="section-card"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}>
    <div class="section-title"><span>✦</span> Neural Skills Matrix</div>
    <div class="skills">{{#each skills}}<span class="skill-tag">{{#if this.icon}}<i class="{{this.icon}}"></i>{{/if}} {{this.name}}</span>{{/each}}</div>
  </section>
  <section class="section-card"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}>
    <div class="section-title"><span>◆</span> Deployed Projects</div>
    <div class="projects-grid">{{#each projects}}<div class="project-item"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank" rel="noopener" class="project-link">View Project →</a>{{/if}}</div>{{/each}}</div>
  </section>
  <footer>© {{year}} {{name}} · AI Theme · Powered by Innovation</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },

  // =============================================
  // 10. Developer Dashboard — Sidebar, widgets, stats
  // =============================================
  {
    id: 10,
    nameKey: 'theme.10',
    icon: 'fa-solid fa-chart-simple',
    description: 'Data-dense dashboard layout with sidebar navigation, stat widgets, and timeline',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} | Dashboard</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:{{colors.primary}};--accent:{{colors.accent}};--bg:{{colors.bg}};--surface:{{colors.surface}};--fg:{{colors.text}};--muted:{{colors.muted}};--border:{{colors.border}}}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);min-height:100vh;display:flex}
.sidebar{width:260px;min-height:100vh;background:var(--surface);border-right:1px solid var(--border);padding:2rem 1.25rem;position:fixed;left:0;top:0;display:flex;flex-direction:column;z-index:10}
.main{margin-left:260px;flex:1;padding:2rem}
.sidebar-profile{text-align:center;padding-bottom:1.5rem;border-bottom:1px solid var(--border);margin-bottom:1.5rem}
.profile-img{width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--primary);margin-bottom:0.75rem}
.sidebar h1{font-size:1.125rem;font-weight:700}
.sidebar .role{color:var(--accent);font-size:0.8rem;font-weight:500;margin:0.25rem 0}
.sidebar .bio{font-size:0.75rem;color:#64748B;margin:0.5rem 0;line-height:1.4}
.sidebar .contact{font-size:0.75rem;color:#64748B;margin:0.25rem 0;display:flex;align-items:center;gap:0.375rem;justify-content:center}
.sidebar .contact i{color:var(--accent);width:1rem}
.socials{display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;padding:1rem 0;border-bottom:1px solid var(--border);margin-bottom:1rem}
.socials a{width:2rem;height:2rem;border-radius:0.5rem;background:var(--muted);display:flex;align-items:center;justify-content:center;color:var(--fg);text-decoration:none;font-size:0.8125rem;transition:all 0.2s}
.socials a:hover{background:var(--primary);color:white}
.sidebar-nav{display:flex;flex-direction:column;gap:0.25rem;margin-top:auto;padding-top:1rem;border-top:1px solid var(--border)}
.sidebar-nav a{font-size:0.8125rem;color:#64748B;text-decoration:none;padding:0.5rem 0.75rem;border-radius:0.5rem;transition:all 0.15s;display:flex;align-items:center;gap:0.5rem}
.sidebar-nav a:hover{background:var(--muted);color:var(--fg)}
.cv-link{display:inline-flex;align-items:center;gap:0.375rem;font-size:0.75rem;color:var(--accent);text-decoration:none;margin-top:0.5rem}
.cv-link:hover{text-decoration:underline}
.header-bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid var(--border)}
.header-bar h2{font-size:1.25rem;font-weight:700}
.header-bar .badge{font-size:0.7rem;padding:0.25rem 0.75rem;background:var(--muted);border-radius:9999px;color:#64748B}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;margin-bottom:2rem}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:0.75rem;padding:1.25rem;display:flex;align-items:center;gap:1rem}
.stat-icon{width:2.5rem;height:2.5rem;border-radius:0.75rem;display:flex;align-items:center;justify-content:center;font-size:1.125rem;flex-shrink:0}
.stat-icon.primary{background:var(--primary);color:white}
.stat-icon.accent{background:var(--accent);color:white}
.stat-icon.muted{background:var(--muted);color:var(--fg)}
.stat-content .stat-num{font-size:1.5rem;font-weight:700;font-family:'Space Grotesk',sans-serif}
.stat-content .stat-label{font-size:0.75rem;color:#64748B;margin-top:0.125rem}
.section-title{font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#64748B;margin-bottom:1rem}
.skills{display:flex;flex-wrap:wrap;gap:0.375rem;margin-bottom:2rem}
.skill-chip{padding:0.3rem 0.75rem;background:var(--muted);border-radius:0.375rem;font-size:0.75rem;font-weight:500;transition:all 0.15s;display:inline-flex;align-items:center;gap:0.25rem}
.skill-chip:hover{background:var(--primary);color:white}
.content-grid{display:grid;grid-template-columns:2fr 1fr;gap:1.5rem}
.project-list{display:flex;flex-direction:column;gap:0.75rem}
.dashboard-card{background:var(--surface);border:1px solid var(--border);border-radius:0.75rem;padding:1.25rem}
.dashboard-card h3{font-size:0.95rem;font-weight:600;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem}
.dashboard-card h3 .count{font-size:0.7rem;background:var(--muted);padding:0.125rem 0.5rem;border-radius:9999px;color:#64748B;font-weight:400}
.project-entry{padding:0.75rem 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:start;gap:0.75rem}
.project-entry:last-child{border-bottom:none}
.project-entry .proj-info{flex:1}
.project-entry .proj-name{font-weight:600;font-size:0.875rem;margin-bottom:0.125rem}
.project-entry .proj-desc{font-size:0.75rem;color:#64748B;line-height:1.4}
.project-entry .proj-tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.375rem}
.project-entry .proj-tags span{font-size:0.65rem;padding:0.1rem 0.375rem;background:var(--muted);border-radius:9999px}
.project-entry .proj-link{font-size:0.75rem;color:var(--accent);text-decoration:none;white-space:nowrap;margin-top:0.25rem;display:inline-block}
.project-entry .proj-link:hover{text-decoration:underline}
.activity-timeline{position:relative;padding-left:1.25rem}
.activity-timeline::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--border)}
.activity-item{position:relative;padding-bottom:1rem}
.activity-item:last-child{padding-bottom:0}
.activity-item::before{content:'';position:absolute;left:-1.35rem;top:0.375rem;width:0.5rem;height:0.5rem;border-radius:50%;background:var(--primary);border:2px solid var(--bg)}
.activity-item .act-title{font-size:0.8125rem;font-weight:500}
.activity-item .act-meta{font-size:0.7rem;color:#64748B;margin-top:0.125rem}
footer.dash-footer{grid-column:1/-1;text-align:center;padding:1.5rem 0 0;color:#94A3B8;font-size:0.75rem;border-top:1px solid var(--border);margin-top:1rem}
@media(max-width:768px){.sidebar{width:100%;position:relative;min-height:auto;padding:1rem}.main{margin-left:0}.content-grid{grid-template-columns:1fr}.stats-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:480px){.stats-grid{grid-template-columns:1fr}}
</style></head>
<body>
<div class="sidebar">
  <div class="sidebar-profile">
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="contact"><i class="fas fa-location-dot"></i> {{location}}</p>{{/if}}
    {{#if email}}<p class="contact"><i class="fas fa-envelope"></i> {{email}}</p>{{/if}}
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> CV</a>{{/if}}
  </div>
  <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank" rel="noopener"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  <div class="sidebar-nav">
    <a href="#"><i class="fas fa-chart-pie"></i> Dashboard</a>
    <a href="#"><i class="fas fa-code"></i> Repositories</a>
    <a href="#"><i class="fas fa-envelope"></i> Contact</a>
  </div>
</div>
<div class="main">
  <div class="header-bar">
    <div>
      <h2>Dashboard</h2>
      <p style="font-size:0.8rem;color:#64748B;margin-top:0.25rem">Developer Overview · {{year}}</p>
    </div>
    <span class="badge"><i class="fas fa-circle" style="font-size:0.5rem;color:#22C55E;margin-right:0.375rem"></i>Active</span>
  </div>

  {{#if metrics.length}}
  <div class="stats-grid">
    {{#each metrics}}
    <div class="stat-card"{{#if ../animationsEnabled}} data-aos="fade-up"{{/if}}>
      <div class="stat-icon {{#if @first}}primary{{else}}{{#if @last}}muted{{else}}accent{{/if}}{{/if}}">
        {{#if @first}}<i class="fas fa-code-branch"></i>{{else}}{{#if @last}}<i class="fas fa-code-fork"></i>{{else}}<i class="fas fa-star"></i>{{/if}}{{/if}}
      </div>
      <div class="stat-content">
        <div class="stat-num">{{this.value}}</div>
        <div class="stat-label">{{this.label}}</div>
      </div>
    </div>
    {{/each}}
  </div>
  {{/if}}

  <div class="section-title">Skills</div>
  <div class="skills">{{#each skills}}<span class="skill-chip">{{#if this.icon}}<i class="{{this.icon}}"></i>{{/if}} {{this.name}}</span>{{/each}}</div>

  <div class="content-grid">
    <div>
      <div class="section-title">Recent Projects</div>
      <div class="project-list">
        <div class="dashboard-card">
          {{#if projects.length}}
          {{#each projects}}
          <div class="project-entry">
            <div class="proj-info">
              <div class="proj-name">{{this.name}}</div>
              <div class="proj-desc">{{this.desc}}</div>
              <div class="proj-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>
            </div>
            {{#if this.url}}<a href="{{this.url}}" target="_blank" rel="noopener" class="proj-link"><i class="fas fa-external-link-alt"></i></a>{{/if}}
          </div>
          {{/each}}
          {{else}}
          <p style="color:#64748B;font-size:0.875rem;text-align:center;padding:1rem">No projects yet</p>
          {{/if}}
        </div>
      </div>
    </div>
    <div>
      <div class="section-title">Activity</div>
      <div class="dashboard-card">
        <div class="activity-timeline">
          <div class="activity-item">
            <div class="act-title">Profile Created</div>
            <div class="act-meta"><i class="fas fa-calendar" style="margin-right:0.25rem"></i>{{year}}</div>
          </div>
          {{#each projects}}
          <div class="activity-item">
            <div class="act-title">Project: {{this.name}}</div>
            <div class="act-meta">{{#if this.tags}}{{this.tags.[0]}}{{/if}}</div>
          </div>
          {{/each}}
          <div class="activity-item">
            <div class="act-title">Dashboard Active</div>
            <div class="act-meta">🟢 Online</div>
          </div>
        </div>
      </div>
    </div>
    <footer class="dash-footer">&copy; {{year}} {{name}} · Developer Dashboard</footer>
  </div>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  }
];

if (typeof I18N !== 'undefined') {
  I18N.strings['theme.8'] = { en: 'Dark Modern', ar: 'داكن حديث' };
  I18N.strings['theme.9'] = { en: 'AI Theme', ar: 'ذكاء اصطناعي' };
  I18N.strings['theme.10'] = { en: 'Developer Dashboard', ar: 'لوحة المطور' };
}

// Helper: get theme by ID
function getTheme(id) {
  return THEMES.find(t => t.id === id) || THEMES[0];
}
