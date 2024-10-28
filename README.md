# UpYouth Assessment Test
This repo replicate the homepage of [UpYouth](https://www.upyouth.org/)
Live Demo: [https://upyouth-assessment-test.netlify.app/]([https://www.upyouth.org/](https://upyouth-assessment-test.netlify.app/))
## How to run:

- Install Dependencies

```
cd <project-folder>
npm install
```

- Run the Project

```
npm run dev
```

- Navigate to `http://localhost:3000`

## Build and Run:
This is the environment for lighthousing

- Build the Project

```
npm run build
```

- Build the Project

```
npm run preview
```
- Navigate to `http://localhost:4173`

## Lighthouse optimization applied
- aria for buttons and links.
- Some layout shift fixed.
- meta tag for SEO.

![image](https://github.com/user-attachments/assets/f12c0f6e-bc94-4400-a214-fc3a04f5aa43)

## Folder Structure

```
├── src
│   ├── components (common components which can be shared and re-use in multiple place)
│   │   ├── **/*.less (Additional style in case tailwind can not support)
|   |   ├── hooks/use*.ts (Custom hook to handle logic for that component (may not can be reuse))
|   |   ├── index.tsx (Component only contain UI state)
│   ├── locales (i18n)
│   ├── layout
│   │   ├── components (common layout components which can be shared and re-use in multiple layout)
│   │   ├── LayoutName (folder: Define page container for specific page)
|   |   |   ├── components(components serves for specific Layout)
|   |   |   ├── hooks/use*.ts (Custom hook to handle logic for that Layout (may not can be reuse))
|   |   |   ├── index.tsx (Component only contain UI state)
│   ├── services (API calls)
│   │   ├── ServiceName (related to one model)
│   ├── hooks (custom hook handle common logic (not related to one component))
|   |   ├── use*.ts
│   ├── pages
|   |   |   ├── PageName (folder contain page source code)
|   |   |   |   ├── components (Container all components use in specific page)
|   |   |   |   |   ├── ComponentName
|   |   |   |   |   |   ├── hooks/useComponentName.ts (Custom hook to handle logic for component (may not can be reuse))
|   |   |   |   |   |   ├── ComponentName.tsx
|   |   |   |   |   |   ├── ComponentName.less
|   |   |   |   |   |   ├── index.ts
|   |   |   |   ├── hooks/*.ts (Define logics for specific page)
|   |   |   |   ├── index.tsx
|   |   |   |   ├── PageName.less (styles for page)
│   ├── styles
|   |   ├── globals.less (Declare global css here)
│   ├── utils (Define commonly used Logic here)
|   |   ├── *.ts
├── public (image, logo, fav.ico)
├── package.json
├── package-lock.json
├── postcss.config.ts
└── tsconfig.json (Config path, import and export for TypeScript)
```
