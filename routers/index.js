import routerProducts from "./productsRouter.js";

function routerApi(app) {
  app.use("/api/products", routerProducts);
  app.use("/api/products", routerProducts);
}


export default routerApi;


