const mongoose = require("mongoose");
const cartModel = require("../models/cart");
import express, { Request, Response } from "express";

module.exports = {
  addToCart: async (req: Request, res: Response) => {
    try {
      const cart = await cartModel.create(req.body);
      res
        .status(200)
        .send({ data: [], isError: false, error: {}, message: "" });
    } catch (error) {
      console.log(error);
    }
  },
  removeFromCart: async (req: Request, res: Response) => {},
};
