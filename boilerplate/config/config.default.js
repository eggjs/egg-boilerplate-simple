'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here

  return config;
};
