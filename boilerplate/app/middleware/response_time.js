'use strict';

// just for showcase, egg had a build-in middleware to export `x-readtime` header
module.exports = (options, app) => {
  return function* (next) {
    const start = Date.now();
    yield next;
    // options is config.responseTime
    this.set(options.header, Date.now() - start);
  };
};
