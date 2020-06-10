# ensure-dotenv
A package to ensure that you have set all your dotenv variables

## Install

```sh
npm install ensure-dotenv
```

## Usage

```javascript
require('ensure-dotenv')(['TOKEN', 'NODE_ENV']); // an error will be thrown if a variable is not set.
```

## License

MIT © Kevin Hansen