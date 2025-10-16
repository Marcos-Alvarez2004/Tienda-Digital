const express = require("express");
const productRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const Product = require("../models/Product");

productRoute.get(
  "/",
  AsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoute.get(
  "/:id",
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Producto no encontrado");
    }
  })
);

productRoute.post("/", async (req, res) => {
  try {
    const products = req.body;

    const savedProduct = await Product.insertMany(products);
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = productRoute;
