import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      // ➕ Ajoute ceci pour transformer certaines règles en warning
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "off",
      "no-case-declarations": "off"
    }
  },
  { ignores: ["node_modules/*", "static/*", "custom/*", "docs/*", "jest.config.js", "knexfile.js"], },
]);
