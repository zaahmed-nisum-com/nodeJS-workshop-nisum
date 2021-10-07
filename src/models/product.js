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
      color: [],
      sizes: [],
    },
    price: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
