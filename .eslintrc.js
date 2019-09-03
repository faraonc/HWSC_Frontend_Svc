module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'vue/no-unused-components': ['error', {
      ignoreWhenBindingPresent: false,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-underscore-dangle': ['error', { allow: ['_vm'] }],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreStrings: true,
    }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
