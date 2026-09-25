# Story Studio

Create and visually edit Instagram Stories from product photos.

Live site: https://story-studio-mariam.mariampetrosyan924.chatgpt.site

## Features

- Upload up to 6 JPG, PNG or WebP photos (10 MB each).
- Minimal, Bold and Editorial layouts.
- Move text on the canvas, edit wording, fonts, size, weight, color and alignment.
- Add/remove text layers; undo and redo changes.
- Export 1080 × 1920 PNG stories.
- Images are processed in the browser, without server uploads.

AI generation is not connected yet. Current story generation uses editable templates. Edits live in the current browser session; download your work before closing or reloading.

## Local development

Requires Node.js >=22.13.0.

```sh
npm run install:ci
npm run dev
```

Open the local URL printed in the terminal (normally http://localhost:5173).

## Validation and production build

```sh
npx tsc --noEmit
npm run build
npm start
```

Built with React, TypeScript, Vinext/Vite and Canvas. Hosted with Sites. Pushing to GitHub alone does not redeploy the live site.

## Source

- `app/page.tsx`: upload and story setup
- `app/story-editor.tsx`: visual text editor and PNG export
- `app/globals.css`: styling and local Armenian fonts
- `public/fonts`: Noto Sans Armenian and Noto Serif Armenian fonts

Never commit API keys or `.env` files.
