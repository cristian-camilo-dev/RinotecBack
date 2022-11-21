import express from "express";
import { faker } from '@faker-js/faker';

const router = express.Router();


/* This is a route handler for the GET /products endpoint. It generates a list of products and returns
them as JSON. */
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


/* This is a route handler for the GET /products/:id endpoint. It generates a single product and
returns it as JSON. */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });

});


/* This is a route handler for the POST /products endpoint. It receives a product from the request*/

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message : "Product created",
    product: body,
  });
});


/* A route handler for the PATCH /products/:id endpoint. It receives a product from the request and
returns a message and the product. */
router.patch("/:id", (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "Product updated",
    product: body,
    id,

  });
});

// A route handler for the DELETE /products/:id endpoint. It returns a message and the id of the deleted product.
router.delete("/:id", (req, res) => {
  const {id} = req.params;
  res.json({
    message: "Product deleted",
    id,
  });
});






export default router;

