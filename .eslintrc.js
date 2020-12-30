module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  extends: 'airbnb',

  rules: {
    'comma-spacing': 0,
    'comma-dangle': 0,
    semi: 0,
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/state-in-constructor': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'template-tag-spacing': 0,
    'no-trailing-spaces': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': 0
  },
};
