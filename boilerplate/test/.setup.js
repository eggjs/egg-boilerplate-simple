'use strict';

const mm = require('egg-mock');

global.mm = global.mock = mm;
global.request = require('supertest');
global.assert = require('power-assert');

let app;
before(() => {
  app = global.app = mm.app();
  return app.ready();
});

after(() => app.close());
