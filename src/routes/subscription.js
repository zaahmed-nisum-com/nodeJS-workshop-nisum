const routers = require("express").Router();
const { isTokenValid } = require("../middlewares/authentication");
const {
  addSubscription,
  updateSubscription,
  getSubscription,
  getSubscriptionById,
} = require("../controllers/subscription");

routers.get("/:id", getSubscriptionById);
routers.get("/", getSubscription);
routers.post("/", addSubscription);
routers.put("/", updateSubscription);

module.exports = routers;
