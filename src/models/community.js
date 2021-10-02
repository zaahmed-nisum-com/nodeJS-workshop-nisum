const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ComminitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    merchandise: { type: Schema.Types.ObjectId, ref: "merchandise" },
    product: { type: Schema.Types.ObjectId, ref: "product" },
    ratting: {},
    questionsAnswers: [],
    reviews: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("community", ComminitySchema);
