import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/animated-tailwind-sidebar/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
