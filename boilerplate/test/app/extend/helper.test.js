'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('power-assert');
const path = require('path');

describe('test/app/extend/helper.test.js', () => {
  let app;
  let ctx;
  let helper;
  before(function* () {
    app = mm.app({
      customEgg: path.join('../../../node_modules/egg'),
    });
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
