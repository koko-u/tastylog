module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-var': 'error',
  },
}
