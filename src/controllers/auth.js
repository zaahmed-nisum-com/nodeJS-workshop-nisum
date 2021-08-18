const mongoose = require("mongoose");
const userModel = require("../models/user");
const jwtTokenModel = require("../models/jwtToken");
const bcrypt = require("bcrypt");
const { generateJwtToken } = require("../utilities/helper");

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const body = req.body;
      const salt = await bcrypt.genSalt(10);

      req.body.password = await bcrypt.hash(body.password, salt);

      const userObj = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        phoneNo: body.phoneNo,
        isSocialLogin: false,
        country: "paskistan",
        city: "karachi",
      };

      const user = await userModel.create(userObj);
      res
        .status(200)
        .send({ data: [], message: "Successfull", isError: true, error });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const isEmailValid = await userModel
        .findOne({ email: req.body.email })
        .select("+password")
        .lean();

      if (isEmailValid != null) {
        const isPasswordValid = await bcrypt.compareSync(
          req.body.password,
          isEmailValid.password
        );
        if (isPasswordValid) {
          const jwtToken = await generateJwtToken({
            user: isEmailValid._id,
            email: isEmailValid.email,
          });
          const jwtTokenRegister = await jwtTokenModel.create({
            token: jwtToken,
            user: mongoose.Types.ObjectId(isEmailValid._id),
            expriedIn: new Date(
              new Date().setHours(new Date().getHours() + 15)
            ),
          });
          delete isEmailValid.password;
          res.status(200).send({
            data: [
              {
                ...isEmailValid,
                token: jwtTokenRegister.token,
              },
            ],
            message: "Successfull",
            isError: true,
            error: {},
          });
        } else {
          res.status(400).send("Email or Password is wrong");
        }
      } else {
        res.status(400).send("Email or Password is wrong");
      }
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ data: [], message: "Successfull", isError: true, error });
    }
  },
};
