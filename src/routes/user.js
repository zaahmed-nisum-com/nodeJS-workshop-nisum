const routers = require("express").Router();
const { isTokenValid } = require("../middlewares/authentication");
const { isAccess } = require("../middlewares/autherization");
const {
  addUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  purchaseSubscription,
  getAllUsers,
} = require("../controllers/users");

routers.get("/", getAllUsers);
routers.get("/", isAccess, isTokenValid, getUsers);
routers.get("/", isAccess, isTokenValid, getUser);
routers.post("/", isAccess, isTokenValid, addUser);
routers.put("/", isAccess, isTokenValid, updateUser);
routers.put("/subscription", purchaseSubscription);
routers.delete("/", isAccess, isTokenValid, deleteUser);

module.exports = routers;
