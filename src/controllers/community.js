const contentModle = require("../models/content");
const userModle = require("../models/user");
const fs = require("fs");
const mongoose = require("mongoose");

module.exports = {
  addReview: async (req, res, next) => {
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
  addQuestion: async (req, res, next) => {
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
  getAllReviewByUserId: async () => {
    try {
      res.status(200).send({
        data: [],
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
  getAllReviewByProductId: async () => {
    try {
      res.status(200).send({
        data: [],
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
  getAllRatingByUserId: async () => {
    try {
      res.status(200).send({
        data: [],
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
  getAllRatingByProductId: async () => {
    try {
      res.status(200).send({
        data: [],
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
  getAllQuestionsAnswersByUserId: async () => {
    try {
      res.status(200).send({
        data: [],
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
  getAllQuestionsAnswersByProductId: async () => {
    try {
      res.status(200).send({
        data: [],
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
};
