import { resolve } from 'path'
import { defineConfig } from "vite";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

export default defineConfig({
    base: '/portfolio/',
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
    },
    css: {
        extract: true,
    },
})



