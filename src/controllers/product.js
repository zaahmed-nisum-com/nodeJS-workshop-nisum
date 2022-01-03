const productModel = require("../models/product");
const mongoose = require("mongoose");

module.exports = {
  getProuctByMerchandiseId: async (req, res, next) => {
    try {
      console.log(req.params);
      const product = await productModel
        .find({
          user: mongoose.Types.ObjectId(req.params.id), //this user id will replace with user id extract from jwt token
          merchandise: mongoose.Types.ObjectId(req.params.merchandiseId),
        })
        .populate("user")
        .populate("merchandise");
      console.log(product);
      res.status(200).send({
        data: product,
        isError: false,
        error: {},
        message: "Successfull",
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
  addProductByUser: async (req, res) => {
    try {
      const product = await productModel.create(req.body);
      // console.log(JSON.parse(req.body.varients))
      console.log(product);
      res
        .status(200)
        .send({ data: [], message: "Successfull", isError: false, error: {} });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "error", isError: true, error });
    }
  },
  updateProductByUser: async (req, res) => {
    try {
    } catch (error) {}
  },
  deleteProductByUser: async (req, res) => {
    try {
    } catch (error) {}
  },
  // for testing
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.find({});
      res.status(200).send({
        data: products,
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "error", isError: true, error });
    }
  },
};
