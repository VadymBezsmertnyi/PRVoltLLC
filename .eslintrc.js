module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@wemake-services/javascript",
    "@wemake-services/typescript/recommended",
    "@wemake-services/stylelint-config-scss",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {},
};
