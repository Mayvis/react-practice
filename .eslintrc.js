module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'indent': [2, 2, { 'SwitchCase': 1 }],
    "semi": [2, "always"],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/display-name": 0,
  }
};