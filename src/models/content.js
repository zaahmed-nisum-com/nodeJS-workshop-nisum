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
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    permission: [],
    isDeleted: {
      type: Boolean,
      select: false,
      default: false,
    },
    poster: {},
    isAdultContent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscription", SubscriptionSchema);
