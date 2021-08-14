const subscriptionModel = require("../models/subscription");
const userModel = require("../models/user");
const mongoose = require("mongoose");
const { get1MohthDifference } = require("../utilities/helper");

module.exports = {
  isSubscriptionExprie: async (req, res, next) => {
    try {
      const subscription = await subscriptionModel.findOne({
        _id: mongoose.Types.ObjectId(req.body.subscriptionId),
      });
      const user = await userModel.findOne({
        _id: mongoose.Types.ObjectId(req.body.user),
      });
      const afterDays = await get1MohthDifference(
        new Date(user.subscriptionStartDate),
        subscription.exprieIn
      );
      if (
        new Date() <= afterDays &&
        new Date() >= new Date(user.subscriptionStartDate)
      ) {
        console.log("true");
      } else {
        console.log("false");
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
