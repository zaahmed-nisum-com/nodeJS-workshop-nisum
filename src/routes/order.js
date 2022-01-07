const routers = require("express").Router();
const { getTodayOrders, placeOrder } = require("../controllers/order");

routers.get("/today/all", getTodayOrders);
routers.post("/palce", placeOrder);

module.exports = routers;
