module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@wemake-services/javascript",
    "@wemake-services/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react"],
  ignorePatterns: ["src/index.tsx", "src/reportWebVitals.ts"],
  rules: {
    "unicorn/filename-case": "off",
    quotes: "off",
    "@typescript-eslint/semi": "off",
    "quote-props": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-empty-pattern": "off",
  },
};
