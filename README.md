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

## Credits

Hey, I am [@verekia](https://github.com/verekia) and this package is part of a library I am developing, [@sharynjs/sharyn](https://github.com/sharynjs/sharyn). The rest of the library is not ready to be used by the community.
