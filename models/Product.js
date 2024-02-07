const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    category: String,
    image:String,
    // Add more fields as needed
}, {
    collection: 'Product' // Specify the collection name here
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
