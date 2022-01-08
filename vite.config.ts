import path from "path";
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import PackageData from "./package.json";

/**
 * Verifies if an included module is external or internal. Used to exclude
 * imports from "node_modules".
 *
 * @param id
 *     Module name/path
 * @returns
 */
const isModuleExternal = (id: string) => {
  return !id.startsWith(".") && !path.isAbsolute(id);
};

export default defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  build: {
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "lib/index.tsx"),
      fileName: (format) => `index.${format}.js`,
      name: PackageData.name,
    },
    sourcemap: false,
    rollupOptions: {
      external: isModuleExternal,
      plugins: [
        typescript({
          // Required, since test and build behave differently
          tsconfig:
            process.env.NODE_ENV === "production"
              ? "./tsconfig.json"
              : "./tsconfig.development.json",
        }),
      ],
    },
  },
  plugins: [
    tsconfigPaths({
      // Required, since test and build behave differently
      projects:
        process.env.NODE_ENV === "production"
          ? ["./tsconfig.json"]
          : ["./tsconfig.development.json"],
    }),
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
    },
  },
});
