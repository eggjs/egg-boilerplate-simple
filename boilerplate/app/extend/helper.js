'use strict';

// can use in template {{ helper.lowercaseFirst(str) }}
exports.lowercaseFirst = str => str[0].toLowerCase() + str.substring(1);

