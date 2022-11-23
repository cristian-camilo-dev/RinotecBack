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
  const product = services.update(id, body);
  res.json(product);
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = services.delete(id);
  res.json(product);
});

export default router;
