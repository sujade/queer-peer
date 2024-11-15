module.exports = {
  parserOptions: {
    tsconfigRootDir: ".",
    project: ["./tsconfig.json"],
  },
  extends: ["next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking", "plugin:prettier/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", require("./.prettierrc.json")],
  },
};
