import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import remdx from "@nkzw/vite-plugin-remdx";

export default defineConfig({
  plugins: [remdx(), react()],
});
