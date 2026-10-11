import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Plotly: 'readonly',
      },
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'test-results/', 'playwright-report/', 'public/out-of-office/', 'public/boids/', 'public/nerv/', 'public/biogas/vendor/', 'public/biogas/effects.js'],
  },
  {
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
    },
  },
]
