# portfolio-website-generator-v2 - Draft Plan

## State
- **intent**: clear
- **review_required**: true
- **status**: approved
- **approach**: Rebuild the portfolio website generator from scratch — 7 pixel-perfect templates, unique UI/UX, simplified form, remove README generator, add education/bug bounty fields.

## User Decisions (from Q&A)
1. **7 Templates**: Aether (#11) with dark/light toggle + 6 new templates copied from real famous devs' portfolio sites (study GitHub, personal sites). Show thumbnail previews in theme selector.
2. **Data Model**: Add Education/Bug Bounty fields. Don't make fields that limit less-experienced users.
3. **README Generator**: Remove entirely. Focus only on portfolio websites.
4. **Layout**: Make it unique and better. No left/right boring split. Simplify — only show popular social platforms in the form, not all 80 obscure ones.

## Components
1. **UI/UX Redesign** — Unique layout, simplified form, template thumbnails
2. **Data Model** — Expand: name, bio, role, email, location, photo, cv, socials (popular only), skills, projects, education (degree/school/year), bugBounty (platforms/hall of fame)
3. **7 Templates** — Aether (dark/light) + 6 from real dev portfolios
4. **Preview Engine** — iframe with responsive viewport
5. **Export** — GitHub Pages deploy, ZIP download

## Research Needed
- [ ] Rahulkdjain UX patterns (waiting for background task)
- [ ] 6 real developer portfolio sites (find famous devs' personal sites, extract their HTML/CSS)
- [ ] Popular social platforms list (which ~20 to show)

## Next Step
Write the complete work plan with todos and final verification wave.
