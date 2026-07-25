import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  assetsInclude: ['**/*.usdz'],
  plugins: [
    tailwindcss(),
    svelte()
  ],
  resolve: {
     alias: {
        $src: fileURLToPath(new URL('./src', import.meta.url)),
     }
   },
   base: '/plainSvelte'
})
