module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-shadow': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': 'off',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@', './src'],
          ['@constants', './src/constants'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@containers', './src/containers'],
          ['@services', './src/services'],
          ['@Types', './src/types'],
          ['@store', './src/store'],
        ],
        extensions: ['.ts', '.tsx', '.json'],
      },
      node: {
        extensions: ['*', '.js', '.ts', '.tsx'],
      },
    },
  },
};
