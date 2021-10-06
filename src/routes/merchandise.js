const routers = require("express").Router();
const {
  getAllMerchandiseById,
  getProuctById,
  createMerchandise,
} = require("../controllers/merchandise");

routers.get("/", getAllMerchandiseById);
routers.get("/product", getProuctById);
routers.post("/", createMerchandise);

module.exports = routers;
