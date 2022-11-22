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

  create() {
    // create product
  }

  find() {
    // find product
    return this.products;
  }

  findOne(id) {
    // find one product
    return this.products.find((item) => item.id === id);
  }

  update() {
    // update product
  }

  delete() {
    // delete product
  }
}

export default ProductsService;
