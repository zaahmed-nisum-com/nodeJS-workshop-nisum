const contentModle = require("../models/content");
const userModle = require("../models/user");
const fs = require("fs");
const mongoose = require("mongoose");

module.exports = {
  addContent: async (req, res, next) => {
    try {
      req.body.permissions = req.body.permissions.split(",");
      req.body.cast = req.body.cast.split(",");
      req.body.director = req.body.director.split(",");
      const content = await contentModle.create(req.body);
      res.status(200).send({ data: [content], message: "Successfull" });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Successfull", isError: true, error });
    }
  },
  updateContent: async (req, res, next) => {
    try {
    } catch (error) {}
  },
  deleteContent: async (req, res, next) => {
    try {
    } catch (error) {}
  },
  getContentByUserId: async (req, res, next) => {
    try {
      const user = await userModle
        .findOne({
          _id: mongoose.Types.ObjectId(req.params.user),
        })
        .populate("subscription");
      const content = await contentModle
        .find({
          user: mongoose.Types.ObjectId(req.params.user),
        })
        .populate("user");
      content[0].permissions = user.subscription.permissions;
      res.status(200).send({
        data: content,
        message: "Successfull",
        isError: true,
        error: {},
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Successfull", isError: true, error });
    }
  },
  getAllContent: async (req, res, next) => {
    try {
      res.status(200).send("movies");
    } catch (error) {}
  },
  watchContent: async (req, res, next) => {
    try {
      const path = "assets/videos/movie.mp4";
      const stat = fs.statSync(path);
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
      }
      // res.status(200).send({
      //   data: [{ message: "watch content" }],
      //   message: "Successfull",
      //   isError: false,
      //   error: {},
      // });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "ERROR", isError: true, error });
    }
  },
  download: async (req, res, next) => {
    try {
      res.status(200).send({
        data: [{ message: " download" }],
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
  comment: async (req, res, next) => {
    try {
      res.status(200).send({
        data: [{ message: " comment" }],
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
};
