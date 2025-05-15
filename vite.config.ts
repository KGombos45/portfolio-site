import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Match CRA's build folder name
    assetsDir: 'static', // Optional: CRA puts assets in `static/`
  },
  server: {
    open: true,
    port: 3000,
  },
  base: './', // Important if deploying to GitHub Pages or similar
});
