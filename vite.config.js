// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 80, // ถ้าไม่จำเป็นอย่าใช้ port 80 ตอน dev
  },
  plugins: [react()],
})
