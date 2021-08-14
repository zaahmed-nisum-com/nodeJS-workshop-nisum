const subscriptionModel = require("../models/subscription");
const userModel = require("../models/user");
const mongoose = require("mongoose");

module.exports = {
  isSubscriptionExprie: async (req, res, next) => {
    try {
      console.log(req.body);
      const subscription = await subscriptionModel.findOne({
        _id: mongoose.Types.ObjectId(req.body.subscriptionId),
      });
      const user = await userModel.findOne({
        _id: mongoose.Types.ObjectId(req.body.user),
      });
      console.log(subscription);
      console.log(user);
      console.log(user.subscriptionStartDate);
      console.log(user.subscriptionTimePeriod);
      console.log(subscription.exprieIn);
    } catch (error) {
      throw new Error(error);
    }
  },
};
