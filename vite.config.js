import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGitHubPagesBuild = process.env.GITHUB_PAGES === 'true'
const pagesBase = isGitHubPagesBuild && repoName ? `/${repoName}/` : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: pagesBase,
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
  },
})
