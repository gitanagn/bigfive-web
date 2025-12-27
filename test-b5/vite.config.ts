import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: '../../www/wp-content/plugins/psy-tests/assets/b5',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        results: resolve(__dirname, 'results.html'),
        // Add more entry points as needed
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
