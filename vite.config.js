import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  optimizeDeps: {
    exclude: ['@sveltejs/kit']
  },
  server: {
    fs: {
      allow: ['..']
    }
  },
  kit: {
    files: {
      assets: 'static'
    }
  }
});
