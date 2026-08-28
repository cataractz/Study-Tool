import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // The AI Clinical Assistant calls a live backend and can't work offline; everything
      // else (disease library, drug database, calculators, references, lens database) is
      // static data bundled at build time, so precaching the app shell is enough to make the
      // rest of the site fully usable with no connection.
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        // The whole disease/drug/calculator/reference/lens dataset ships as one bundled JS
        // chunk (no backend to page it from), well past Workbox's 2 MB precache default.
        maximumFileSizeToCacheInBytes: 12 * 1024 * 1024,
        navigateFallback: `${base}index.html`,
        // GitHub Pages 404.html already handles deep-link fallback for online loads; this
        // makes the same deep links resolve from the service worker cache when offline.
        runtimeCaching: [
          {
            urlPattern: ({ url }: { url: URL }) => url.pathname.startsWith(`${base}`),
            handler: 'CacheFirst',
            options: { cacheName: 'app-shell' },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        id: '/',
        name: 'Optometry Clinical Learning Platform',
        short_name: 'OD Study Tool',
        description:
          'Interactive tools for learning ocular disease, pharmacology, diagnosis, and clinical decision-making — works fully offline once installed.',
        theme_color: '#1d4ed8',
        background_color: '#f8fafc',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
})
