'use strict';

const assert = require('power-assert');
const mm = require('egg-mock');

describe('test/app/service/HackerNews.test.js', () => {
  let app;
  let ctx;
  before(() => {
    app = mm.app();
    ctx = app.mockContext();
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('getTopStories', function* () {
    const list = yield ctx.service.hackerNews.getTopStories(1, 2);
    assert(list.length === 2);
  });

  it('getItem', function* () {
    const item = yield ctx.service.hackerNews.getItem(1);
    assert(item.hasOwnProperty('id') && item.hasOwnProperty('title') && item.hasOwnProperty('url'));
  });
});
