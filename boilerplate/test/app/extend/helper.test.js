'use strict';

const mm = require('egg-mock');
const assert = require('power-assert');

describe('test/app/extend/helper.test.js', () => {
  let app;
  let ctx;
  let helper;
  before(function* () {
    app = mm.app();
    yield app.ready();
    ctx = app.mockContext();
    helper = ctx.helper;
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('lowercaseFirst', () => {
    const str = helper.lowercaseFirst('SimpleClass');
    assert(str === 'simpleClass');
  });
});
