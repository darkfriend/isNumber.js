const chai = require('chai');
const assert = chai.assert;
const {isNumber, isInt, isFloat} = require('../index');

let variables = {
    isNumber: [
        {
            value: 5,
            result: true,
        },
        {
            value: '5',
            result: true,
        },
        {
            value: 5.5,
            result: true,
        },
        {
            value: '5.5',
            result: true,
        },
        {
            value: .5,
            result: true,
        },
        {
            value: '.5',
            result: true,
        },
        {
            value: '5.5+1',
            result: false,
        },
        {
            value: '5.5+',
            result: false,
        },
        {
            value: 'abc',
            result: false,
        },
        {
            value: '5.5abc',
            result: false,
        },
        {
            value: function(){ return 0; },
            result: false,
        },
        {
            value: true,
            result: false,
        },
        {
            value: false,
            result: false,
        },
        {
            value: Infinity,
            result: false,
        },
        {
            value: 0xff,
            result: true,
        },
        {
            value: -5,
            result: true,
        },
        {
            value: '-5',
            result: true,
        },
    ],
    isInt: [
        {
            value: 5,
            result: true,
        },
        {
            value: '5',
            result: true,
        },
        {
            value: -5,
            result: true,
        },
        {
            value: '-5',
            result: true,
        },
        {
            value: 5.5,
            result: false,
        },
        {
            value: '5.5',
            result: false,
        },
        {
            value: -5.5,
            result: false,
        },
        {
            value: '-5.5',
            result: false,
        },
        {
            value: '5abc',
            result: false,
        },
    ],
    isFloat: [
        {
            value: 5.5,
            result: true,
        },
        {
            value: '5.5',
            result: true,
        },
        {
            value: -5.5,
            result: true,
        },
        {
            value: '-5.5',
            result: true,
        },
        {
            value: 5,
            result: false,
        },
        {
            value: '5',
            result: false,
        },
        {
            value: -5,
            result: false,
        },
        {
            value: '-5',
            result: false,
        },
        {
            value: '5.5abc',
            result: false,
        },
    ],
};

for(let method in variables) {
    for (let variable of variables[method]) {
        let variableTitle = typeof variable.value == 'string' ? `'${variable.value}'` : variable.value;
        it(
            `${method}(${variableTitle}); // ${variable.result ? 'true' : 'false'}`,
            () => {
                switch (method) {
                    case 'isNumber':
                        assert.equal(isNumber(variable.value), variable.result);
                        break;
                    case 'isInt':
                        assert.equal(isInt(variable.value), variable.result);
                        break;
                    case 'isFloat':
                        assert.equal(isFloat(variable.value), variable.result);
                        break;
                }
            }
        );
    }
}
