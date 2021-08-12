const routers = require("express").Router();
const { login, signUp } = require("../controllers/auth");

routers.post("/", login);
routers.post("/", signUp);

module.exports = routers;
