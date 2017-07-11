'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/hatch-userservice.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/hatch-userservice-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, hatchUserservice')
      .expect(200);
  });
});
