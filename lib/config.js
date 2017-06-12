import { normalizePort } from './utils';

export const APP = {
  host: process.env.HOST || 'localhost',
  port: normalizePort(process.env.PORT || '4500'),
  amqpAddress: process.env.AMQP_ADDRESS || 'localhost'
};

export default {
  APP
};