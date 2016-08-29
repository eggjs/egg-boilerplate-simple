'use strict';

// organization your app middlewares
exports.middleware = [
  'responseTime',
];

// config for middleware / plugin
exports.responseTime = {
  header: 'x-response-time',
};

