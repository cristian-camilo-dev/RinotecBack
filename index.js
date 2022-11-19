import express from "express";
import routerApi from "./routers/index.js";





// create express app
const app = express();
const port = 3000;


routerApi(app);






/* Listening for a port to be open. */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
