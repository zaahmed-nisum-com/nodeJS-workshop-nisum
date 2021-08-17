const routers = require("express").Router();
const { isSubscriptionExprie } = require("../middlewares/subscription");
const { isTokenValid } = require("../middlewares/authentication");
const {
  getAllContent,
  getContentByUserId,
  addContent,
} = require("../controllers/content");

routers.get("/:user", isTokenValid, getContentByUserId);
routers.get("/", isTokenValid, isSubscriptionExprie, getAllContent);
routers.post("/", isTokenValid, addContent);

module.exports = routers;
