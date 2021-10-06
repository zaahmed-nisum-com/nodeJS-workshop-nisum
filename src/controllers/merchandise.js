const merchandiseModel = require("../models/merchandise");

module.exports = {
  createMerchandise: async (req, res) => {
    try {
      const merchandise = await merchandiseModel.create(req.body);
      console.log(merchandise);
      res
        .status(200)
        .send({ data: [], message: "Successfull", isError: false, error: {} });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "error", isError: true, error });
    }
  },
  getAllMerchandiseById: async (req, res, next) => {
    try {
      res
        .status(200)
        .send({ data: [], isError: false, error: {}, message: "Successfull" });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
  getProuctById: async (req, res, next) => {
    try {
      res
        .status(200)
        .send({ data: [], isError: false, error: {}, message: "Successfull" });
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
};
