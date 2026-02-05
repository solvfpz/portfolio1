import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/', // 🔥 REQUIRED FOR VERCEL
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
    },
    define: {
      // ✅ Use import.meta.env instead of process.env
      __GEMINI_API_KEY__: JSON.stringify(env.VITE_GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
})
