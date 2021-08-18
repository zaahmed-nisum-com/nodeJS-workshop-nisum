const routers = require("express").Router();
const { isSubscriptionExprie } = require("../middlewares/subscription");
const { isTokenValid } = require("../middlewares/authentication");
const {
  isAccesGranted,
  isRead,
  isReadAndWrite,
  isReadAndWriteAndDownloadAndPurchase,
  isReadAndWriteAndDownload,
} = require("../middlewares/content");
const {
  getAllContent,
  getContentByUserId,
  addContent,
  download,
  watchContent,
  comment,
} = require("../controllers/content");

routers.get("/:user", isTokenValid, getContentByUserId);
routers.get("/", isTokenValid, isSubscriptionExprie, getAllContent);
routers.post("/", isTokenValid, addContent);
routers.get(
  "/auth/:category/:content",
  isTokenValid,
  isSubscriptionExprie,
  isRead,
  watchContent
);
routers.get(
  "/auth/:category/:content/download",
  isTokenValid,
  isSubscriptionExprie,
  isReadAndWriteAndDownload,
  download
);
routers.post(
  "/auth/:category/:content/comment",
  isTokenValid,
  isSubscriptionExprie,
  isReadAndWrite,
  comment
);

module.exports = routers;
