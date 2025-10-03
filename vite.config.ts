import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // permet d'utiliser expect() et test() sans import
    environment: "jsdom", // simule un navigateur pour React
    setupFiles: "./src/setupTests.ts", // fichier pour config globale
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
