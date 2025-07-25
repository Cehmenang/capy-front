import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        '*': { target: ["https://capybara-backend.vercel.app", "http://localhost:3000"] }
      }
  }
})
