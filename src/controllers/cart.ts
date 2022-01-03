const mongoose = require("mongoose");
const cartModel = require("../models/cart");
import express, { Request, Response } from "express";

module.exports = {
  addToCart: async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const cart = await cartModel.create(req.body);
      console.log(cart);
      res
        .status(200)
        .send({ data: [], isError: false, error: {}, message: "" });
    } catch (error) {
      console.log(error);
    }
  },
  removeFromCart: async (req: Request, res: Response) => {},
};
