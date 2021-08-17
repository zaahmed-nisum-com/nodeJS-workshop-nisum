const contentModle = require("../models/content");
const mongoose = require("mongoose");

module.exports = {
  addContent: async (req, res, next) => {
    try {
      console.log(req.body);
      req.body.description = JSON.stringify(req.body.description);
      req.body.description = JSON.parse(req.body.description);
      req.body.permissions = req.body.permissions.split(",");
      // const content = await contentModle.create(req.body);
      console.log(req.body);
      // console.log(content);
      res.status(200).send({ data: [req.body], message: "Successfull" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "Successfull", isError: true, error });
    }
  },
  updateContent: async () => {
    try {
    } catch (error) {}
  },
  deleteContent: async () => {
    try {
    } catch (error) {}
  },
  getContentByUserId: async (req, res, next) => {
    try {
      console.log(req.params.user);
      const content = await contentModle
        .find({
          user: mongoose.Types.ObjectId(req.params.user),
        })
        .populate("user");
      console.log(JSON.stringify(content[0].description[0]));
      content[0].description = JSON.parse(
        JSON.stringify(content[0].description[0])
      );
      res
        .status(200)
        .send({
          data: content,
          message: "Successfull",
          isError: true,
          error: {},
        });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "Successfull", isError: true, error });
    }
  },
  getAllContent: async () => {
    try {
      res.status(200).send("movies");
    } catch (error) {}
  },
};
