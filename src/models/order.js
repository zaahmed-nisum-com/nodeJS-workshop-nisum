const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    cart: { type: Schema.Types.ObjectId, ref: "cart" },
    tempOrderNo: {
      type: String,
    },
    order: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
