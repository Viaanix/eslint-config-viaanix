import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import stylistic from '@stylistic/eslint-plugin'
import importNewlines from 'eslint-plugin-import-newlines'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import standardishConfig from './eslint-config-standardish.js'

export const vxts = [
  tseslint.configs.strict,
  tseslint.configs.stylistic
]

export const configOverride = (options = {
  maxLineLength: 100,
  tabWidth: 4
}) => {
  const { maxLineLength, tabWidth } = options
  return [
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      extends: [eslint.configs.recommended],
      languageOptions: {
        globals: globals.node
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
    },
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      extends: [standardishConfig],
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
        'no-useless-concat': 'error',
        'prefer-template': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-duplicate-imports': [
          'error',
          {
            includeExports: true
          }
        ],
        '@stylistic/array-bracket-newline': ['error', { multiline: true, minItems: 6 }],
        '@stylistic/max-len': [
          'warn', {
            code: maxLineLength,
            tabWidth,
            ignoreComments: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true
          }
        ],
        '@stylistic/quote-props': [
          'error',
          'consistent',
          {
            unnecessary: false
          }
        ],
        'import-newlines/enforce': [
          'error',
          {
            'items': 6,
            'max-len': maxLineLength
          }
        ]
      }
    }
  ]
}

const baseConfigs = configOverride()

export default baseConfigs
