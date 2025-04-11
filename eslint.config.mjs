import { defineConfig } from "eslint/config";
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "off"
    }
  },
  { ignores: ["node_modules/*", "static/*", "custom/*", "docs/*", "jest.config.js", "knexfile.js"], },
]);
