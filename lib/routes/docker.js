import { Router } from 'express';
const dockerRoutes = Router();

dockerRoutes.get('/', (req, res, next) => {
  res.json({
    docker: 'Teste!!',
    palestraNice: false
  });
});

export default dockerRoutes;
