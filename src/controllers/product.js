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
  addProductUser: async (req, res) => {
    try {
    } catch (error) {}
  },
  updateProductByUser: async (req, res) => {
    try {
    } catch (error) {}
  },
  deleteProductByUser: async (req, res) => {
    try {
    } catch (error) {}
  },
};
