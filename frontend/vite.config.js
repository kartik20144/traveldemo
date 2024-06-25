import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from "path"

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: '', // Relative directory for static assets in the build output
    //minify: 'terser', // Minification strategy (terser or esbuild)
    sourcemap: false, // Generate source maps for production build
  },

  optimizeDeps: {
    include: ['react', 'react-dom'], // Dependencies to include in bundle optimization
  },
});
