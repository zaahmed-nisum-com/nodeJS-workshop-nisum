const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const JtwTokenSchema = new Schema(
  {
    token: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    expriedIn: {
      type: String,
    },
    isExpried: {
      type: Boolean,
      default: false,
    },
    exp: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jwtToken", JtwTokenSchema);
