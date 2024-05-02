import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Neroo Marketing Agency",
        short_name: "Neroo",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/src/assets/imgs/neroo (1).jpeg",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/src/assets/imgs/neroo (1).jpeg",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#DD1102",
      },
    }),
  ],
});
