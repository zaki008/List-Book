module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'react-native'],
      extends: [
        'plugin:react/recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
    {
      files: '**/*.+(js|jsx|ts|tsx)',
      env: {
        commonjs: true,
        es6: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
      },
      extends: [
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
  rules: {
    'no-undef': 'off',
  },
};
