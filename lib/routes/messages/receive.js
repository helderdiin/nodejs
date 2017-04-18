import amqp from 'amqplib';

import { APP } from '../../config';

const open = amqp.connect(`amqp://${APP.amqpAddress}`);

export const get = (req, res) => {
  const queueName = req.params.queueName;

  open.then((conn) => {
    return conn.createChannel();
  }).then((ch) => {
    return ch.assertQueue(queueName).then(() => {
      return ch.get(queueName).then((msg) => {
        if (msg) {
          ch.ack(msg);
          res.json({
            'message': msg.content.toString()
          });
        } else {
          res.json({
            'message': 'Sem mais mensagens.'
          });
        }
      });
    });
  }).catch(console.warn);
};

export default {
  get
};