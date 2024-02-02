import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
    environment: "jsdom",
    clearMocks: true,
    globals: true,
  },
});
