# all-about-cb

Personal site / resume for Caradec Bisesar, at [gr1mdrag0n.github.io/all-about-cb](https://gr1mdrag0n.github.io/all-about-cb/).

## Stack

* [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
* [React Router](https://reactrouter.com/) (hash routing, since this is static GitHub Pages hosting)
* [Vitest](https://vitest.dev/) + Testing Library
* Deployed via [gh-pages](https://github.com/tschaub/gh-pages)

## Running locally

```
npm install
npm run dev      # dev server
npm run build    # typecheck + production build
npm test         # unit tests
npm run deploy   # build and publish to the gh-pages branch
```

## Structure

* `src/components/` — pages and UI components
* `src/content/` — copy and structured data (resume entries, chat Q&A, coffee log, gear list)
* `src/css/chat.css` — styles for the main site (scoped to `.chat-page` so they don't leak elsewhere)
