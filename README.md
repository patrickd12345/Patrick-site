# Patrick Duchesneau Site

Premium personal site built with Next.js App Router, TypeScript, Tailwind v4, and restrained Framer Motion.

**Repository:** [github.com/patrickd12345/Patrick-site](https://github.com/patrickd12345/Patrick-site) (standalone; not the Bookiji inc monorepo).

**Finding it on GitHub:** open that link while signed in as **`patrickd12345`**, or paste the URL in the address bar. It is under the user **`patrickd12345`**, not under an org named Bookiji.

**Cursor / VS Code:** open the **`Patrick-site`** folder as the workspace root (File → Open Folder). If the root is **`Bookiji inc`**, Source Control will show the monorepo; this project includes `.vscode/settings.json` so Git does not walk up to a parent repo when this folder is the workspace.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment placeholders:

```bash
copy .env.example .env.local
```

3. Run locally:

```bash
npm run dev
```

4. Production checks:

```bash
npm run lint
npm run build
```

## Routes

- `/`
- `/projects`
- `/case-studies`
- `/about`
- `/resume`
- `/contact`
