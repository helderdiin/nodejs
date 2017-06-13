import { normalizePort } from './utils';

export const APP = {
  host: process.env.HOST || '0.0.0.0',
  port: normalizePort(process.env.PORT || '4500'),
  amqpAddress: process.env.AMQP_ADDRESS || 'localhost'
};

export default {
  APP
};
