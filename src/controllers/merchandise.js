const merchandiseModel = require("../models/merchandise");
const productModel = require("../models/product");
const mongoose = require("mongoose");

module.exports = {
  createMerchandise: async (req, res) => {
    try {
      const merchandise = await merchandiseModel.create(req.body);
      res
        .status(200)
        .send({ data: [], message: "Successfull", isError: false, error: {} });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "error", isError: true, error });
    }
  },
  getAllMerchandiseByUserId: async (req, res, next) => {
    try {
      const merchandise = await merchandiseModel
        .findOne({
          user: mongoose.Types.ObjectId(req.params.id), //this user id will replace with user id extract from jwt token
        })
        .populate("user");
      res.status(200).send({
        data: [{ ...merchandise }],
        isError: false,
        error: {},
        message: "Successfull",
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
  getProuctById: async (req, res, next) => {
    try {
      const merchandise = await productModel
        .find({
          user: mongoose.Types.ObjectId(req.params.id), //this user id will replace with user id extract from jwt token
        })
        .populate("user");
      res.status(200).send({
        data: [{ ...merchandise }],
        isError: false,
        error: {},
        message: "Successfull",
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
  addProduct: async (req, res) => {
    try {
    } catch (error) {}
  },
  updateProduct: async (req, res) => {
    try {
    } catch (error) {}
  },
  deleteProduct: async (req, res) => {
    try {
    } catch (error) {}
  },

  // for testing
  getAllMerchandise: async (req, res, next) => {
    try {
      const merchandise = await merchandiseModel.find({}).populate("user");
      res.status(200).send({
        data: [...merchandise],
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
};
