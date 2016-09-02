'use strict';

module.exports = app => {
  app.get('/', app.controller.home);
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
};
