'use strict';

module.exports = app => {
  app.get('/home', app.controller.home);

  app.redirect('/', '/news');
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
};
