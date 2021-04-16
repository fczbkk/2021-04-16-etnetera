const isDev = process.env.NODE_ENV === 'development'

const noConsoleConfig = { allow: ['warn', 'error', 'info', 'debug'] }

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Developer quality of life settings:
    // These rules are often violated during development, because of incomplete code, commented out code, debugging, etc. That's ok, as long as code like that does not get into the production.
    'no-console': isDev ? ['warn', noConsoleConfig] : ['error', noConsoleConfig],
    'comma-dangle': isDev ? 'warn' : 'error',
    'no-multiple-empty-lines': isDev ? 'warn' : 'error',
    'spaced-comment': isDev ? 'warn' : 'error',
    'no-debugger': isDev ? 'warn' : 'error',
    'no-unused-vars': isDev ? 'warn' : 'error',

    // This helps prevent adding of unwanted libraries and enforces their correct use.
    'no-restricted-imports': ['error', {
      paths: [
        {
          name: 'lodash',
          message: 'Use lodash-es instead!'
        },
        {
          name: 'lodash-es',
          message: 'Use tree-shakable pattern, ie. `import foo from lodash-es/foo`'
        }
      ]
    }]
  }
}
