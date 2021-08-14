const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const SubscriptionSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    exprieIn: {
      type: Number,
      default: 1,
    },
    permissions: [],
    isDeleted: {
      type: Boolean,
      select: false,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscription", SubscriptionSchema);
