import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".next/", "node_modules/"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  { settings: { react: { version: "detect" } } },
  {
    files: ["tests/**/*.{js,jsx}", "**/*.test.{js,jsx}"],
    ...pluginJest.configs["flat/recommended"],
  },
  eslintConfigPrettier,
]);
