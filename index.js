import globals from 'globals'
import pluginJs from '@eslint/js'
import standard from './eslint-config-standard.js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...standard,
  pluginJs.configs.recommended,
  {
    ignores: ['.src/dist/'],
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'sort-imports': ['error'],
      'no-duplicate-imports': ['error', { includeExports: true }],
      '@stylistic/max-len': ['error', { code: 120 }]
    }
  }
]
