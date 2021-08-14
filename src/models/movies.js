const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const SubscriptionSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: [],
    category: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      select: false,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscription", SubscriptionSchema);
