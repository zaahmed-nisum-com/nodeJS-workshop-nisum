const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    merchandise: { type: Schema.Types.ObjectId, ref: "merchandise" },
    title: {
      type: String,
    },
    varients: {
      colors: [],
      sizes: [],
    },
    price: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
    },
    isInStock: {
      type: Boolean,
    },
    inStockCount: {
      type: Number,
    },
    isCopounAccept: {
      type: Boolean,
    },
    isDiscounted: {
      type: Boolean,
    },
    isComboProduct: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
