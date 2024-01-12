import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 100000000
},
  base: '/bookstorereact/', 
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  } 
  
})

