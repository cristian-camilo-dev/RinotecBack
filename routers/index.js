import express from 'express';
import routerProducts from './productsRouter.js';

function routerApi(app) {
  const router = express.Router();
  //path: global
  app.use('/api/v1', router);

  router.use('/products', routerProducts);

}

export default routerApi;
