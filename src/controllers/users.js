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
      res.status(200).send({ data: user, message: "" });
    } catch (error) {
      res.status(400).send({ data: [], message: "" });
    }
  },
  getAllTransectionByUserId: async (req, res) => {
    try {
    } catch (error) {}
  },

  //For testing
  getAllUsers: async (req, res) => {
    try {
      const users = await userModle.find({});
      res.status(200).send({
        data: [...users],
        isError: false,
        error: {},
        message: "Successfull",
      });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "Error", isError: true, error });
    }
  },
};
