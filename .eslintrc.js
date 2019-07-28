module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
    }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
