import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    reactRefresh(),
    legacy({
      targets: ['chrome >= 49'], // Adjust based on CEP version
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  base: './', // Important for CEP to find assets
  build: {
    target: 'es2015', // Ensure code is transpiled appropriately
    outDir: '.', // Output to current directory to match CEP expectations
    assetsDir: '.', // Place assets in the root directory
    rollupOptions: {
      input: 'index.html',
    },
  },
});
