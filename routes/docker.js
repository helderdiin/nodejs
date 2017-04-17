import { Router } from 'express';
const dockerRoutes = Router();

/* GET users listing. */
dockerRoutes.get('/', (req, res, next) => {
  res.json({
    docker: 'rocks!'
  });
});

export default dockerRoutes;
