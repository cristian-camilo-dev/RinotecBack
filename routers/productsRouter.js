import express from "express";
import { faker } from '@faker-js/faker';

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 100;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.datatype.uuid,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });
  }

  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });

});

export default router;

