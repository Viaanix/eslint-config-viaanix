import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import importNewlines from 'eslint-plugin-import-newlines'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import standardishConfig from './eslint-config-standardish.js'

const maxLineLength = 100
const tabWidth = 4

export default [
  js.configs.recommended,
  tseslint.configs.recommended,
  // tseslint.configs.recommendedTypeChecked,
  // tseslint.configs.strict,
  tseslint.configs.stylistic,
  standardishConfig,
  {
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@stylistic': stylistic,
      'import-newlines': importNewlines
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-duplicate-imports': [
        'error',
        {
          includeExports: true
        }
      ],
      '@stylistic/array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 6
        }
      ],
      '@stylistic/max-len': [
        'warn', {
          code: maxLineLength,
          tabWidth,
          ignoreComments: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true
        }
      ],
      'import-newlines/enforce': [
        'error',
        {
          items: 6,
          'max-len': maxLineLength
        }
      ]
    }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended']
  }
]
