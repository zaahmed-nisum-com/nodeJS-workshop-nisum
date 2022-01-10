const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const DailyOrderReportSchema = new Schema(
  {
    orders: [],
    count: {
      type: Number,
    },
    createdAt: { type: Date, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dailyorderreport", DailyOrderReportSchema);
