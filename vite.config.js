// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom'],
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // No es necesario marcar react-router-dom como external
    rollupOptions: {
      // external: ['react-router-dom'], // Elimina esta línea
    },
  },
})
