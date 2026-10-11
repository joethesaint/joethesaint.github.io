# Joseph Bamisaye — portfolio and interactive demos

Svelte portfolio with standalone browser projects in `public/`, including the Three.js Biogas Design Studio at `/biogas/`.

## Local development

```sh
npm ci
npm ci --prefix biogas-ui
npm --prefix biogas-ui run build:effects
npm run dev
```

For the production preview, run `npm run build`, then `npm run preview -- --host 0.0.0.0 --port 4173`. Open `http://127.0.0.1:4173/biogas/` on this device.

## Checks

```sh
npm run check
npm run lint
npm run test:biogas
npm run build
npx playwright install chromium
npm run test:browser
```

Browser tests require a working Chromium environment; GitHub Actions uses Linux and installs its browser dependencies. Reports and screenshots are uploaded as `biogas-browser-evidence`. Local results live in the ignored `test-results/` and `playwright-report/` folders.

## Biogas structure

- `public/biogas/app.js`: viewer, input and UI state.
- `model-builder.js` and `compression-model.js`: independent procedural model factories.
- `model-style.js`, `flow-effects.js`, `thumbnails.js`: appearance, cycle/shader and isolated previews.
- `process-data.js` and `compression-budget.js`: explanatory routes and quote planning.
- `biogas-ui/src/`: React/Motion controls. Rebuild `public/biogas/effects.js` after changing these sources.
- `biogas-ui/STYLE-GUIDE.md`: Hairline defaults and style persistence.
- `biogas-ui/RELEASE-2026-10-12.md`: current scope, evidence and external engineering inputs.

The viewer is educational. Its geometry, cycle and compression route do not establish equipment dimensions, operating limits or fabrication readiness.

## Publishing

Pushing `main` runs locked dependency installation, control compilation, lint/type checks, model tests, production build and browser checks. A passing run publishes `dist` to `gh-pages`, which GitHub Pages serves at https://joethesaint.github.io/. Newer pushes supersede older pending deployments.
