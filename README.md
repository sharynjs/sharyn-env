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

This package runs `dotenv/config`, converts some string values into their related primitives, and exports `process.env` for a convenient access.

Just use `@sharyn/env` in every file that needs access to the environment, and forget about `dotenv` and `process.env` completely.

## Conversion

By default, `@sharyn/env` will convert some string values of `process.env` (case insensitive):

```sh
VAR='true' # true
VAR='TRUE' # true
VAR='True' # true
VAR='TrUe' # true
VAR='false' # false
VAR='null' # null
VAR='undefined' # undefined
VAR='0' # 0
VAR='1' # 1
VAR='2' # '2'
```

If you do not want this conversion, you can import `@sharyn/env/raw` instead.

## Caveats

If `process.env` is modified after the code is initially evaluated, the env of `@sharyn/env` won't have those modifications:

**.env**

```.env
FOO='FOO'
```

**script**

```js
import { FOO } from '@sharyn/env'

process.env.FOO = 'BAR'

console.log(FOO) // 'FOO'
console.log(process.env.FOO) // 'BAR'
```

So if you use 3rd-party libraries that modify your `process.env`, those changes might not appear. It is the case with `process.env.STAGE` of [`serverless-offline`](https://github.com/dherault/serverless-offline).

## Credits

Hey, I am [@verekia](https://github.com/verekia) and this package is part of a library I am developing, [@sharynjs/sharyn](https://github.com/sharynjs/sharyn). The rest of the library is not ready to be used by the community.
