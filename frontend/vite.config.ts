import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',    // Use WebSocket
      host: 'localhost', // External host
      port: 80,          // MUST be 80 to match Nginx
    },
    watch: {
      usePolling: true,
    }
  },
})