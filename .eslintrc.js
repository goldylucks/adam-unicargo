module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:cypress/recommended'],
  plugins: ['react', 'prettier', 'import', 'cypress', 'chai-friendly'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
    'no-underscore-dangle': 0,
    'prettier/prettier': 'error',
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-indent': 0, // disabled in favor of prettir
    'react/jsx-one-expression-per-line': 0, // disabled in favor of prettir
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-has-content': 0,
    'import/order': [2, { 'newlines-between': 'always' }],
    'max-params': [2, { max: 2 }],
    'lines-between-class-members': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'no-trailing-spaces': 2,
    'comma-dangle': [2, 'always-multiline'],
    'no-use-before-define': 0,
    semi: [2, 'never'],
    'require-await': 2,
    'no-unexpected-multiline': 2,
    'class-methods-use-this': 0,
    'consistent-return': 0,
  },
}