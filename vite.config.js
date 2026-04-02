import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // User Pages repo (Skinclinic.github.io) serves from root domain
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
})
