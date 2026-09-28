import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base path for GitHub Pages (repo name)
export default defineConfig({
  plugins: [react()],
  base: '/jazeera-arabi/'
})
