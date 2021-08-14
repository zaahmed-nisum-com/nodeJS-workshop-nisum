const routers = require("express").Router();
const { login, signUp } = require("../controllers/auth");

routers.post("/login", login);
routers.post("/signup", signUp);

module.exports = routers;
