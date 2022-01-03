const routers = require("express").Router();
const { addToCart } = require("../controllers/cart");

routers.post("/add/item", addToCart);

module.exports = routers;
