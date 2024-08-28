import globals from "globals";
import pluginJs from "@eslint/js";
import standard from "./eslint-config-standard.js";
import stylistic from "@stylistic/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...standard,
  pluginJs.configs.recommended,
  {
    ignores: [".src/dist/"],
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@stylistic": stylistic,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-duplicate-imports": ["error", { includeExports: true }],
      "@stylistic/max-len": ["error", { code: 120 }],
    },
  },
];
