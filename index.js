import express from "express";





// create express app
const app = express();
const port = 3000;







/* Listening for a port to be open. */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
