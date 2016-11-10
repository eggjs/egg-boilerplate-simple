'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const path = require('path');

describe('test/app/controller/home.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      customEgg: path.join('../../../node_modules/egg'),
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should GET /home', () => {
    return request(app.callback())
    .get('/home')
    .expect('hi, egg')
    .expect(200);
  });
});
