import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5500,
    proxy: {
      "/api": {
        target: "https://mbk-yuzyil.furkanulutas0.repl.co/",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
