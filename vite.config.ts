import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'apk-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/FocusCrew.apk')) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive')
            res.setHeader('Content-Disposition', 'attachment; filename="FocusCrew.apk"')
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/FocusCrew.apk')) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive')
            res.setHeader('Content-Disposition', 'attachment; filename="FocusCrew.apk"')
          }
          next()
        })
      }
    }
  ],
})
