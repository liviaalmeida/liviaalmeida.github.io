/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/eslint-config-typescript',
  ],
  ignorePatterns: [
    'coverage',
    'dist',
    'node_modules',
    'shims-*',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'indent': [
      'error',
      2,
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
  },
}
