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
    quotes: "off",
    "quote-props": "off",
    "comma-dangle": "off",
    "no-empty-pattern": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "warn",
  },
};
