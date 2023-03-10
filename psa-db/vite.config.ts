import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/cards": {
        target: "http://localhost:3005",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
