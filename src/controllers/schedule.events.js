const orderModel = require("../models/order");
const mongoose = require("mongoose");

module.exports = {
  getTotalTodayOrders: async (req, res) => {
    try {
      const todayOrders = await orderModel.aggregate([
        {
          $match: {
            orderDate: {
              $gte: new Date().setUTCHours(0, 0, 0, 0),
              $lt: new Date().setUTCHours(23, 59, 59, 999),
            },
          },
        },
      ]);
      res.status(200).send({
        data: [],
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {}
  },
};
