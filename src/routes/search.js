const routers = require("express").Router();
const { searchAllProduct } = require("../controllers/search");

routers.get("/product", searchAllProduct);

module.exports = routers;
