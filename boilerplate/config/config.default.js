'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const exports = {};

  // organization your app middlewares
  exports.middleware = [
    'responseTime',
  ];

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
  };

  // config for middleware / plugin
  exports.responseTime = {
    header: 'x-response-time',
  };

  exports.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  return exports;
};
