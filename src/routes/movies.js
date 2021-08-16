const routers = require("express").Router();
const { isSubscriptionExprie } = require("../middlewares/subscription");
const { isTokenValid } = require("../middlewares/authentication");
const { getMovies } = require("../controllers/movies");

routers.get("/", isTokenValid, isSubscriptionExprie, getMovies);

module.exports = routers;
