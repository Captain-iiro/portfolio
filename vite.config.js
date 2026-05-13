import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuration des alias pour les imports
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Configuration du serveur de développement
  server: {
    port: 3000,
    open: true,
    host: true, // Permet l'accès depuis d'autres appareils
  },

  // Configuration du build
  build: {
    outDir: "dist",
    sourcemap: true, // Pour le debugging en production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // Vous pouvez ajouter d'autres chunks selon vos besoins
        },
      },
    },
  },

  // Configuration pour les tests
  test: {
    globals: true,
    environment: "jsdom",
  },

  // Configuration des assets
  assetsInclude: ["**/*.webp", "**/*.svg"],

  // Configuration pour l'optimisation
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
