# YoSeeds

A modern plant shop website built with React and Vite.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Project Structure

```
src/
├── components/          Shared UI components (Header, Hero, Footer, etc.)
├── data/                Plant & category data
├── webpages/            Page-level views
│   └── index/           Home / index page
│       └── Index.tsx
├── App.tsx
└── main.tsx
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Deploy to GitHub Pages

1. Create a new GitHub repository named `yoseeds`
2. Add GitHub as a remote and push your code:

```bash
git remote add github https://github.com/YOUR_USERNAME/yoseeds.git
git push -u github main
```

3. In the GitHub repo, go to **Settings → Pages**
4. Set **Source** to **GitHub Actions**
5. Push to `main` or `1-front-end` — the workflow builds `dist/index.html` and deploys automatically

Your site will be live at:

`https://YOUR_USERNAME.github.io/yoseeds/`

To preview the production build locally:

```bash
npm run build:github
npm run preview
```
