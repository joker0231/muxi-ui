module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier' // 打开prettier防冲突扩展
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'import', '@typescript-eslint', 'prettier', 'jsx-a11y'],
    rules: {
        'prettier/prettier': 'error',
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                // 关闭对label标签的检测
                labelComponents: ['CustomInputLabel'],
                labelAttributes: ['label'],
                controlComponents: ['CustomInput'],
                depth: 3
            }
        ],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
    },
    settings: {
        react: {
            version: 'detact'
        }
    }
}
