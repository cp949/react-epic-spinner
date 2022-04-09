module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },

    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': [1],
        'no-console': 'off',
        'no-empty': [0],
        // 'comma-dangle': [
        //     'warn',
        //     {
        //         arrays: 'always-multiline',
        //         objects: 'always-multiline',
        //         imports: 'always-multiline',
        //         exports: 'always-multiline',
        //         functions: 'never',
        //     },
        // ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        semi: [1, 'never'],
        'max-len': [
            1,
            {
                code: 120,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreTemplateLiterals: true,
                ignoreStrings: true,
            },
        ],
        indent: 'off',
        'no-restricted-syntax': [
            'warn',
            {
                selector: 'SequenceExpression',
                message: 'The comma operator is confusing and a common mistake. Don’t use it!',
            },
        ],
    },
}
