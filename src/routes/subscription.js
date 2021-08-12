const routers = require("express").Router();
const { isTokenValid } = require("../middlewares/authentication");
const {
  addSubscription,
  updateSubscription,
  getSubscription,
  getSubscriptionById,
} = require("../controllers/subscription");

routers.get("/", isTokenValid, getSubscription);
routers.get("/", isTokenValid, getSubscriptionById);
routers.post("/", isTokenValid, addSubscription);
routers.put("/", isTokenValid, updateSubscription);

module.exports = routers;
