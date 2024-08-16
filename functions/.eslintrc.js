module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['/lib/**/*', '/generated/**/*'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    quotes: ['error', 'double'],
    'import/no-unresolved': 0,
    indent: ['error', 2],
    'max-len': ['error', { code: 120 }],
    '@next/next/no-document-import-in-page': 'off',
  },
};
