'use strict';

exports.list = function* newsListController() {
  const pageSize = this.app.config.news.pageSize;
  const page = parseInt(this.query.page) || 1;

  const idList = yield this.service.hackerNews.getTopStories(page);
  // get itemInfo parallel
  const newsList = yield idList.map(id => this.service.hackerNews.getItem(id));
  yield this.render('news/list.tpl', { list: newsList, page, pageSize });
};

exports.detail = function* newsDetailController() {
  this.body = `news detail #${this.params.id}`;
};

