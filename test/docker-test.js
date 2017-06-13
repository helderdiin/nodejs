import http from 'http';
import { expect } from 'chai';

import { APP } from '../lib/config';

import '../lib/index';

describe('Docker route', () => {
  const healthRouteOptions = {
    host: APP.host,
    port: APP.port,
    path: '/docker',
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
        expect(data.docker).to.not.be.undefined;
        expect(data.docker).to.equal('Teste!!');
        done();
      });
    });
  });
});