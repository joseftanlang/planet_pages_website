import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages - replace with your repo name
  base: process.env.GITHUB_PAGES === 'true' 
    ? '/planet_pages_website/'  // Your repo name
    : '/',
  
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true,
      // Disable Base44 features when building for GitHub Pages
      enabled: process.env.GITHUB_PAGES !== 'true'
    }),
    react(),
  ]
})