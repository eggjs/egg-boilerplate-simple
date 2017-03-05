'use strict';

const uuid = require('uuid/v4');

module.exports = {
  name: {
    desc: 'project name',
  },
  description: {
    desc: 'project description',
  },
  author: {
    desc: 'project author',
  },
  keys: {
    desc: 'cookie security keys',
    default: uuid(),
  },
};
