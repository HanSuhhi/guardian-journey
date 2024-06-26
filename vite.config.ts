import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { stateCreator } from "./auto-state.plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), stateCreator()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  envPrefix: [
    "MAX_MESSAGE_LENGTH",
    "GAP",
  ],
});
