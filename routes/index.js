import { Router } from 'express';
const indexRoutes = Router();

/* GET home page. */
indexRoutes.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default indexRoutes;
