// import library
import dotenv from "dotenv";

// use dotenv
dotenv.config();

const port = process.env.PORT;
const jwt_secret = process.env.JWT_SECRET;

export { port, jwt_secret };