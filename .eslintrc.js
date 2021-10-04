module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": '@typescript-eslint/parser',
    "extends": [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:react-hooks/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "require-jsdoc": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off"
    }
}