import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

resolve: {
  alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
