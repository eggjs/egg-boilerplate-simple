'use strict';

// organization your app middlewares
exports.middleware = [
  'responseTime',
];

// config for middleware / plugin
exports.responseTime = {
  header: 'x-response-time',
};

exports.news = {
  pageSize: 30,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
