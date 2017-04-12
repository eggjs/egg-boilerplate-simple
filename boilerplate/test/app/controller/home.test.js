'use strict';
const mm = require('egg-mock');
const request = require('supertest');
const assert = require('assert');

describe('test/app/controller/home.test.js', () => {
  let app;
  before(() => {
    app = mm.app();
    return app.ready();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
