# eslint-config-viaanix
Custom eslint-config for Eslint 9+
Based on [StandardJs](https://github.com/standard/eslint-config-standard)

# Install
`npm install git@github.com:Viaanix/eslint-config-viaanix.git`

# Update
`npm update eslint-config-viaanix`

#  Use
`eslint.config.js`
```javascript
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import viaanix from 'eslint-config-viaanix'
import globals from 'globals'

export default [
  ...viaanix,
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals.node
      }

    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-duplicate-imports': ['error', { includeExports: true }],
      '@stylistic/max-len': ['error', { code: 120 }]
      ....
    }
  },
  {
    ignores: ['src/dist/*', 'dist/*']
  }
]

```