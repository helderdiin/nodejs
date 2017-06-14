import { Router } from 'express';
const dockerRoutes = Router();

dockerRoutes.get('/', (req, res) => {
  res.json({
    docker: 'Teste!!',
    palestraNice: true,
  });
});

export default dockerRoutes;
