const express = require("express");
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth");
const subscriptionRoutes = require("./src/routes/subscription");
const contentRoutes = require("./src/routes/content");
const { mongoDBConnection } = require("./src/configurations/database");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 8001;
require("dotenv").config();

// console.log(process.env.PORT);
// console.log(process.env.JWT_TOKEN_SECRET_KEY);

app.use(express.urlencoded());
app.use(morgan());
app.use(cors());
mongoDBConnection();

app.listen(process.env.PORT || PORT, () => {
  console.log("Server start at 8001");
});

app.get("/helthcheck", (req, res) => {
  res.send("server is running");
});

app.use((error, req, res, next) => {
  console.log("Error Handling Middleware called");
  console.log("Path: ", req.path);
  res.status(400).send(error);
  next(); // (optional) invoking next middleware
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/subscription", subscriptionRoutes);
app.use("/content", contentRoutes);
