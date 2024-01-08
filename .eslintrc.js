module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'prettier',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {version: '18.2'},
  },
  plugins: ['prettier', 'react-native', 'jest'],
  parser: '@babel/eslint-parser',
};
