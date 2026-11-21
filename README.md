# Web Programming Mini-Projects Overview

This repository contains four introductory mini-projects built to explore core modern frontend, static/Jamstack, API query, and real-time communication concepts:

1. **React + Vite + Ecosystem (`react/hello-react`)**: Single-page application scaffolded with Vite and React, styled with Tailwind CSS (`@tailwindcss/vite`), using Zustand for global state (`useCounterStore`), React Hook Form and Formik for form handling and validation, React Router (`react-router-dom`) for client-side navigation, and Axios + TanStack Query (`@tanstack/react-query`) for remote API data fetching and caching.
2. **Jamstack with Astro (`jamstack_astro/hello-astro`)**: Static site generation approach where build-time frontmatter fetches external API data (`fetch`) and generates pre-rendered HTML output in `dist/`.
3. **GraphQL with Apollo Server (`graphql/hello-graphql`)**: Standalone GraphQL server built with `@apollo/server` and `graphql` exposing a `Book` type and `books` query on `http://localhost:4000`.
4. **WebSocket Real-Time Echo (`websocket/hello-ws`)**: Node.js WebSocket server (`ws`) listening on `ws://localhost:8080` that broadcasts incoming messages to connected clients, paired with a browser client (`index.html`) for multi-tab testing.

## Prerequisites

- **Node.js** (LTS recommended) and **npm** installed on your machine.
- A modern web browser.

## Getting Started

Clone the repository and navigate into the root folder:

```bash
git clone <YOUR_REPOSITORY_URL>
cd consulta_lunes_23
```
Because each mini-project lives in its own folder, install dependencies and run each one independently:
## React Mini-Project
```bash
cd react/hello-react
npm install
npm run dev
```
Open the local URL shown by Vite (typically http://localhost:5173/) and test /, /form, /formik, and /pokemon.
## Jamstack / Astro Mini-Project
```bash
cd jamstack_astro/hello-astro
npm install
npm run dev
```
To generate the static build output in dist/:
```bash
npm run build
```
## GraphQL Mini-Project
```bash
cd graphql/hello-graphql
npm install
node index.mjs
```
Open http://localhost:4000 in your browser and run:
```bash
query { books { title } }
```
## WebSocket Mini-Project
```bash
cd websocket/hello-ws
npm install
node server.js
```
Open websocket/hello-ws/index.html in two browser tabs, type a message in one tab, and click Send to observe the broadcast echo in both tabs.
## Notes on Dependencies
Each sub-project manages its own Node.js dependencies via package.json (npm install). A reference requirements.txt file is also included at the repository root listing the npm packages and runtime tools used across the four mini-projects.

