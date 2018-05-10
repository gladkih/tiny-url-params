# tiny-url-params

## Installation

```
npm install tiny-url-params
```

## Usage

```js
'use strict';
var tinyUrlParams = require('tinyUrlParams');
```

## Example
```js
var params = tinyUrlParams('https://www.site.com/?customer=Maxim&goods=game');
console.log(params); // output = { customer: 'Maxim', goods: 'game' };
```

## Testing
I have unit tests that run under Node.js. You can run these tests with the `npm test` command.


## License

[MIT](LICENSE)
