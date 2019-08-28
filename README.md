# 🌹 @sharyn-env

## Usage

```bash
npm install --save-dev @sharyn/env
# or
yarn add --dev @sharyn/env
```

And import your environment variables directly:

```js
import { NODE_ENV, PORT, DATABASE_URL } from '@sharyn/env'
```

This package simply runs `dotenv/config` and exports `process.env` for a convenient access.

Just use `@sharyn/env` in every file that needs access to the environment, and forget about `dotenv` and `process.env` completely.

<hr />

<p align="center">
  This package is part of <a href="https://github.com/sharynjs/sharyn"><b>@sharynjs/sharyn</b></a>.
</p>
