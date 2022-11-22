import express from 'express';
import ProductsService from '../services/productServices.js';

const router = express.Router();
const services = new ProductsService();

router.get('/', (req, res) => {
  const products = services.find();

  res.json(products);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = services.findOne(id);
  res.json(product);
});



router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = services.create(body);
  res.status(201).json(newProduct);
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Product updated',
    product: body,
    id,
  });
});

// A route handler for the DELETE /products/:id endpoint. It returns a message and the id of the deleted product.
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Product deleted',
    id,
  });
});

export default router;
