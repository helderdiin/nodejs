import { Router } from 'express';

import sendRoutes from './send';
import receiveRoutes from './receive';

const messagesRoutes = Router();

messagesRoutes.post('/send/:queueName', sendRoutes.post);
messagesRoutes.get('/receive/:queueName', receiveRoutes.get);

export default messagesRoutes;
