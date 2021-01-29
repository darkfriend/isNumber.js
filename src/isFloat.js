'use strict';

const isNumber = require('./isNumber');

/**
 * Check variable on number (with polyfill)
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @return {boolean}
 */
function isFloat(variable) {
    return isNumber(variable) && (variable % 1 !== 0);
}

module.exports = isFloat;

// Allow use of default import syntax in TypeScript
module.exports.default = isFloat;