import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      external: [
        /^node:.*/,
        "react-type-animation",
        "*",
        "type-animation",
        "react-type-animation/dist/cjs"
      ]
    }
  }
})
