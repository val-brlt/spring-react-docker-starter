import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
			usePolling: true,
		},
    port: 5173,  // Port pour le développement
    strictPort: true,
    host: '0.0.0.0',  // Expose à l'extérieur du conteneur
  }
})
