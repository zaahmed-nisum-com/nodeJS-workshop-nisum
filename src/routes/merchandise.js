const routers = require("express").Router();
const {
  getAllMerchandiseByUserId,
  getProuctById,
  createMerchandise,
  getAllMerchandise
} = require("../controllers/merchandise");

routers.get("/all", getAllMerchandise);
routers.get("/:id", getAllMerchandiseByUserId);
routers.get("/product", getProuctById);
routers.post("/", createMerchandise);

module.exports = routers;
