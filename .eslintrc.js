module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'airbnb-base',
        'prettier' // 打开prettier防冲突扩展
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
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
        ]
    }
}
