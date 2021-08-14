const routers = require("express").Router();
const { isSubscriptionExprie } = require("../middlewares/subscription");
const {
    getMovies
} = require("../controllers/movies");

routers.get("/", isSubscriptionExprie, getMovies);

module.exports = routers;
