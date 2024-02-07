const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Fetch all Users
router.get("/api/GetUsers", async (req, res) => {
    try {
        const Users = await User.find();
        res.json(Users);
    } catch (error) {
        console.error("Error fetching Users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Fetch a specific User by ID
router.get("/api/GetUserByID/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const User = await User.findById(id);
        if (!User) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(User);
    } catch (error) {
        console.error("Error fetching User:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Create a new User
router.post("/api/SaveUser/", async (req, res) => {
    const { name, price, description } = req.body;
    try {
        const newUser = new User({ name, price, description });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating User:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Update an existing User
router.put("/api/UpdateUser/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, price, description },
            { new: true },
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error("Error updating User:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Delete a User
router.delete("/api/DeleteUser/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting User:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
