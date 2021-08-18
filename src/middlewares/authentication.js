const jwtTokenModel = require("../models/jwtToken");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

module.exports = {
  isTokenValid: async (req, res, next) => {
    try {
      var jwtTokenDecode = jwt.verify(
        req.headers["authorization"],
        process.env.JWT_TOKEN_SECRET_KEY
      );
      const jwtToken = await jwtTokenModel.findOne({
        user: mongoose.Types.ObjectId(jwtTokenDecode.data.user),
      });
      req.body.user = jwtTokenDecode.data.user;
      next();
    } catch (error) {
      throw new Error(error);
    }
  },
};
