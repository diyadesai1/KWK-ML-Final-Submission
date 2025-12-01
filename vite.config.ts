import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/KWK-ML-Final-Submission/', // adjust if your GitHub repo name differs
  plugins: [react()],
})
