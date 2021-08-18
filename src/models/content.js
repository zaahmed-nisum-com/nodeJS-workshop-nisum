const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ContentSchema = new Schema(
  {
    title: {
      type: String,
    },
    cast: [],
    director: [],
    details: {},
    category: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    permissions: [],
    isDeleted: {
      type: Boolean,
      select: false,
      default: false,
    },
    poster: {},
    urls: {},
    isAdultContent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("content", ContentSchema);
