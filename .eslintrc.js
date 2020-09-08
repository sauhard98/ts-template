module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'prettier',
  ],
  parser: 'babel-eslint',
  plugins: ['jsx-a11y'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/no-unescaped-entities': ['error', { forbid: ['>', '"', '}'] }],

    curly: 'error',
    eqeqeq: 'error',
    'no-eq-null': 'error',

    // Variables
    'no-use-before-define': ['error', 'nofunc'],

    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
    'key-spacing': ['error', { mode: 'minimum' }],
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'error',

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
  },
};
