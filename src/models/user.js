const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: {},
    isDeleted: {
      type: Boolean,
      select: false,
      default: false,
    },
    lastPasswordChanged: {
      type: Date,
      default: new Date(),
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    subscription: {
      type: mongoose.Types.ObjectId,
    },
    subscriptionStartDate: {
      type: String,
    },
    subscriptionTimePeriod: {
      type: Number,
    },
    role: [],
  },
  { timestamps: true }
);
UserSchema.methods.getPublicProfile = function () {
  const user = this.toObject();

  delete user.password;
  delete user.isDeleted;

  return user;
};

module.exports = mongoose.model("user", UserSchema);
