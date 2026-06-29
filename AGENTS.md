# Repository Agent Guidance

## Node Runtime

- Treat `.node-version` as the source of truth for the Node.js runtime.
- GitHub Actions should use `actions/setup-node` with `node-version-file: .node-version`.
- Do not add a separate `NODE_VERSION` value to `netlify.toml` unless Netlify stops honoring `.node-version`.

## Dependency Discipline

- Treat the core dependency stack as fragile, pinned infrastructure. Do not modernize, dedupe, reorganize, or "clean up" dependencies unless the user explicitly asks for a dependency migration.
- Do not regenerate `package-lock.json` as routine maintenance.
- Use `npm ci` for installs and validation; avoid `npm install` unless the task is explicitly a dependency migration.
- The locked VuePress stack is fragile. Regenerating the lockfile or resolving VuePress ranges can move the site onto incompatible VuePress packages.
- Keep `@lando/vuepress-theme-default-plus`, `@vuepress/*`, `vuepress`, and `vuepress-vite` pinned unless a deliberate VuePress migration is in scope.
- Do not change VuePress, Vue, Vite, Webpack, theme, or plugin package versions as part of unrelated work.

## VuePress Config

- Keep `.vuepress/config.js` and `.vuepress/theme/index.js` in the repo's current CommonJS style for the pinned VuePress stack.
- Do not convert those files to ESM, rename them to `.mjs`, add `"type": "module"`, or otherwise alter the module format unless the task is an explicit VuePress migration and the site is validated with a clean `npm ci`, `npm run dev`, and `npm run build`.

## Site Links

- Treat the public site as a seamless experience split across multiple Netlify projects. Shared navbar links in `.vuepress/config.js` should use absolute production URLs such as `https://lando.dev/mission`, not root-relative links.
- Keep donation and sponsorship links pointed directly at `https://github.com/sponsors/lando`. The `/donate` redirect exists for convenience, but public donation CTAs should use the GitHub Sponsors URL directly.
- External Docs and GitHub CTA links should use `target="_blank"` with `rel="noopener noreferrer"`.

## AI Metadata

- Keep `.vuepress/public/llms.txt` and `.vuepress/public/llms-full.txt` as static public files for the pinned VuePress build. They are copied directly to the production site root during build.
- Update both files periodically when landing-page copy, mission/support/contact content, public URLs, donation/support routes, or other major site content changes.
- Do not add a VuePress `llms.txt` plugin for this pinned stack unless a deliberate VuePress migration validates it with a clean install, dev server, and production build.

## Mission PDF

- Keep `.vuepress/public/lando-alliance-mission.pdf` aligned with `/mission/` content when the mission page, mission content data, public-benefit language, impact metrics, governance copy, or mission references change.
- Regenerate the committed PDF with `npm run mission:pdf`; the script reads `.vuepress/theme/data/mission-content.js` and writes the public PDF asset.
- CI should run `npm run mission:pdf:check` to fail when the committed PDF is stale. Do not rely on the production build to silently generate a different PDF than the one reviewed in git.
- Keep the PDF print-friendly: white background, pink Lando logo, concise one-page snapshot, and any longer link/reference material on a references page.
