import { Router } from 'express';
const healthRoutes = Router();

/* GET home page. */
healthRoutes.get('/', (req, res, next) => {
  res.json({
    healthy: true
  });
});

export default healthRoutes;
