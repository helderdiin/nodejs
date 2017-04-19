import { expect } from 'chai';

import { normalizePort } from '../lib/utils';

describe('Utils', () => {
  describe('normalizePort', () => {
    it('Deve ter retornado o valor passado', () => {
      expect(normalizePort('teste')).to.equal('teste');
    });

    it('Deve ter retornado o valor a porta normalizada', () => {
      expect(normalizePort('03000')).to.equal(3000);
    });

    it('Deve ter retornado false para porta negativa', () => {
      expect(normalizePort(-2000)).to.be.false;
    });
  });
});