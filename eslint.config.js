import { defineConfig } from 'eslint/config'

import { configOverride } from './index.js'

export default defineConfig([
  ...configOverride({
    maxLineLength: 100,
    tabWidth: 4
  }),
  {
    files: ['*.js']
  }
])
