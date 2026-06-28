# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
----

project/
├── public/
│   └── index.html             # Includes fonts & Material Symbols links
├── src/
│   ├── components/            # Presentational & interactive UI modules
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Services.jsx
│   │
│   ├── hooks/                 # Abstracted state and side-effect logic
│   │   └── useIntersectionObserver.js
│   │
│   ├── utils/                 # Data collections, constants, and helper logic
│   │   └── constants.js
│   │
│   ├── App.jsx                # Orchestration root (LeafGlobal logic)
│   ├── index.css              # Global styles & Tailwind directives
│   └── main.jsx               # React DOM initialization entry point
│
├── package.json               # Dependency declarations (React, Three.js, Tailwind)
└── tailwind.config.js         # Custom design token extensions