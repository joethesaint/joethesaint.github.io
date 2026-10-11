import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'three-core', test: /node_modules\/three\/build\/three\.core\.js/, priority: 20 },
            { name: 'three-renderer', test: /node_modules\/three\/build\/three\.module\.js/, priority: 10 },
          ],
        },
      },
    },
  },
})
