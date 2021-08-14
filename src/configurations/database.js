const mongoose = require("mongoose");

module.exports = {
  mongoDBConnection: () => {
    mongoose
      .connect(
        "mongodb+srv://zain_ahmed_nisum:zainahmednisum@cluster0.l280j.mongodb.net/test",
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      )
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log("error connecting database =>", err));
  },
  sqlDBConnection: () => {},
};
