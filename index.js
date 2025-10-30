import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { globalIgnores } from 'eslint/config'
import importNewlines from 'eslint-plugin-import-newlines'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import standardishConfig from './eslint-config-standardish.js'

export const vxts = [
  tseslint.configs.strict,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  stylistic.configs.recommended,
  {
    files: ['**/*.{ts}'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-annotation-spacing': ['error', { 'before': false, 'after': true }]
    }
  }
]

export const configOverride = (options = {
  maxLineLength: 100,
  tabWidth: 4
}) => {
  const { maxLineLength, tabWidth } = options
  return [
    globalIgnores(['.*/', 'dist/', 'docs/', 'package-lock.json']),
    {
      plugins: { js },
      files: ['**/*.{js,mjs,cjs,ts}'],
      extends: ['js/recommended'],
      languageOptions: {
        globals: globals.node
      }
    },
    // {
    //   files: ['**/*.json'],
    //   plugins: { json },
    //   language: 'json/json',
    //   extends: ['json/recommended']
    // },
    // {
    //   files: ['**/*.jsonc'],
    //   plugins: { json },
    //   language: 'json/jsonc',
    //   extends: ['json/recommended']
    // },
    // {
    //   files: ['**/*.md'],
    //   plugins: { markdown },
    //   language: 'markdown/gfm',
    //   extends: ['markdown/recommended']
    // },
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
            includeExports: true,
            allowSeparateTypeImports: true
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
