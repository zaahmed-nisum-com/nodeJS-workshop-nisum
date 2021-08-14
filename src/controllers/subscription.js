const subscriptionModel = require("../models/subscription");
const mongoose = require("mongoose");

module.exports = {
  addSubscription: async (req, res, next) => {
    try {
      console.log(req.body);
      req.body.permissions = req.body.permissions.split(",");
      console.log(req.body);
      const subscription = await subscriptionModel.create({ ...req.body });
      console.log(subscription);
      res.status(200).send("Subscription create");
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updateSubscription: async () => {
    try {
    } catch (error) {}
  },
  deleteSubscription: async () => {
    try {
    } catch (error) {}
  },
  getSubscription: async (req, res, next) => {
    try {
      console.log(req.body);
      const subscription = await subscriptionModel.find({ isDeleted: false });
      res
        .status(200)
        .send({ data: subscription, message: "fetch successfull" });
    } catch (error) {}
  },
  getSubscriptionById: async (req, res, next) => {
    try {
      console.log(req.params);
      const subscription = await subscriptionModel.find({
        _id: mongoose.Types.ObjectId(req.params.id),
      });
      res
        .status(200)
        .send({ data: subscription, message: "fetch successfull" });
    } catch (error) {}
  },
};
