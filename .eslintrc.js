module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/global': true,
  },
  extends: ['plugin:cypress/recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
  },
};
