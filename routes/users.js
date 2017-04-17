import { Router } from 'express';
const usersRoutes = Router();

/* GET users listing. */
usersRoutes.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

export default usersRoutes;
