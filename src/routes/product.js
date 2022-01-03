const routers = require("express").Router();
const {
  getProuctByMerchandiseId,
  addProductByUser,
  getAllProducts,
} = require("../controllers/product");

routers.get("/all", getAllProducts);
routers.post("/add", addProductByUser);
routers.get("/:id&:merchandiseId", getProuctByMerchandiseId);

module.exports = routers;
