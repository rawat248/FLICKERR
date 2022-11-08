module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  plugins: ['react'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'linebreak-style': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always']

  }
};
