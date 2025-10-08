import { defineConfig } from 'eslint/config'

import viaanix from './index.js'

export default defineConfig([
  ...viaanix,
  {
    files: ['*.js']
  }
])
