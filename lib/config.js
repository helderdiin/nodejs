export const APP = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3000',
  amqpAddress: process.env.AMQP_ADDRESS || 'localhost'
};

export default {
  APP
};