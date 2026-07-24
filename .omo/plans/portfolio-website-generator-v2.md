# portfolio-website-generator-v2 - Work Plan

## TL;DR (For humans)

**What you'll get**: A complete rebuild of the portfolio website generator. 7 pixel-perfect templates (Aether as 100% copy of your live site + 6 inspired by famous devs like Brittany Chiang, tauseefansari, thedeba, etc.). A unique UI that doesn't copy rahuldkjain's left/right layout. Simplified form with only popular social platforms. Education & Bug Bounty fields.

**Why this approach**: Quality over quantity. 7 perfect templates > 13 inconsistent ones. Each template will match real, proven designs. The generator UI will be unique and easy to use.

**What it will NOT do**: No README generator. No obscure social platforms. No more than 7 templates.

**Effort**: Large rebuild — themes.js, form.js, app.js, index.html, and style.css all need significant changes.

**Risk**: Aether template must be pixel-perfect match to aether-dz.github.io/portfolio/ — any deviation will be rejected.

**Decisions**: 7 templates, education+bounty fields, README removed, unique layout, simplified socials.

## Scope

**IN:**
- Rebuild the generator UI with a unique, easy layout (not boring left/right)
- 7 portfolio website templates, each pixel-perfect:
  1. **Aether** — exact copy of aether-dz.github.io/portfolio/ with dark/light toggle
  2. **Brittany** — inspired by Brittany Chiang (dark, sidebar nav, clean typography)
  3. **Cyber** — thedeba style cyberpunk/glassmorphism with particles
  4. **Terminal** — polished terminal emulator (current Theme 5/13 upgraded)
  5. **Minimal** — clean white-space design (inspired by Matt Farley / Sean Halpin)
  6. **Bento** — modern card grid (current Theme 4 upgraded)
  7. **3D/Interactive** — inspired by tauseefansari with animated elements
- Data model: add education (degree, school, year, field) and bugBounty (platforms, hallOfFame)
- Social platforms: reduce to ~20 most popular only (GitHub, LinkedIn, Twitter/X, Instagram, YouTube, Telegram, Discord, Reddit, StackOverflow, Dev.to, Medium, Hashnode, Dribbble, Behance, Figma, CodePen, GitLab, Bitbucket, HackerOne, Bugcrowd, TryHackMe, HackTheBox)
- Template thumbnails in theme selector (small preview images)
- Dark/light toggle in Aether template
- Rebuild i18n strings for new fields

**OUT:**
- README generator — removed entirely
- Obscure social platforms (80 down to ~20)
- Any template beyond 7
- Unused code/themes

**MUST-NOT-HAVE:**
- No jQuery or Bootstrap in the generator UI (keep vanilla + Tailwind)
- No external dependencies beyond current CDNs
- No half-baked templates — if a template isn't pixel-perfect, it doesn't ship
- **No machine-translation-quality Arabic** — every Arabic string must be properly written, grammatically correct, and classy (راقي). No auto-translate artifacts. RTL layout must be verified visually.

**ALSO INCLUDE:**
- **Real GitHub token test** — during F3 verification, use a real GitHub PAT to test the deploy flow end-to-end. If it fails, the deploy feature must be fixed.
- **Extensible architecture** — the codebase must make it easy to add new templates, new sections, new fields without touching core logic. Plan for "infinite ideas".

## Verification strategy

**Template accuracy**: Each template will be verified against its reference:
1. Aether: screenshot comparison with aether-dz.github.io/portfolio/ — must match pixel for pixel in layout, colors, typography, spacing
2. Other templates: verified against reference screenshots

**Render correctness**: Each template compiles with Handlebars without errors when fed all possible data configurations (empty, partial, full)

**Responsive**: Each template tested at desktop (1200px+), tablet (768px), mobile (375px)

**Form validation**: All fields validate correctly, data flows from form → preview without loss

## Execution strategy

**CRITICAL RULE: NO SUBAGENTS.** All work must be done DIRECTLY by the executor using only built-in tools (read, edit, write, grep, glob). No `task(subagent_type=...)` or `task(category=...)` calls. Zero delegation. If a tool doesn't exist, do it manually.

**Phase 1 — Generator UI rebuild** (files: index.html, style.css, form.js, app.js)
1. Replace current form with simplified, unique layout
2. Add education & bug bounty fields
3. Simplify social platforms to ~20
4. Add template thumbnail previews
5. Remove README generator code

**Phase 2 — 7 templates** (file: themes.js)
6. Rebuild Aether template (#11) with dark/light toggle — pixel-perfect
7. Create 6 new templates from reference designs
8. Add template metadata (description, thumbnail, features)

**Phase 3 — Polish & cleanup**
9. Update i18n strings
10. Update design-tokens.js if needed
11. Clean up unused code

## Todos

- [ ] 1. **Redesign generator UI/UX** — Create a unique, non-boring layout for the generator itself. Move away from standard left/right split. Ideas: top form with bottom preview, or step-by-step wizard with full-screen preview, or tab-based sections. Must show template thumbnails in the theme selector. Simplify the form to only the most essential fields.
  - References: rahuldkjain's category-based skill input, unique portfolio generators list
  - Acceptance: Layout is unique, easy to use, not left/right boring. Template thumbnails visible.
  - QA: User can complete the form in under 2 minutes. Preview updates in real time.
  - Commit: `feat(generator-ui): unique layout with simplified form and template thumbnails`

- [ ] 2. **Simplify social platforms to ~20** — Remove the 80+ obscure social platforms. Keep only: GitHub, LinkedIn, Twitter/X, Instagram, YouTube, Telegram, Discord, Reddit, StackOverflow, Dev.to, Medium, Hashnode, Dribbble, Behance, Figma, CodePen, GitLab, Bitbucket, HackerOne, Bugcrowd, TryHackMe, HackTheBox
  - References: `form.js` lines 174-186 (current 80+ platforms)
  - Acceptance: Form shows only 22 platforms, categorized: Developer, Security, Social, Creative
  - QA: All 22 work correctly with icons and URLs. Data flows to templates.
  - Commit: `feat(form): reduce social platforms to 22 most popular`

- [ ] 3. **Add Education & Bug Bounty fields to data model** — New fields: `education` array (school, degree, field, startYear, endYear, description) and `bugBounty` array (platform, username, hallOfFame, profileUrl, highlights). Update form steps to include a new step or section for these.
  - References: `form.js` FormState.data, user's instruction "ضيف تعليم او شي هيك"
  - Acceptance: `FormState.getData()` returns `educationArray` and `bugBountyArray` correctly. Templates can access `{{#each educationArray}}` and `{{#each bugBountyArray}}`.
  - QA: Add 2 education entries and 3 bug bounty entries. Verify data in getData(). Preview shows them. Empty arrays don't break templates.
  - Commit: `feat(data): add education and bug bounty fields to data model`

- [ ] 4. **Remove README generator completely** — Remove all README-related code: `readme-templates.js`, `readme-preview-wrapper` from index.html, `renderReadmePreview()` from app.js, `readmeTemplate` from FormState.data, README tabs from preview panel. Remove marked.js CDN.
  - References: `index.html` lines 124-142 (readme preview), `app.js` lines 5-37 (renderReadmePreview), `js/readme-templates.js` entire file
  - Acceptance: No README code exists anywhere. No references to `readme`, `marked`, `readmeTemplate`.
  - QA: Page loads without errors. No README tab visible. Only portfolio preview remains.
  - Commit: `refactor: remove README generator — focus only on portfolio websites`

- [ ] 5. **Rebuild Aether template (#11) with dark/light toggle** — Pixel-perfect copy of aether-dz.github.io/portfolio/ with: particles.js (white particles, grab mode), Righteous font for name, Ubuntu Mono for everything else, #00ffaa hover color, 6vw responsive name, layout split (image left / text right), email tooltip bottom-right, Bootstrap 4.3 grid system. Add dark/light toggle that switches #000/#fff backgrounds and white/black particles.
  - References: aether-dz.github.io/portfolio/ HTML source fetched earlier, user instruction "خلي حقي بالاسود و سوي زر فوق يغيره للابيض"
  - Acceptance: Generated site at default is visually identical to aether-dz.github.io/portfolio/. Dark/light toggle works. Particles change color with theme.
  - QA: Compare screenshot side-by-side with live site — no pixel differences in layout. Toggle switches theme smoothly. Name is Righteous, body is Ubuntu Mono.
  - Commit: `feat(template): Aether v2 with pixel-perfect design and dark/light toggle`

- [ ] 6. **Create 6 new templates from real dev portfolios** — Design 6 high-quality templates inspired by:
  - **Brittany** (brittanychiang.com) — dark sidebar, green accent, clean sections
  - **Cyber** (thedeba style) — cyberpunk/glassmorphism, neon glow, particles
  - **Terminal** (polished terminal) — dracula colors, command history, typing effects
  - **Minimal** (Matt Farley style) — white space, clean typography, accent color
  - **Bento** (modern card grid) — asymmetric grid, cards, skills/projects in boxes
  - **Interactive** (tauseefansari style) — animated elements, modern dark
  
  Each template must: support all data fields (skills, projects, education, bugBounty, socials, photo, CV), be responsive (mobile/tablet/desktop), use inline CSS (no external deps beyond Google Fonts + FA icons), have proper dark/light or dark-only theme.
  
  - References: colorlib.com/wp/developer-portfolios/, emmabostian/developer-portfolios (25k stars), user instruction "ابحث في github او ناس مشهوره مسويه واحد كذا لها و حطهم"
  - Acceptance: 6 templates, each visually distinct, all responsive, all support full data model
  - QA: Each template renders with full data, partial data, and empty data. Mobile layout works. No console errors.
  - Commit: `feat(templates): 6 new portfolio templates from famous dev designs`

- [ ] 7. **Add template thumbnail previews** — For each template, generate a small HTML preview that shows in the theme selector. Can be an inline SVG/CSS preview card or a small rendered iframe. Show theme name, icon, and a visual representation.
  - References: Theme selector in `form.js` renderThemeStep() lines 266-272
  - Acceptance: When user reaches Theme step, they see 7 cards with preview images/thumbnails + name + description
  - QA: All 7 thumbnails render. Clicking a thumbnail selects that theme and updates the main preview.
  - Commit: `feat(ui): template thumbnail previews in theme selector`

- [ ] 8. **Update i18n strings** — Add translations for new fields (education, bugBounty), new themes (Brittany, Cyber, etc.), updated form labels. Remove old README strings.
  - References: `js/i18n.js`
  - Acceptance: All new fields have en/ar translations. Old README strings removed.
  - QA: Switch between AR/EN — all translations appear correctly.
  - Commit: `feat(i18n): update translations for new fields and remove README strings`

- [ ] 9. **Clean up dead code** — Remove unused themes (current 1-10 except those kept), remove commented-out code, remove readme-templates.js file, update app.js console.log, ensure no broken references.
  - References: Entire codebase audit
  - Acceptance: No `readme`, `readmeTemplate`, unused theme IDs in code. `console.log` says "7 portfolio themes".
  - QA: Page loads without 404s or console errors. All 7 themes render.
  - Commit: `chore: clean up dead code, unused themes, and README remnants`

- [ ] 10. **Arabic language quality audit** — Every Arabic string in i18n.js reviewed for grammatical correctness, natural flow, and appropriate formality. No machine-translation artifacts. RTL layout verified: everything reads right-to-left correctly, no layout breaks, no misaligned icons, no reversed social icons. Arabic typography checked (proper Arabic font support, no tashkeel issues, correct line height for Arabic script).
  - References: i18n.js, each template's RTL support
  - Acceptance: All AR strings pass human review: correct grammar, classy tone, no "ترجمة جوجل" feel. RTL templates display correctly with no broken layouts.
  - QA: Switch to Arabic, fill form, generate portfolio. Every text field in AR. Preview renders correctly in RTL. Export and deploy also show proper RTL.
  - Commit: `fix(i18n): Arabic language quality audit — classy, correct, no machine translation`

- [ ] 11. **Real GitHub token deploy test** — Test the deploy flow with a real GitHub Personal Access Token. Create a test repo, push the generated portfolio, verify it deploys to GitHub Pages successfully. If any step fails (API error, auth issue, pages setup), fix it.
  - References: github.js, deploy flow in app.js
  - Acceptance: A real portfolio deploys to GitHub Pages under a test repo and is accessible at `https://<user>.github.io/<repo>/`
  - QA: Run the full deploy flow with a real PAT. Page loads at the expected URL. All assets load (CSS, JS, images).
  - Commit: `fix(deploy): real GitHub token test — deploy flow works end-to-end`

- [ ] 12. **Test all templates with edge cases** — Every template tested with: full data (all fields), partial data (only name), empty data, long text (200+ chars), no photo, no socials, 10+ projects, special characters, Arabic/RTL content.
  - References: The `render()` function of each template
  - Acceptance: No template throws errors. All handlebars conditionals work. Empty sections are hidden gracefully.
  - QA: For each template, render with 5 data configurations. Verify output HTML is valid, no `[object Object]`, no undefined.
  - Commit: `test: verify all 7 templates with edge case data configurations`

## Final verification wave

- [ ] F1. **Plan compliance audit** — Every todo completed. No scope creep. No README code remains. Exactly 7 templates.
  - Verify: grep for 'readme', 'marked', 'readmeTemplate', 'THEMES.length' — confirm removed/correct.
  - Evidence: grep output showing no README remnants, THEMES has exactly 7 entries.

- [ ] F2. **Aether pixel-perfect check** — Generated Aether template compared side-by-side with aether-dz.github.io/portfolio/
  - Verify: Layout, colors, fonts, spacing, particles config, email tooltip, responsive breakpoints all match.
  - Evidence: Side-by-side screenshot comparison or checklist.

- [ ] F3. **Form data flow** — Fill complete form, check `FormState.getData()` output, render preview.
  - Verify: educationArray, bugBountyArray, socialsArray (22 platforms only), skillsArray, projectsArray all present and correct.
  - Evidence: Console log of getData() showing all fields populated.

- [ ] F4. **Arabic quality & RTL check** — All Arabic strings reviewed for grammar and tone. RTL layout verified in preview.
  - Verify: Arabic text flows naturally, no broken RTL layouts, no machine-translation artifacts (wrong prepositions, unnatural phrasing, literal translations).
  - Evidence: Screenshots of Arabic-generated portfolio. Reviewed Arabic strings list.

- [ ] F5. **Real deploy test** — Deploy flow tested with a real GitHub PAT. A portfolio successfully deployed to GitHub Pages.
  - Verify: The deploy API call succeeds, GitHub Pages is enabled, the site loads at the expected URL.
  - Evidence: Successful deploy output, URL of live test site.

- [ ] F6. **Full responsive test** — Each template tested at 1440px, 768px, 375px viewports.
  - Verify: No overflow, no broken layout, all content visible, fonts scale correctly.
  - Evidence: Screenshots at each breakpoint for each template (or checklist).

## Commit strategy
1. `feat(generator-ui): unique layout with simplified form and template thumbnails`
2. `feat(data): add education and bug bounty fields to data model`
3. `refactor: remove README generator — focus only on portfolio websites`
4. `feat(template): Aether v2 with pixel-perfect design and dark/light toggle`
5. `feat(templates): 6 new portfolio templates from famous dev designs`
6. `feat(i18n): update translations for new fields and remove README strings`
7. `fix(i18n): Arabic language quality audit — classy, correct, no machine translation`
8. `chore: clean up dead code, unused themes, and README remnants`
9. `test: verify all 7 templates with edge case data configurations`
10. `fix(deploy): real GitHub token test — deploy flow works end-to-end`

## Success criteria
1. Generator has a unique, non-boring UI that's easy to use
2. Exactly 7 pixel-perfect templates, one being an exact Aether replica with dark/light toggle
3. Education and Bug Bounty fields in data model
4. ~20 popular social platforms only
5. No README generator
6. Template thumbnails visible in theme selector
7. All templates render correctly with empty/partial/full data
8. All templates responsive at desktop/tablet/mobile
9. No console errors, no broken references
10. Bilingual (AR/EN) — Arabic is classy, correct, no machine-translation feel
11. Real GitHub token deploy test passes end-to-end
12. Architecture allows adding new templates/sections/fields easily (extensible)
