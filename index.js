const express = require("express");
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth");
const subscriptionRoutes = require("./src/routes/subscription");
const { mongoDBConnection } = require("./src/configurations/database");

const app = express();
const PORT = 8001;
mongoDBConnection();

app.listen(PORT, () => {
  console.log("Server start at 8001");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/subscription", subscriptionRoutes);
