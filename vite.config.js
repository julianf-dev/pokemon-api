import { defineConfig } from "vite";

export default defineConfig({
    base: '/pokemon-api/',
    build: {
        outDir: "dist",
        assetsDir: "assets"
    },
    plugins: []
})