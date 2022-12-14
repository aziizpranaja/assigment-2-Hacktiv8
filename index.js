// import library
import { port } from "./config.js";
import express from "express";
import routes from "./routes/index.js";

// Initializing variable express
const app = express();

// calling the express.json() method for parsing
app.use(express.json());

// Calling Routes
app.use(routes);

// declare route
app.listen(port, () => {
  console.log(`PORT listen to ${port}`);
});