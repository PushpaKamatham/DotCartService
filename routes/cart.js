const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Fetch all Carts
router.get("/api/GetAllCarts", async (req, res) => {
    try {
        const Carts = await Cart.find();
        res.json(Carts);
    } catch (error) {
        console.error("Error fetching Carts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Fetch a specific Cart by userID
router.get("/api/GetCartByUserID/:userId", async (req, res) => {
    const { id } = req.params;
    try {
        const Cart = await Cart.find(userId);
        if (!Cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.json(Cart);
    } catch (error) {
        console.error("Error fetching Cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// 
// Fetch a specific Cart by ID
router.get("/api/GetCartByID/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const Cart = await Cart.findById(id);
        if (!Cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.json(Cart);
    } catch (error) {
        console.error("Error fetching Cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Create a new Cart
router.post("/api/SaveCart/", async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const newCart = new Cart({ name, price, description });
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error) {
        console.error("Error creating Cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Update an existing Cart
router.put("/api/UpdateCart/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            id,
            { name, price, description },
            { new: true },
        );
        if (!updatedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.json(updatedCart);
    } catch (error) {
        console.error("Error updating Cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Delete a Cart
router.delete("/api/DeleteCart/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCart = await Cart.findByIdAndDelete(id);
        if (!deletedCart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.json({ message: "Cart deleted successfully" });
    } catch (error) {
        console.error("Error deleting Cart:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
