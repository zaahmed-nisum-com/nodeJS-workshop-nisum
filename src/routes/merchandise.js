const routers = require("express").Router();
const {
  getAllMerchandiseByUserId,
  getProuctById,
  createMerchandise,
} = require("../controllers/merchandise");

routers.get("/:id", getAllMerchandiseByUserId);
routers.get("/product", getProuctById);
routers.post("/", createMerchandise);

module.exports = routers;
