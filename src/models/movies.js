const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const SubscriptionSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: [
      //
      // {
      //   actors:[],
      //   genre:'',
      //   director:'',
      // }
    ],
    category: {
      type: String,
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
