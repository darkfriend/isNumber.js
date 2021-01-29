Check variable on number (javascript)
=====

## How Install

``` 
npm i isnmbr -S
```

### import
```javascript
import isNumber from 'isnmbr';
```
or
```javascript
const isNumber = require('isnmbr');
```

## How to use?

### examples

#### true

```javascript
import isNumber from 'isnmbr';

isNumber(5); // true
isNumber('5'); // true
isNumber(5.5); // true
isNumber('5.5'); // true
isNumber(.5); // true
isNumber('.5'); // true
isNumber(0xff); // true
isNumber(-5); // true
isNumber('-5'); // true

```

#### false

```javascript
import isNumber from 'isnmbr';

isNumber('5.5+1'); // false
isNumber('5.5+'); // false
isNumber('abc'); // false
isNumber('5.5abc'); // false
isNumber(function(){ return 0; }); // false
isNumber(true); // false
isNumber(false); // false
isNumber(Infinity); // false

```

## Testing

```bash 
cd ./node_modules/isnmbr && npm i && npm test 
```

## License

  MIT