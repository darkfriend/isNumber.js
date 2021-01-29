Check variable on number (javascript)
=====

## How Install

``` 
npm i isnumber -S
```

### import
```javascript
import isNumber from 'isnumber';
```
or
```javascript
const isNumber = require('isnumber');
```

## How to use?

### examples

```javascript
import isNumber from 'isnumber';

isNumber(5); // true
isNumber('5'); // true
isNumber(5.5); // true
isNumber('5.5'); // true
isNumber(.5); // true
isNumber('.5'); // true
isNumber('5.5+1'); // false
isNumber('5.5+'); // false
isNumber('abc'); // false
isNumber('5.5abc'); // false
isNumber(function(){ return 0; }); // false
isNumber(true); // false
isNumber(false); // false
isNumber(Infinity); // false
isNumber(0xff); // true

```

## Testing

```bash 
cd ./node_modules/isnumber && npm i && npm test 
```

## License

  MIT