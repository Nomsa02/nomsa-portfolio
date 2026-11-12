# Nomsa Portfolio

A light, minimal, responsive portfolio built with **React + TypeScript + Vite + Tailwind CSS**.

## Getting started on macOS

You'll need Node.js (Vite currently requires Node 20.19+ or 22.12+, with some templates requiring a newer version).

```bash
cd ~/Desktop/Development/nomsa-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Where to edit

- `src/data/portfolio.ts` — name, location, contact links, skills, projects.
- `src/App.tsx` — structure, wording, homepage sections.
- `src/styles.css` — fonts, colors, spacing, responsiveness.
- `public/` — add your eventual CV PDF, screenshots, photos or favicon.

### Add a CV

Put a safe-to-share PDF at `public/Nomsa_Malaba_CV.pdf` and change `cvPath` in `src/data/portfolio.ts` to `'/Nomsa_Malaba_CV.pdf'`.

### Add links

In `src/data/portfolio.ts`, set your real `github`, `linkedin` and `email`. The site intentionally hides empty links. For each project, add the public `github` or `demo` URL when it's ready.

### Note on screenshots

The project-card visuals are **concept illustrations**, not screenshots or claims that those user interfaces are already complete. Replace them with actual screenshots when your projects are ready. Power BI is marked 'Planned' for now.

### Before publishing

- Check all wording, work history, and project status for accuracy.
- Use only code and screenshots you own or have permission to share.
- Never publish workplace source code, private tickets, credentials, customer data or internal screenshots.
- Add your actual CV and public contact links.

## Useful commands

```bash
npm run dev      # start your local dev server
npm run build    # type-check and build for deployment
npm run preview  # preview the production build
```

## Next milestones

1. Customize your hero copy and project details.
2. Add real project case studies with screenshots, GitHub repositories, and demos.
3. Add CV / links / optional contact form.
4. Test mobile responsiveness and accessibility.
5. Deploy (e.g. Vercel) and connect a custom domain if you want one.
