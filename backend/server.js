require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err.message);
  });

// Test route
app.get("/", (req, res) => {
  res.send("ShopEZ Backend is Running 🚀");
});

// Sample API
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "T-Shirt", price: 499 },
    { id: 2, name: "Shoes", price: 999 }
  ]);
});

// Server start
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});