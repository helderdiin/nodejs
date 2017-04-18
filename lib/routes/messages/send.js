import amqp from 'amqplib';

import { APP } from '../../config';

const open = amqp.connect(`amqp://${APP.amqpAddress}`);

export const post = (req, res) => {
  const queueName = req.params.queueName;
  
  open.then((conn) => {
    return conn.createChannel();
  }).then((ch) => {
    return ch.assertQueue(queueName).then(() => {      
      ch.sendToQueue(queueName, Buffer.from(req.body.msg));

      res.json({
        'message': 'Mensagem incluída com sucesso.'
      });
    });
  }).catch(console.warn);
};

export default {
  post
};