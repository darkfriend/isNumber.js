'use strict';

/**
 * Check variable on number
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @return {boolean}
 */
function isNumber(variable) {
    return (typeof variable === "string" || typeof variable === "number") && variable!==Infinity && !isNaN(variable) && !isNaN(parseFloat(variable));
}

module.exports = isNumber;

// Allow use of default import syntax in TypeScript
module.exports.default = isNumber;