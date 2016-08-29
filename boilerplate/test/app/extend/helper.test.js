'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('power-assert');

describe('test/app/extend/helper.test.js', () => {
  let app;
  let ctx;
  let helper;
  before(() => {
    app = mm.app();
    ctx = app.mockContext();
    helper = ctx.helper;
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('lowercaseFirst', () => {
    const str = helper.lowercaseFirst('SimpleClass');
    assert(str === 'simpleClass');
  });
});
