import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.libsplit.html',
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/chart.js')) {
            return 'vendor-chartjs'
          }
          if (id.includes('node_modules/@tiptap')) {
            return 'vendor-tiptap'
          }
          if (id.includes('node_modules/react')) {
            return 'vendor-react'
          }
        },
      },
    },
  },
})
