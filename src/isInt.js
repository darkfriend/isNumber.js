'use strict';

const isNumber = require('./isNumber');

/**
 * Check variable on integer (with polyfill)
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @return {boolean}
 */
function isInt(variable) {
    return isNumber(variable) && (variable % 1 === 0);
}

module.exports = isInt;

// Allow use of default import syntax in TypeScript
module.exports.default = isInt;