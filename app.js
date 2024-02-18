const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Access-Control-Allow-Headers, Content-Type, Authorization, Origin, Accept",
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const PORT = process.env.PORT || 3090;

// Load environment variables
require("dotenv").config();

// Connect to MongoDB
connectDB();

// Routes
app.use("/products", productRoutes);
// Use the cors middleware to enable CORS

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
