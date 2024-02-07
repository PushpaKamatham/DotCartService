const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://pushpalathak:DnWOOIXcq3ZeBdae@cluster0.ejk6nff.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "DotCart" },
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectDB;
