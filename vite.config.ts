import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from "vite-plugin-svgr";


export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        proxy: {
            '/api/images': {
                target: 'http://localhost:5001/',
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },

})
