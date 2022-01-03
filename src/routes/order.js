const routers = require("express").Router();
const { getTodayOrders } = require("../controllers/order");

routers.get("/today/all", getTodayOrders);

module.exports = routers;
