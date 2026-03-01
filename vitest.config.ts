import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    environment: "node",
    coverage: {
      reporter: ["text", "html"]
    },
    exclude: ["node_modules", "dist"]
  }
});