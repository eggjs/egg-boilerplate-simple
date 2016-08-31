'use strict';

exports.lowercaseFirst = str => str[0].toLowerCase() + str.substring(1);

// can use in template {{ helper.domain(url) }}
exports.domain = url => url && url.split('/')[2];
