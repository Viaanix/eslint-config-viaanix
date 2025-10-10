# eslint-config-viaanix

Custom eslint-config for Eslint 9+
Based on [StandardJs](https://github.com/standard/eslint-config-standard)

## Install

```bash
npm install git@github.com:Viaanix/eslint-config-viaanix.git
```

## Update

Update config in project

```bash
npm update eslint-config-viaanix
```

## Use

`eslint.config.js`

Default Settings:

```javascript
import { defineConfig } from 'eslint/config'

import viaanix from 'eslint-config-viaanix'
export default defineConfig([
  ...viaanix,
  {
    files: ['*.js']
  }
])
```

Override Settings:

```javascript
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

```
