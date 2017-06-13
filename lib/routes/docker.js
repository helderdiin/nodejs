import { Router } from 'express';
const dockerRoutes = Router();

dockerRoutes.get('/', (req, res, next) => {
  res.json({
    docker: 'Teste!!'
  });
});

export default dockerRoutes;
