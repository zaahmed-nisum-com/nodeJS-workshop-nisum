const mongoose = require("mongoose");

module.exports = {
  mongoDBConnection: () => {
    try {
      mongoose
        .connect(
          "mongodb+srv://zain_ahmed_nisum:nisum021@cluster0.l280j.mongodb.net/test?retryWrites=true&w=majority",
          {
            useUnifiedTopology: true,
            useNewUrlParser: true,
          }
        )
        .then(() => console.log("Database connected!"))
        .catch((err) => console.log("error connecting database =>", err));
    } catch (error) {
      console.log(error);
    }
  },
  sqlDBConnection: () => {},
};
