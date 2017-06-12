import { Router } from 'express';
const dockerRoutes = Router();

dockerRoutes.get('/', (req, res, next) => {
  res.json({
    docker: 'Fera de mais!'
  });
});

export default dockerRoutes;
