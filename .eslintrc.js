module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "react/jsx-uses-react": "error",
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
