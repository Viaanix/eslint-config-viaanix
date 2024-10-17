import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

import * as standardishConfig from './eslint-config-standardish.js'

export default [
  standardishConfig,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-duplicate-imports': ['error', { includeExports: true }],
      '@stylistic/max-len': ['error', { code: 120 }]
    }
  }
]
