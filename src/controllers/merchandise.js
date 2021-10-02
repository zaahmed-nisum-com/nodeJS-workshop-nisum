const contentModle = require("../models/content");
const userModle = require("../models/user");
const fs = require("fs");
const mongoose = require("mongoose");

module.exports = {
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
