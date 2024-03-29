import { resolve } from 'path'
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: './dist',
        cssMinify: 'lightningcss',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    }
})