const routers = require("express").Router();
const { getProuctByMerchandiseId } = require("../controllers/product");

routers.get("/:id&:merchandiseId", getProuctByMerchandiseId);

module.exports = routers;
