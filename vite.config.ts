/* eslint-env node */
import { resolve } from 'path'
import { defineConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig( {
  root: './public',

  build: {
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      input: './public/index.html'
    }
  },

  server: {
    port: 8080,
  },

  plugins: [
    tsconfigPaths(),
  ],

  resolve: {
    alias: {
      '@': resolve( __dirname, 'src' ),
    },
  },
} )
