// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from 'tailwindcss'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: "/book-landing-page/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

