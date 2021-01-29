Check variable on number (javascript)
=====

Methods
* isNumber - check variable on number
* isInt - check variable on integer
* inFloat - check variable on float

## How Install

``` 
npm i isnmbr -S
```

### import
```javascript
import {isNumber, isInt, isFloat} from 'isnmbr';
```
or
```javascript
const {isNumber, isInt, isFloat} = require('isnmbr');
```

## How to use?

#### true

```javascript
import {isNumber, isInt, isFloat} from 'isnmbr';

isNumber(5); // true
isNumber('5'); // true
isNumber(5.5); // true
isNumber('5.5'); // true
isNumber(.5); // true
isNumber('.5'); // true
isNumber(0xff); // true
isNumber(-5); // true
isNumber('-5'); // true

isInt(5) // true
isInt('5') // true
isInt(-5) // true
isInt('-5') // true

isFloat(5.5) // true
isFloat('5.5') // true
isFloat(-5.5) // true
isFloat('-5.5') // true

```

#### false

```javascript
import {isNumber, isInt, isFloat} from 'isnmbr';

isNumber('5.5+1'); // false
isNumber('5.5+'); // false
isNumber('abc'); // false
isNumber('5.5abc'); // false
isNumber(function(){ return 0; }); // false
isNumber(true); // false
isNumber(false); // false
isNumber(Infinity); // false

isInt(5.5) // false
isInt('5.5') // false
isInt(-5.5) // false
isInt('-5.5') // false

isFloat(5) // false
isFloat('5') // false
isFloat(-5) // false
isFloat('-5') // false

```

## Testing

```bash 
cd ./node_modules/isnmbr && npm i && npm test 
```

## License

  MIT