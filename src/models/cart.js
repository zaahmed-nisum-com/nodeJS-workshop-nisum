const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    cart: [],
    tempOrderId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
