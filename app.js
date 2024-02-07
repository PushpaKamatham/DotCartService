const express = require('express');
const connectDB = require('./db');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Routes
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
