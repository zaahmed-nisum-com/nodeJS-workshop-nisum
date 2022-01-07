const mongoose = require("mongoose");
const cartModel = require("../models/cart");

module.exports = {
  addToCart: async (req, res) => {
    try {
      const cart = await cartModel.create(req.body);
      res
        .status(200)
        .send({ data: [], isError: false, error: {}, message: "" });
    } catch (error) {
      console.log(error);
    }
  },
  removeFromCart: async (req, res) => {},
};
