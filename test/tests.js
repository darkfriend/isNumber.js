const chai = require('chai');
const assert = chai.assert;
const isNumber = require('../index');

let variables = [
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
];

for(let variable of variables) {
    let variableTitle = typeof variable.value == 'string' ? `'${variable.value}'` : variable.value;
    it(
        `isNumber(${variableTitle}); // ${variable.result ? 'true' : 'false'}`,
        () => {
            assert.equal(isNumber(variable.value), variable.result);
        }
    );
}