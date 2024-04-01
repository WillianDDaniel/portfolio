import { resolve } from 'path'
import { defineConfig } from "vite";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

export default defineConfig({
    build: {
        outDir: './dist',
        cssMinify: 'lightningcss',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
        plugins: [
            VitePluginWebpCompress()
        ]
    }
})



