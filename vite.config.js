import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  assetsInclude: ['**/*.usdz'],
  plugins: [
    tailwindcss(),
    svelte()
  ],
  base: '/plainSvelte/'
})
