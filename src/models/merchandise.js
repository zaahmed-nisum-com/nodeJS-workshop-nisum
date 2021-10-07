const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const MerchandiseSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    title: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("merchandise", MerchandiseSchema);
