import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite acceso desde cualquier IP en la red local
    port: 3000,       // Puedes especificar otro puerto si lo deseas
  }
})