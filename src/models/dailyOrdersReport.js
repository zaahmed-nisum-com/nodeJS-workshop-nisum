const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const DailyOrderReportSchema = new Schema(
  {
    order: { type: Schema.Types.ObjectId, ref: "order" },
    totalOrders: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("dailyorderreport", DailyOrderReportSchema);
