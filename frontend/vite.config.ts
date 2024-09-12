import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 4200,
        strictPort: true,
        origin: "http://0.0.0.0:4200"
    }
})
