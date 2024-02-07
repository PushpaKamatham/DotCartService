const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    products: [{
        productId: {
            type: mongoose.Schema.Types.Number,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
}, {
    collection: 'Cart' // Specify the collection name here
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
