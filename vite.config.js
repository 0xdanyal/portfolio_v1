import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split vendor chunk for faster loading
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
