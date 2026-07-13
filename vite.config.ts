/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both at gr1mdrag0n.github.io/all-about-cb/
// and at the custom-domain root (all-about-cb.com/). HashRouter keeps the
// document path fixed, so relative asset URLs stay valid everywhere.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
})
