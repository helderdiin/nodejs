import http from 'http';
import { expect } from 'chai';

import { APP } from '../lib/config';

import '../lib/index';

describe('Health route', () => {
  const healthRouteOptions = {
    host: APP.host,
    port: APP.port,
    path: '/health',
    method: 'GET'
  };

  it('get / deve retornar 200', done => {
    http.get(healthRouteOptions, res => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('get / deve retornar parâmetro verdadeiro', done => {
    http.get(healthRouteOptions, res => {
      res.setEncoding('utf8');
      res.on("data", function(chunk) {
        const data = JSON.parse(chunk.toString());
        expect(data.healthy).to.not.be.undefined;
        expect(data.healthy).to.be.true;
        done();
      });
    });
  });
});