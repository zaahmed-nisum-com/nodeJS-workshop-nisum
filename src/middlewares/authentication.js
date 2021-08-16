const jwtTokenModel = require("../models/jwtToken");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

module.exports = {
  isTokenValid: async (req, res, next) => {
    try {
      console.log(req.headers);
      var jwtTokenDecode = jwt.verify(
        req.headers["authorization"],
        process.env.JWT_TOKEN_SECRET_KEY
      );
      console.log(jwtTokenDecode);
      console.log(new Date(jwtTokenDecode.exp));
      const jwtToken = await jwtTokenModel.findOne({
        user: mongoose.Types.ObjectId(jwtTokenDecode.user),
      });
    } catch (error) {
      throw new Error(error);
    }
  },
};
