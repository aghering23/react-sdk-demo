import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: false, // Keep HTTP for now - will use ngrok or deploy to test
    host: 'localhost',
    port: 5173
  }
})
