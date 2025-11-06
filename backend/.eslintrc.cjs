module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true
  },
  parserOptions: {
    project: ['./tsconfig.json']
  },
  extends: [
    'standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
