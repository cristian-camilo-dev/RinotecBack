import { faker } from '@faker-js/faker';

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
      });
    }
  }

  create(data) {
    // create product
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    // find product
    return this.products;
  }

  findOne(id) {
    // find one product
    return this.products.find((item) => item.id === id);
  }

  update(id, data) {
    // update product
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products[index] = data;
    return this.products[index];
  }

  delete(id) {
    // delete product
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

export default ProductsService;
