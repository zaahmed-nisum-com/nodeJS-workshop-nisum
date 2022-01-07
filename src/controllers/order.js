const mongoose = require("mongoose");
const orderModel = require("../models/order");
const dailyOrdersReportModel = require("../models/dailyOrdersReport");

module.exports = {
  getTodayOrders: async (req, res) => {
    try {
      const todayOrders = await orderModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999)),
            },
          },
        },
        {
          $group: {
            _id: null,
            count: { $sum: 1 },
            orders: { $push: "$$ROOT" } 
          },
        },
      ]);
      console.log(todayOrders);
      const dailyOrderReport = await dailyOrdersReportModel.create(todayOrders[0])
      res.status(200).send({
        data: [],
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {
      console.log(error);
    }
  },
  placeOrder: async (req, res) => {
    try {
      const order = await orderModel.create(req.body);
      res.status(200).send({
        data: [],
        message: "Successfull",
        isError: false,
        error: {},
      });
    } catch (error) {
      console.log(error);
    }
  },
};
