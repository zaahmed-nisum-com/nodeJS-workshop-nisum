const subscriptionModel = require("../models/subscription");
const userModel = require("../models/user");
const contentModel = require("../models/content");
const mongoose = require("mongoose");

const getAccessData = async (req) => {
  const user = await userModel
    .findOne({
      _id: mongoose.Types.ObjectId(req.body.user),
    })
    .populate("subscription");
  const content = await contentModel.findOne({
    _id: mongoose.Types.ObjectId(req.params.content),
  });
  return {
    user,
    content,
  };
};
module.exports = {
  isRead: async (req, res, next) => {
    try {
      const data = await getAccessData(req);
      data.user.subscription.permissions.every((elem) =>
        data.content.permissions.includes(elem)
      );
      data.user.subscription.permissions.every((elem) =>
        data.content.permissions.includes(elem)
      )
        ? next()
        : res
            .status(400)
            .send({ data: [], message: "Error", isError: true, error });
    } catch (error) {}
  },
  isReadAndWrite: async (req, res, next) => {
    const data = await getAccessData(req);
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    );
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    )
      ? next()
      : res
          .status(400)
          .send({ data: [], message: "Error", isError: true, error });
  },
  isReadAndWriteAndDownload: async (req, res, next) => {
    const data = await getAccessData(req);
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    );
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    )
      ? next()
      : res
          .status(400)
          .send({ data: [], message: "Error", isError: true, error });
  },
  isReadAndWriteAndDownloadAndPurchase: async (req, res, next) => {
    const data = await getAccessData(req);
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    );
    data.user.subscription.permissions.every((elem) =>
      data.content.permissions.includes(elem)
    )
      ? next()
      : res
          .status(400)
          .send({ data: [], message: "Error", isError: true, error });
  },
};
