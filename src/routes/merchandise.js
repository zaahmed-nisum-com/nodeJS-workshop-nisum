const routers = require("express").Router();
const {
  getAllMerchandiseById,
  getProuctById,
} = require("../controllers/merchandise");

routers.get("/", getAllMerchandiseById);
routers.get("/product", getProuctById);

module.exports = routers;
