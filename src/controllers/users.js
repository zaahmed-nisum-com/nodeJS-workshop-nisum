const userModle = require("../models/user");

module.exports = {
  addUser: async () => {
    try {
    } catch (error) {}
  },
  updateUser: async () => {
    try {
    } catch (error) {}
  },
  deleteUser: async () => {
    try {
    } catch (error) {}
  },
  getUsers: async () => {
    try {
    } catch (error) {}
  },
  getUser: async () => {
    try {
    } catch (error) {}
  },
  purchaseSubscription: async (req, res, next) => {
    try {
      const obj = {
        subscription: req.body.subscription,
        subscriptionStartDate: req.body.subscriptionStartDate,
        subscriptionTimePeriod: req.body.subscriptionTimePeriod,
      };
      const user = await userModle.findByIdAndUpdate(
        { _id: req.body._id },
        { ...obj },
        { returnOriginal: false }
      );
      console.log(user);
      res.status(200).send({ data: user, message: "" });
    } catch (error) {
      res.status(400).send({ data: [], message: "" });
    }
  },
};
