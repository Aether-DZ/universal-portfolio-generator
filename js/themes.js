const THEMES = [
  {
    id: 1,
    nameKey: 'theme.1',
    icon: 'fas fa-atom',
    description: 'Pixel-perfect Aether — particles, dark/light, monochrome + green',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.title}}</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Righteous|Ubuntu+Mono&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#000;--fg:#fff;--fg2:rgba(255,255,255,0.55);--fg3:rgba(255,255,255,0.3);--accent:#00ffaa;--social:rgba(255,255,255,0.65);--card-bg:rgba(255,255,255,0.04);--border:rgba(255,255,255,0.06)}
.light{--bg:#f5f5f5;--fg:#111;--fg2:rgba(0,0,0,0.55);--fg3:rgba(0,0,0,0.3);--accent:#00cc88;--social:rgba(0,0,0,0.6);--card-bg:rgba(255,255,255,0.8);--border:rgba(0,0,0,0.08)}
body{background:var(--bg);color:var(--fg);font-family:'Ubuntu Mono',monospace;overflow-x:hidden;transition:background .3s,color .3s}
#particles-js{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none}
.theme-btn{position:fixed;top:1.2rem;right:1.2rem;z-index:100;width:2.5rem;height:2.5rem;border-radius:50%;border:1px solid var(--border);background:var(--card-bg);color:var(--fg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:all .3s;backdrop-filter:blur(8px)}
.theme-btn:hover{color:var(--accent);border-color:var(--accent)}
.center{position:relative;z-index:1;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:4rem 1.5rem}
.inner{width:100%;max-width:1100px;display:flex;flex-wrap:wrap;align-items:center;gap:2rem}
.profile-col{flex:0 0 auto;text-align:center}
.profile-img{width:min(220px,60vw);height:min(220px,60vw);border-radius:50%;object-fit:cover;border:3px solid var(--border);max-width:100%;aspect-ratio:1}
.text-col{flex:1;min-width:280px}
.name{font-family:'Righteous',cursive;font-size:clamp(2.5rem,6vw,5rem);color:var(--fg);line-height:1.1;margin-bottom:0}
.tag{font-family:'Ubuntu Mono',monospace;font-size:clamp(1rem,2.2vw,2rem);color:var(--fg3);margin-bottom:0.2rem}
.role{font-family:'Ubuntu Mono',monospace;font-size:clamp(0.85rem,1.4vw,1.2rem);color:var(--fg2);margin-bottom:1rem}
.socials{display:flex;flex-wrap:wrap;gap:0.4rem 0.8rem}
.socials a{font-size:clamp(1.3rem,2.8vw,2.2rem);color:var(--social);transition:all .3s;text-decoration:none}
.socials a:hover{color:var(--accent);transform:translateY(-3px)}
.section{padding:3rem 1.5rem;position:relative;z-index:1;max-width:960px;margin:0 auto}
.section h2{font-family:'Righteous',cursive;font-size:1.6rem;margin-bottom:1.5rem;color:var(--accent)}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.4rem 1rem;border:1px solid var(--border);border-radius:4px;font-size:0.85rem;color:var(--fg2);font-family:'Ubuntu Mono',monospace;transition:all .3s}
.skill-tag:hover{border-color:var(--accent);color:var(--accent)}
.projects{display:flex;flex-direction:column;gap:0.75rem}
.project-item{padding:1.25rem;border:1px solid var(--border);border-radius:8px;transition:all .3s}
.project-item:hover{border-color:var(--accent)}
.project-item h3{font-family:'Righteous',cursive;font-size:1.1rem;color:var(--fg);margin-bottom:0.3rem}
.project-item p{color:var(--fg2);font-size:0.85rem;margin-bottom:0.5rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-tags span{font-size:0.7rem;padding:0.15rem 0.5rem;border:1px solid var(--border);border-radius:3px;color:var(--fg3)}
.project-item a{color:var(--accent);font-size:0.8rem;text-decoration:none;display:inline-block;margin-top:0.4rem}
.project-item a:hover{text-decoration:underline}
.education{display:flex;flex-direction:column;gap:0.6rem}
.edu-item{border-left:2px solid var(--accent);padding-left:1rem}
.edu-item h4{font-family:'Righteous',cursive;font-size:1rem;color:var(--fg)}
.edu-item .meta{color:var(--fg2);font-size:0.8rem}
.bugbounty{display:flex;flex-wrap:wrap;gap:0.5rem}
.bb-item{display:flex;align-items:center;gap:0.5rem;padding:0.4rem 0.8rem;border:1px solid var(--border);border-radius:4px;color:var(--fg2);font-size:0.85rem}
.bb-item i{color:var(--accent)}
footer{padding:2rem;text-align:center;position:relative;z-index:1;color:var(--fg3);font-size:0.75rem;border-top:1px solid var(--border)}
.email-tip{position:fixed;right:0;bottom:0;z-index:100;font-family:'Ubuntu Mono',monospace;background:var(--card-bg);color:var(--fg2);padding:8px 14px;border:1px solid var(--border);border-radius:4px;cursor:pointer;transition:all .3s;font-size:0.85rem;backdrop-filter:blur(8px)}
.email-tip:hover{color:var(--accent);border-color:var(--accent)}
[dir="rtl"] .socials{flex-direction:row-reverse}
[dir="rtl"] .name{text-align:right}
[dir="rtl"] .tag{text-align:right}
[dir="rtl"] .role{text-align:right}
[dir="rtl"] .section h2{text-align:right}
[dir="rtl"] .edu-item{border-left:none;border-right:2px solid var(--accent);padding-left:0;padding-right:1rem;text-align:right}
[dir="rtl"] .project-item{text-align:right}
[dir="rtl"] .email-tip{right:auto;left:0}
[dir="rtl"] .profile-col{order:1}
@media(max-width:785px){.profile-img{width:160px;height:160px}.text-col{text-align:center}.socials{justify-content:center}}
@media(max-width:640px){.profile-img{width:140px;height:140px}.inner{flex-direction:column;text-align:center}.socials{justify-content:center}.center{padding:2rem 1rem}.section{padding:2rem 1rem}footer{padding:1.5rem 1rem}}
</style>
</head>
<body>
<button class="theme-btn" id="darkToggle" aria-label="Toggle theme"><i class="fas fa-sun"></i></button>
<div id="particles-js"></div>
<div class="center">
  <div class="inner">
    <div class="profile-col">
      {{#if photo}}<img src="{{photo}}" alt="{{name}}" class="profile-img">{{/if}}
    </div>
    <div class="text-col">
      <p class="name">{{name}}</p>
      <p class="tag">{{slug}}</p>
      <p class="role">{{role}}</p>
      {{#if bio}}<p class="role" style="color:var(--fg2);margin-bottom:0.5rem">{{bio}}</p>{{/if}}
      <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank" rel="noopener"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    </div>
  </div>
</div>

{{#if skills.length}}<div class="section"><h2># {{sectionTitles.skills}}</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}

{{#if educationArray.length}}<div class="section"><h2># {{sectionTitles.education}}</h2><div class="education">{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div></div>{{/if}}

{{#if projects.length}}<div class="section"><h2># {{sectionTitles.projects}}</h2><div class="projects">{{#each projects}}<div class="project-item"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank">{{#if (eq dir "rtl")}}{{portfolioTexts.viewProject}} ←{{else}}→ {{portfolioTexts.viewProject}}{{/if}}</a>{{/if}}</div>{{/each}}</div></div>{{/if}}

{{#if bugbountyArray.length}}<div class="section"><h2># {{sectionTitles.bugbounty}}</h2><div class="bugbounty">{{#each bugbountyArray}}<div class="bb-item"><i class="fas fa-shield-halved"></i> {{this.platform}} <span style="color:var(--fg3)">/</span> {{this.username}}</div>{{/each}}</div></div>{{/if}}

{{#if email}}<details class="email-tip"><summary>{{email}}</summary></details>{{/if}}
<footer>{{name}} · {{year}}</footer>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
particlesJS('particles-js',{particles:{number:{value:70,density:{enable:true,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:0.6,random:true,anim:{enable:true,speed:0.5,opacity_min:0.2}},size:{value:6,random:true},line_linked:{enable:true,distance:180,color:"#ffffff",opacity:0.5,width:3},move:{enable:true,speed:3,direction:"none",random:false,straight:false,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:false},resize:true},modes:{grab:{distance:260,line_linked:{opacity:1}}}},retina_detect:true});
(()=>{const b=document.getElementById('darkToggle'),i=b.querySelector('i');const t=()=>{document.documentElement.classList.toggle('light');const d=document.documentElement.classList.contains('light');i.className=d?'fas fa-moon':'fas fa-sun';localStorage.setItem('aether-theme',d?'light':'dark')};if(localStorage.getItem('aether-theme')==='light')t();b.addEventListener('click',t)})()
</script>
</body></html>`)(data)
  },
  {
    id: 2,
    nameKey: 'theme.2',
    icon: 'fas fa-terminal',
    description: 'Terminal-inspired with particle network, green neon accents',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.title}}</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#c9d1d9;font-family:'JetBrains Mono',monospace;overflow-x:hidden}
#particles-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.7}
.content{position:relative;z-index:1;max-width:900px;margin:0 auto;padding:3rem 1.5rem}
.term-line{color:rgba(255,255,255,0.2);font-size:0.75rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.04)}
.term-line span{color:#00ff88}
header{text-align:center;padding:2rem 0}
.profile-img{width:100px;height:100px;border-radius:50%;object-fit:cover;border:2px solid rgba(0,255,136,0.2);box-shadow:0 0 30px rgba(0,255,136,0.08);margin-bottom:1rem;max-width:100%;aspect-ratio:1}
h1{font-size:2rem;font-weight:500;color:#00ff88;text-shadow:0 0 20px rgba(0,255,136,0.15);letter-spacing:-0.02em}
.role{color:#00ff88;opacity:0.7;font-size:0.85rem;margin:0.5rem 0;letter-spacing:0.15em;text-transform:uppercase}
.bio{color:rgba(255,255,255,0.4);font-size:0.85rem;max-width:600px;margin:0.75rem auto;line-height:1.7}
.socials{display:flex;justify-content:center;gap:0.625rem;margin:1.25rem 0;flex-wrap:wrap}
.socials a{color:rgba(255,255,255,0.35);font-size:1.25rem;transition:all 0.25s;text-decoration:none;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.06);border-radius:6px}
.socials a:hover{color:#00ff88;border-color:rgba(0,255,136,0.3);background:rgba(0,255,136,0.05);transform:translateY(-2px)}
.section{padding:2rem 0}
.section-header{display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem}
.section-header .hash{color:#00ff88;font-size:0.85rem;opacity:0.5}
.section-header h2{font-size:0.85rem;font-weight:400;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:0.12em}
.section-header .line{flex:1;height:1px;background:linear-gradient(90deg,rgba(0,255,136,0.15),transparent)}
.skills{display:flex;flex-wrap:wrap;gap:0.4rem}
.skill-tag{padding:0.3rem 0.7rem;border:1px solid rgba(255,255,255,0.06);border-radius:4px;font-size:0.75rem;color:rgba(255,255,255,0.5);transition:all 0.2s}
.skill-tag:hover{border-color:rgba(0,255,136,0.25);color:#00ff88}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:0.75rem}
.project-card{border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:1.25rem;background:rgba(255,255,255,0.015);transition:all 0.25s}
.project-card:hover{border-color:rgba(0,255,136,0.2);background:rgba(0,255,136,0.02)}
.project-card h3{color:#00ff88;font-size:0.9rem;font-weight:500;margin-bottom:0.35rem}
.project-card h3::before{content:'$ ';opacity:0.4}
.project-card p{color:rgba(255,255,255,0.4);font-size:0.78rem;margin-bottom:0.5rem;line-height:1.5}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-bottom:0.5rem}
.project-tags span{font-size:0.65rem;padding:0.15rem 0.4rem;border:1px solid rgba(255,255,255,0.05);border-radius:3px;color:rgba(255,255,255,0.3)}
.project-link{color:rgba(0,255,136,0.5);font-size:0.75rem;text-decoration:none;display:inline-flex;align-items:center;gap:0.375rem;transition:color 0.2s;margin-top:0.3rem}
.project-link:hover{color:#00ff88}
.edu-item{border-left:2px solid rgba(0,255,136,0.3);padding-left:0.75rem;margin-bottom:0.5rem}
.edu-item h4{color:#00ff88;font-size:0.85rem}
.edu-item .meta{color:rgba(255,255,255,0.3);font-size:0.7rem}
.bb-list{display:flex;flex-wrap:wrap;gap:0.5rem}
.bb-item{font-size:0.75rem;padding:0.25rem 0.6rem;border:1px solid rgba(255,255,255,0.06);border-radius:4px;color:rgba(255,255,255,0.4);display:flex;align-items:center;gap:0.4rem}
.bb-item i{color:#00ff88}
@media(max-width:480px){.profile-img{width:72px;height:72px}}
[dir="rtl"] .term-line{text-align:right;direction:rtl}
[dir="rtl"] .section-header{flex-direction:row-reverse}
[dir="rtl"] .section-header .line{background:linear-gradient(270deg,rgba(0,255,136,0.15),transparent)}
[dir="rtl"] .edu-item{border-left:none;border-right:2px solid rgba(0,255,136,0.3);padding-left:0;padding-right:0.75rem;text-align:right}
[dir="rtl"] .project-card{text-align:right}
[dir="rtl"] .bio{text-align:right}
[dir="rtl"] .socials{flex-direction:row-reverse}
footer{border-top:1px solid rgba(255,255,255,0.04);padding:1.5rem 0;margin-top:2rem;text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.15)}
@media(max-width:640px){h1{font-size:1.5rem}.projects-grid{grid-template-columns:1fr}.content{padding:2rem 1rem}.section{padding:1.5rem 0}}
</style></head>
<body>
<canvas id="particles-canvas"></canvas>
<div class="content">
  <div class="term-line"><span>visitor</span>@<span>{{slug}}</span>:~$ <span>cat</span> profile.txt</div>
  <header>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">/* {{bio}} */</p>{{/if}}
    {{#if email}}<p class="bio">// {{email}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  </header>
  {{#if skills.length}}<div class="section"><div class="section-header"><span class="hash">##</span> <h2>{{sectionTitles.skills}}</h2> <span class="line"></span></div><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  {{#if educationArray.length}}<div class="section"><div class="section-header"><span class="hash">##</span> <h2>{{sectionTitles.education}}</h2> <span class="line"></span></div>{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  {{#if projects.length}}<div class="section"><div class="section-header"><span class="hash">##</span> <h2>{{sectionTitles.projects}}</h2> <span class="line"></span></div><div class="projects-grid">{{#each projects}}<div class="project-card"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>[{{this}}]</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank" class="project-link">{{portfolioTexts.viewProject}}</a>{{/if}}</div>{{/each}}</div></div>{{/if}}
  {{#if bugbountyArray.length}}<div class="section"><div class="section-header"><span class="hash">##</span> <h2>{{sectionTitles.bugbounty}}</h2> <span class="line"></span></div><div class="bb-list">{{#each bugbountyArray}}<div class="bb-item"><i class="fas fa-shield-halved"></i> {{this.platform}} / {{this.username}}</div>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
<script>
const c=document.getElementById('particles-canvas'),ctx=c.getContext('2d');
let w,h,mouse={x:0,y:0};
function resize(){w=c.width=innerWidth;h=c.height=innerHeight}
resize();window.addEventListener('resize',resize);
document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
const particles=Array.from({length:60},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4,size:Math.random()*2+1}));
function anim(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const dx=mouse.x-p.x,dy=mouse.y-p.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle='rgba(0,255,136,'+(0.15-dist/800)+')';ctx.lineWidth=0.5;ctx.stroke()}ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle='rgba(0,255,136,0.5)';ctx.fill()});requestAnimationFrame(anim)}
anim()
</script>
</body></html>`)(data)
  },
  {
    id: 3,
    nameKey: 'theme.3',
    icon: 'fas fa-pen-nib',
    description: 'Clean minimal typography with dark/light toggle, elegant whitespace',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{role}}</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#FAFAFA;--fg:#09090B;--muted:#E8ECF0;--accent:{{colors.accent}};--card:#fff;--border:#E4E4E7}
.dark{--bg:#09090B;--fg:#FAFAFA;--muted:#27272A;--card:#18181B;--border:#3F3F46}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7;transition:background 0.3s,color 0.3s}
.container{max-width:720px;margin:0 auto;padding:2rem 1.5rem}
.theme-btn{position:fixed;top:1rem;right:1rem;z-index:10;width:2.5rem;height:2.5rem;border-radius:50%;border:1px solid var(--border);background:var(--card);color:var(--fg);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.125rem;transition:all 0.2s}
.theme-btn:hover{background:var(--muted)}
header{padding:4rem 0 2rem;text-align:center}
.profile-img{width:min(96px,30vw);height:min(96px,30vw);border-radius:50%;object-fit:cover;margin-bottom:1rem;max-width:100%;aspect-ratio:1}
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
.edu-item{margin-bottom:0.5rem}
.edu-item h4{font-size:0.95rem;font-weight:600}
.edu-item .meta{font-size:0.8rem;color:#64748B}
.bb-list{display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.3rem}
.bb-item{font-size:0.8rem;padding:0.2rem 0.6rem;background:var(--muted);border-radius:9999px;display:flex;align-items:center;gap:0.3rem}
footer{padding:2rem;text-align:center;color:#94A3B8;font-size:0.8125rem;border-top:1px solid var(--border);margin-top:2rem}
[dir="rtl"] .container{text-align:right}
[dir="rtl"] header{text-align:right}
[dir="rtl"] .section h2{text-align:right}
[dir="rtl"] .socials{flex-direction:row-reverse;justify-content:flex-start}
[dir="rtl"] .edu-item{text-align:right}
[dir="rtl"] .project-entry{text-align:right}
[dir="rtl"] .project-entry .tags{justify-content:flex-start}
[dir="rtl"] .bb-list{justify-content:flex-start}
@media(max-width:640px){h1{font-size:1.5rem}.container{padding:1.5rem 1rem}header{padding:2rem 0 1.5rem}}
</style></head>
<body>
<button class="theme-btn" id="darkToggle" aria-label="Toggle theme"><i class="fas fa-moon"></i></button>
<div class="container">
  <header{{#if animationsEnabled}} data-aos="fade-down"{{/if}}>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio" style="color:#94A3B8;font-size:0.85rem">{{location}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  </header>
  {{#if educationArray.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><h2>{{sectionTitles.education}}</h2>{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  {{#if skills.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><h2>{{sectionTitles.skills}}</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  {{#if projects.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><h2>{{sectionTitles.projects}}</h2><div class="projects-list">{{#each projects}}<div class="project-entry"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank">{{#if (eq dir "rtl")}}{{portfolioTexts.view}} ←{{else}}→ {{portfolioTexts.view}}{{/if}}</a>{{/if}}</div>{{/each}}</div></div>{{/if}}
  {{#if bugbountyArray.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><h2>{{sectionTitles.bugbounty}}</h2><div class="bb-list">{{#each bugbountyArray}}<div class="bb-item"><i class="fas fa-shield-halved" style="color:var(--accent)"></i> {{this.platform}} · {{this.username}}</div>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
<script>(()=>{const b=document.getElementById('darkToggle'),i=b.querySelector('i');const t=()=>{document.documentElement.classList.toggle('dark');const d=document.documentElement.classList.contains('dark');i.className=d?'fas fa-sun':'fas fa-moon';localStorage.setItem('theme',d?'dark':'light')};if(localStorage.getItem('theme')==='dark')t();b.addEventListener('click',t)})()</script>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },
  {
    id: 4,
    nameKey: 'theme.4',
    icon: 'fas fa-table-cells-large',
    description: 'Bento Grid — modern card-based visual layout',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.title}}</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:{{colors.bg}};--fg:#09090B;--card:#fff;--muted:#F0F0F0;--accent:{{colors.accent}};--radius:1.5rem}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);padding:1rem;min-height:100vh}
.bento{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;padding:1rem}
.card{background:var(--card);border-radius:var(--radius);padding:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:transform 0.2s,box-shadow 0.2s}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,0,0,0.06)}
.card-wide{grid-column:span 2}.card-full{grid-column:1/-1}
.profile-section{display:flex;flex-direction:column;align-items:center;text-align:center;padding:2rem 1.5rem;grid-column:1;grid-row:1/3}
.profile-img{width:clamp(64px,18vw,80px);height:clamp(64px,18vw,80px);border-radius:50%;object-fit:cover;margin-bottom:1rem;border:3px solid var(--accent);max-width:100%;aspect-ratio:1}
h1{font-family:'Space Grotesk',sans-serif;font-size:1.5rem;font-weight:700}
.role{color:var(--accent);font-size:0.85rem;font-weight:500;margin:0.25rem 0}
.bio{color:#64748B;font-size:0.8rem;margin:0.5rem 0}
.socials{display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;justify-content:center}
.socials a{width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--muted);color:var(--fg);text-decoration:none;font-size:0.875rem;transition:all 0.2s}
.socials a:hover{background:var(--accent);color:#fff}
h2{font-family:'Space Grotesk',sans-serif;font-size:1rem;font-weight:600;margin-bottom:1rem}
.skills-bento{display:flex;flex-wrap:wrap;gap:0.375rem}
.skill-chip{padding:0.25rem 0.625rem;background:var(--muted);border-radius:9999px;font-size:0.75rem;font-weight:500}
.edu-item{margin-bottom:0.5rem}
.edu-item h4{font-size:0.85rem;font-weight:600}
.edu-item .meta{font-size:0.7rem;color:#64748B}
.project-bento{display:flex;flex-direction:column;gap:0.75rem}
.project-mini{border-bottom:1px solid #F0F0F0;padding-bottom:0.75rem}
.project-mini:last-child{border:none}
.project-mini h3{font-size:0.9rem;font-weight:600;margin-bottom:0.125rem}
.project-mini p{font-size:0.75rem;color:#64748B}
.project-mini .tags{display:flex;flex-wrap:wrap;gap:0.25rem;margin-top:0.25rem}
.project-mini .tags span{font-size:0.65rem;padding:0.125rem 0.375rem;background:var(--muted);border-radius:9999px}
.project-mini a{color:var(--accent);font-size:0.75rem;text-decoration:none;font-weight:500}
.bb-list{display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:0.3rem}
.bb-item{font-size:0.75rem;padding:0.2rem 0.5rem;background:var(--muted);border-radius:9999px;display:flex;align-items:center;gap:0.3rem}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-size:0.85rem;font-weight:500;margin-top:1rem}
footer{grid-column:1/-1;text-align:center;padding:1rem;color:#94A3B8;font-size:0.75rem;border-top:1px solid #F0F0F0}
[dir="rtl"] .bento{direction:rtl}
[dir="rtl"] .profile-section{text-align:right}
[dir="rtl"] .card h2{text-align:right}
[dir="rtl"] .socials{flex-direction:row-reverse}
[dir="rtl"] .project-mini{text-align:right}
[dir="rtl"] .bb-list{justify-content:flex-start}
@media(max-width:768px){.bento{grid-template-columns:1fr;padding:0.5rem;gap:0.75rem}.profile-section{grid-column:1;grid-row:auto}.card-wide{grid-column:1}.card{padding:1.25rem}}
</style></head>
<body>
<div class="bento">
  <div class="card profile-section">
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio">{{location}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  </div>
  <div class="card card-wide"><h2>{{sectionTitles.skills}}</h2><div class="skills-bento">{{#each skills}}<span class="skill-chip">{{this.name}}</span>{{/each}}</div></div>
  {{#if educationArray.length}}<div class="card"><h2>{{sectionTitles.education}}</h2>{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  <div class="card card-wide"><h2>{{sectionTitles.projects}}</h2><div class="project-bento">{{#each projects}}<div class="project-mini"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank">{{#if (eq dir "rtl")}}{{portfolioTexts.view}} ←{{else}}→ {{portfolioTexts.view}}{{/if}}</a>{{/if}}</div>{{/each}}</div></div>
  {{#if bugbountyArray.length}}<div class="card"><h2>{{sectionTitles.bugbounty}}</h2><div class="bb-list">{{#each bugbountyArray}}<span class="bb-item"><i class="fas fa-shield-halved" style="color:var(--accent)"></i> {{this.platform}} · {{this.username}}</span>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },
  {
    id: 5,
    nameKey: 'theme.5',
    icon: 'fas fa-glass-water',
    description: 'Glassmorphic — frosted glass over animated gradient',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.title}}</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:linear-gradient(135deg,{{colors.primary}} 0%,{{colors.accent}} 100%);font-family:'{{fontFamilyCss}}',sans-serif;display:flex;align-items:center;justify-content:center;padding:1rem;position:relative;overflow-x:hidden}
.bg-blob{position:fixed;border-radius:50%;filter:blur(80px);opacity:0.4;animation:float 20s ease-in-out infinite;pointer-events:none;z-index:0}
.blob1{width:400px;height:400px;background:#ff6b6b;top:-100px;left:-100px}
.blob2{width:350px;height:350px;background:#48dbfb;bottom:-80px;right:-80px;animation-delay:-7s}
.blob3{width:300px;height:300px;background:#ff9ff3;top:50%;left:50%;transform:translate(-50%,-50%);animation-delay:-14s}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-30px) scale(1.1)}66%{transform:translate(-20px,20px) scale(0.9)}}
.glass-container{position:relative;z-index:1;width:100%;max-width:820px}
.glass-card{background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:2rem;margin-bottom:1rem;transition:transform 0.3s}
.glass-card:hover{background:rgba(255,255,255,0.18);transform:translateY(-2px)}
.text-center{text-align:center}.profile-img{width:clamp(64px,20vw,88px);height:clamp(64px,20vw,88px);border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,0.3);margin-bottom:1rem;max-width:100%;aspect-ratio:1}
h1{color:#fff;font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;text-shadow:0 2px 10px rgba(0,0,0,0.1)}
.role{color:rgba(255,255,255,0.8);font-size:1rem;font-weight:500;margin:0.25rem 0}
.bio{color:rgba(255,255,255,0.7);font-size:0.9rem;max-width:500px;margin:0.5rem auto}
.socials{display:flex;justify-content:center;gap:0.75rem;margin:1rem 0;flex-wrap:wrap}
.socials a{width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;font-size:1rem;transition:all 0.2s;border:1px solid rgba(255,255,255,0.15)}
.socials a:hover{background:rgba(255,255,255,0.25);transform:scale(1.1)}
h2{color:#fff;font-size:1.125rem;font-weight:600;margin-bottom:1rem;font-family:'Space Grotesk',sans-serif}
.skills{display:flex;flex-wrap:wrap;gap:0.5rem}
.skill-tag{padding:0.35rem 0.875rem;background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:9999px;color:#fff;font-size:0.8125rem;border:1px solid rgba(255,255,255,0.1)}
.projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}
.project-item{padding:1.25rem;background:rgba(255,255,255,0.06);border-radius:1rem;border:1px solid rgba(255,255,255,0.1);transition:all 0.2s}
.project-item:hover{background:rgba(255,255,255,0.12)}
.project-item h3{color:#fff;font-size:0.95rem;font-weight:600;margin-bottom:0.25rem}
.project-item p{color:rgba(255,255,255,0.65);font-size:0.8rem;margin-bottom:0.5rem}
.project-item .tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-item .tags span{font-size:0.7rem;padding:0.125rem 0.5rem;background:rgba(255,255,255,0.1);border-radius:9999px;color:rgba(255,255,255,0.7)}
.project-item a{color:#fff;font-size:0.8rem;text-decoration:none;font-weight:500;opacity:0.7;transition:opacity 0.2s;display:inline-block;margin-top:0.375rem}
.project-item a:hover{opacity:1}
.edu-item{margin-bottom:0.5rem}
.edu-item h4{color:#fff;font-size:0.9rem}
.edu-item .meta{color:rgba(255,255,255,0.5);font-size:0.75rem}
.bb-list{display:flex;flex-wrap:wrap;gap:0.4rem}
.bb-item{font-size:0.75rem;padding:0.25rem 0.6rem;background:rgba(255,255,255,0.08);border-radius:9999px;color:rgba(255,255,255,0.7);display:flex;align-items:center;gap:0.3rem}
footer{text-align:center;color:rgba(255,255,255,0.4);font-size:0.75rem;margin-top:1rem;padding:1rem}
[dir="rtl"] .glass-container{direction:rtl}
[dir="rtl"] .text-center{text-align:right}
[dir="rtl"] .glass-card{text-align:right}
[dir="rtl"] .socials{flex-direction:row-reverse}
[dir="rtl"] .bb-list{justify-content:flex-start}
@media(max-width:640px){h1{font-size:1.5rem}.projects{grid-template-columns:1fr}.glass-card{padding:1.25rem}}
</style></head>
<body>
<div class="bg-blob blob1"></div><div class="bg-blob blob2"></div><div class="bg-blob blob3"></div>
<div class="glass-container">
  <div class="glass-card text-center">
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    {{#if location}}<p class="bio">{{location}}</p>{{/if}}
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
  </div>
  {{#if skills.length}}<div class="glass-card"><h2>✦ {{sectionTitles.skills}}</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  {{#if educationArray.length}}<div class="glass-card"><h2>✦ {{sectionTitles.education}}</h2>{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  {{#if projects.length}}<div class="glass-card"><h2>✦ {{sectionTitles.projects}}</h2><div class="projects">{{#each projects}}<div class="project-item"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<br><a href="{{this.url}}" target="_blank">{{#if (eq dir "rtl")}}{{portfolioTexts.viewProject}} ←{{else}}→ {{portfolioTexts.viewProject}}{{/if}}</a>{{/if}}</div>{{/each}}</div></div>{{/if}}
  {{#if bugbountyArray.length}}<div class="glass-card"><h2>✦ {{sectionTitles.bugbounty}}</h2><div class="bb-list">{{#each bugbountyArray}}<span class="bb-item"><i class="fas fa-shield-halved"></i> {{this.platform}} · {{this.username}}</span>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },
  {
    id: 6,
    nameKey: 'theme.6',
    icon: 'fas fa-moon',
    description: 'Dark Premium — ultra-minimal dark with subtle grid, gradient text',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.title}}</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#e4e4e7;font-family:'{{fontFamilyCss}}',sans-serif;overflow-x:hidden}
.bg-grid{position:fixed;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;z-index:0}
.content{position:relative;z-index:1;max-width:1000px;margin:0 auto;padding:4rem 2rem}
header{text-align:center;padding:6rem 0 3rem}
.profile-img{width:clamp(72px,22vw,100px);height:clamp(72px,22vw,100px);border-radius:50%;object-fit:cover;border:2px solid {{colors.primary}};margin-bottom:1.5rem;max-width:100%;aspect-ratio:1}
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
.skill-tag{padding:0.5rem 1rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:9999px;font-size:0.8125rem;color:#a1a1aa;transition:all 0.2s}
.skill-tag:hover{border-color:{{colors.primary}}44;color:{{colors.primary}}}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem}
.project-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:1rem;padding:1.5rem;transition:all 0.3s}
.project-card:hover{border-color:{{colors.primary}}33;background:rgba(255,255,255,0.04);transform:translateY(-2px)}
.project-card h3{font-size:1.125rem;font-weight:600;color:#e4e4e7;margin-bottom:0.5rem}
.project-card p{color:#71717a;font-size:0.875rem;line-height:1.6;margin-bottom:0.75rem}
.project-tags{display:flex;flex-wrap:wrap;gap:0.25rem}
.project-tags span{font-size:0.7rem;padding:0.125rem 0.5rem;background:rgba(255,255,255,0.04);border-radius:9999px;color:#52525b}
.project-link{display:inline-flex;align-items:center;gap:0.375rem;color:{{colors.primary}};font-size:0.8125rem;font-weight:500;text-decoration:none;margin-top:0.75rem;transition:gap 0.2s}
.project-link:hover{gap:0.625rem}
.edu-item{margin-bottom:0.5rem}
.edu-item h4{color:#e4e4e7;font-size:0.95rem}
.edu-item .meta{color:#71717a;font-size:0.8rem}
.bb-list{display:flex;flex-wrap:wrap;gap:0.4rem}
.bb-item{font-size:0.8rem;padding:0.25rem 0.6rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:9999px;color:#a1a1aa;display:flex;align-items:center;gap:0.3rem}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:{{colors.primary}};text-decoration:none;font-size:0.875rem;font-weight:500;margin-top:0.75rem;padding:0.5rem 1.25rem;border:1px solid {{colors.primary}}33;border-radius:9999px;transition:all 0.2s}
.cv-link:hover{background:{{colors.primary}}11;border-color:{{colors.primary}}66}
footer{text-align:center;padding:3rem 0;color:#52525b;font-size:0.8125rem;border-top:1px solid rgba(255,255,255,0.06);margin-top:2rem}
[dir="rtl"] .content{direction:rtl;text-align:right}
[dir="rtl"] header{text-align:right}
[dir="rtl"] .section-title{text-align:right}
[dir="rtl"] .socials{flex-direction:row-reverse;justify-content:flex-start}
[dir="rtl"] .meta-info{flex-direction:row-reverse}
[dir="rtl"] .project-card{text-align:right}
[dir="rtl"] .bb-list{justify-content:flex-start}
@media(max-width:640px){h1{font-size:2rem}.content{padding:2rem 1rem}.projects-grid{grid-template-columns:1fr}header{padding:3rem 0 2rem}}
</style></head>
<body>
<div class="bg-grid"></div>
<div class="content">
  <header{{#if animationsEnabled}} data-aos="fade-down"{{/if}}>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <h1>{{name}}</h1>
    <div class="role">{{role}}</div>
    {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
    <div class="meta-info">{{#if location}}<span><i class="fas fa-location-dot"></i> {{location}}</span>{{/if}}{{#if email}}<span><i class="fas fa-envelope"></i> {{email}}</span>{{/if}}</div>
    <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
    {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> {{portfolioTexts.resume}}</a>{{/if}}
  </header>
  {{#if educationArray.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><div class="section-title">{{sectionTitles.education}}</div>{{#each educationArray}}<div class="edu-item"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  {{#if skills.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><div class="section-title">{{sectionTitles.skills}}</div><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  {{#if projects.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><div class="section-title">{{sectionTitles.projects}}</div><div class="projects-grid">{{#each projects}}<div class="project-card"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="project-tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<a href="{{this.url}}" target="_blank" class="project-link">{{#if (eq dir "rtl")}}{{portfolioTexts.viewProject}} ←{{else}}→ {{portfolioTexts.viewProject}}{{/if}} <i class="fas fa-arrow-right" style="font-size:0.7rem"></i></a>{{/if}}</div>{{/each}}</div></div>{{/if}}
  {{#if bugbountyArray.length}}<div class="section"{{#if animationsEnabled}} data-aos="fade-up"{{/if}}><div class="section-title">{{sectionTitles.bugbounty}}</div><div class="bb-list">{{#each bugbountyArray}}<span class="bb-item"><i class="fas fa-shield-halved" style="color:{{colors.primary}}"></i> {{this.platform}} · {{this.username}}</span>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  },
  {
    id: 7,
    nameKey: 'theme.7',
    icon: 'fas fa-graduation-cap',
    description: 'Academic — structured timeline, serif headers, publication-focused',
    render: (data) => Handlebars.compile(`
<!DOCTYPE html>
<html lang="{{lang}}" dir="{{dir}}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{{name}} · {{portfolioTexts.titleAcademic}}</title>
{{#if animationsEnabled}}<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">{{/if}}
<link href="https://fonts.googleapis.com/css2?family={{fontUrl}}&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}
:root{--primary:{{colors.primary}};--accent:{{colors.accent}};--bg:{{colors.bg}};--fg:#0F172A;--card:#fff;--muted:#F1F5F9}
body{font-family:'{{fontFamilyCss}}',sans-serif;background:var(--bg);color:var(--fg);line-height:1.7}
.container{max-width:860px;margin:0 auto;padding:2rem 1.5rem}
header{border-bottom:2px solid var(--primary);padding-bottom:1.5rem;margin-bottom:2rem;display:flex;gap:1.5rem;align-items:start}
.profile-img{width:clamp(72px,22vw,100px);height:clamp(72px,22vw,100px);border-radius:50%;object-fit:cover;border:3px solid var(--primary);flex-shrink:0;max-width:100%;aspect-ratio:1}
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
.project-card p{font-size:0.85rem;color:#475569;margin:0.25rem 0}
.project-card a{color:var(--accent);font-size:0.85rem;text-decoration:none;font-weight:500}
.edu-card{background:var(--card);border:1px solid #E2E8F0;border-radius:0.5rem;padding:1rem;margin-bottom:0.75rem}
.edu-card h4{font-size:1rem;font-weight:600;color:var(--primary)}
.edu-card .meta{font-size:0.8rem;color:#64748B}
.bb-list{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.5rem}
.bb-item{font-size:0.8rem;padding:0.25rem 0.6rem;background:var(--muted);border:1px solid #E2E8F0;border-radius:0.375rem;color:var(--primary);display:flex;align-items:center;gap:0.3rem}
.socials{display:flex;gap:0.75rem;flex-wrap:wrap}
.socials a{color:#64748B;font-size:1.125rem;transition:color 0.2s}
.socials a:hover{color:var(--accent)}
.cv-link{display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);text-decoration:none;font-weight:500;font-size:0.875rem}
footer{text-align:center;padding:1.5rem;color:#94A3B8;font-size:0.8125rem;border-top:1px solid #E2E8F0;margin-top:2rem}
[dir="rtl"] .container{direction:rtl}
[dir="rtl"] header{flex-direction:row-reverse;text-align:right}
[dir="rtl"] .section h2{text-align:right}
[dir="rtl"] .section h2 i{margin-left:0.5rem;margin-right:0}
[dir="rtl"] .timeline{padding-left:0;padding-right:1.5rem}
[dir="rtl"] .timeline:before{left:auto;right:0}
[dir="rtl"] .timeline-item{padding-left:0;padding-right:0.5rem}
[dir="rtl"] .timeline-item:before{left:auto;right:-1.65rem}
[dir="rtl"] .contact-line{justify-content:flex-start}
[dir="rtl"] .socials{flex-direction:row-reverse}
[dir="rtl"] .project-card{text-align:right}
[dir="rtl"] .edu-card{text-align:right}
[dir="rtl"] .bb-list{justify-content:flex-start}
@media(max-width:640px){header{flex-direction:column;align-items:center;text-align:center}.contact-line{justify-content:center}.container{padding:1.5rem 1rem}.section{padding:1rem 0}}
</style></head>
<body>
<div class="container">
  <header{{#if animationsEnabled}} data-aos="fade"{{/if}}>
    {{#if photo}}<img src="{{photo}}" class="profile-img">{{/if}}
    <div>
      <h1>{{name}}</h1>
      <div class="header-sub">{{role}}</div>
      {{#if bio}}<p class="bio">{{bio}}</p>{{/if}}
      <div class="contact-line">{{#if email}}<span><i class="fas fa-envelope"></i> {{email}}</span>{{/if}}{{#if location}}<span><i class="fas fa-location-dot"></i> {{location}}</span>{{/if}}</div>
      <div class="contact-line" style="margin-top:0.5rem">
        <div class="socials">{{#each socials}}<a href="{{this.url}}" target="_blank"><i class="{{this.icon}}"></i></a>{{/each}}</div>
        {{#if cv}}<a href="{{cv}}" class="cv-link" download><i class="fas fa-file-pdf"></i> {{portfolioTexts.cv}}</a>{{/if}}
      </div>
    </div>
  </header>
  {{#if educationArray.length}}<div class="section"><h2><i class="fas fa-graduation-cap"></i> {{sectionTitles.education}}</h2>{{#each educationArray}}<div class="edu-card"><h4>{{this.degree}}</h4><div class="meta">{{this.school}}{{#if this.year}} · {{this.year}}{{/if}}</div></div>{{/each}}</div>{{/if}}
  {{#if skills.length}}<div class="section"><h2><i class="fas fa-flask"></i> {{sectionTitles.skills}}</h2><div class="skills">{{#each skills}}<span class="skill-tag">{{this.name}}</span>{{/each}}</div></div>{{/if}}
  <div class="section"><h2><i class="fas fa-book"></i> {{sectionTitles.projects}}</h2>{{#if projects.length}}<div class="timeline">{{#each projects}}<div class="timeline-item"><h3>{{this.name}}</h3><p>{{this.desc}}</p><div class="tags">{{#each this.tags}}<span>{{this}}</span>{{/each}}</div>{{#if this.url}}<p style="margin-top:0.25rem"><a href="{{this.url}}" target="_blank">{{#if (eq dir "rtl")}}{{portfolioTexts.view}} ←{{else}}→ {{portfolioTexts.view}}{{/if}}</a></p>{{/if}}</div>{{/each}}</div>{{else}}<p style="color:#94A3B8">{{portfolioTexts.noProjects}}</p>{{/if}}</div>
  {{#if bugbountyArray.length}}<div class="section"><h2><i class="fas fa-shield-halved"></i> {{sectionTitles.bugbounty}}</h2><div class="bb-list">{{#each bugbountyArray}}<span class="bb-item"><i class="fas fa-shield-halved" style="color:var(--accent)"></i> {{this.platform}} · {{this.username}}</span>{{/each}}</div></div>{{/if}}
  <footer>{{name}} · {{year}}</footer>
</div>
{{#if animationsEnabled}}<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script><script>AOS.init({duration:600,once:true})</script>{{/if}}
</body></html>`)(data)
  }
];

function getTheme(id) {
  return THEMES.find(t => t.id === id) || THEMES.find(t => t.id === 3);
}