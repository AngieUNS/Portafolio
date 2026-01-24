import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  publicDir: 'public', // 3. Asegura que Vite use esta carpeta
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})