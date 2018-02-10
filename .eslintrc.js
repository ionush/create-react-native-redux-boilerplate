module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  parser: 'babel-eslint',
};
