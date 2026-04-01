import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        proxyTimeout: 10000,   // 10 s — fail fast if backend is unreachable
        timeout: 10000,
      },
    },
  },
});
