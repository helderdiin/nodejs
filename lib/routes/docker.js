import { Router } from 'express';
const dockerRoutes = Router();

dockerRoutes.get('/', (req, res) => {
  res.json({
    docker: 'Teste!!',
    palestraNice: false,
  });
});

export default dockerRoutes;
