# Website development

React + TypeScript + Vite. The existing README is preserved.

## Preview locally

Requires Node.js 22.12+ (or Node.js 24).

```sh
npm ci
npm run dev
```

Open http://localhost:5173. For a production preview:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. On a remote workspace, forward the relevant port privately using your editor's port panel. These commands do not deploy the site.

## Update content

Edit `src/content.ts`: social links, four pillar descriptions, published content, podcast episodes, and Bobbie's reflections. Each item has a title, description, and real URL. Content items also have a pillar ID (`financial`, `mind`, `family`, or `living`) and format (`Podcast`, `Video`, or `Article`). Optional podcast guests should only be added once confirmed. Empty arrays display honest coming-soon states. The home page presents the two series as featured destinations until published content is available.

Reusable UI components and section markup live in `src/App.tsx`; responsive styling lives in `src/styles.css`. Replace the `Landscape` illustration with supplied photos when ready, keeping descriptive alt text. The current text wordmark and sprout are visual placeholders, not a final logo. No stock people, testimonials or invented episodes are used. No analytics, accounts, forms, external fonts or embedded third-party videos are loaded.

## Checks

`npm run check` checks TypeScript. `npm run build` checks TypeScript and produces optimized static assets in `dist/`. Do not commit `dist/` or `node_modules/`.

No site has been deployed and no domain has been connected.

## GitHub Pages preview

Vite uses `/two-kind-minds-website/` as its base path. Local development now opens at http://localhost:5173/two-kind-minds-website/ and the production preview at http://localhost:4173/two-kind-minds-website/.

The workflow `.github/workflows/deploy-pages.yml` builds and deploys `preview/first-version` on pushes, or manually from the Actions tab. It installs the locked dependencies with `npm ci`, builds with Node.js 24, and uploads only `dist/`. No external hosting token is required; it uses the workflow's short-lived GitHub token and Pages identity.

Enable it in the repository's **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then open **Actions → Deploy website preview to GitHub Pages → Run workflow**, select `preview/first-version`, and click **Run workflow**. If the workflow is not listed because it exists only on this non-default branch, push a new commit to the preview branch to trigger it (an empty commit is sufficient), or re-run its existing push-triggered run from Actions.

If deployment reports a protected-environment branch restriction, open **Settings → Environments → github-pages → Deployment branches and tags** and allow `preview/first-version` as a selected branch. Keep any other existing rules intact.

The expected Pages address is https://twokindminds-afk.github.io/two-kind-minds-website/. This is a public preview when published. Leave **Custom domain** blank; no `CNAME` file is used and no change to twokindminds.com is required. Free GitHub Pages is available for public repositories; private repositories may require a paid GitHub plan.
