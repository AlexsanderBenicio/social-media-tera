const express = require("express");
const router = express.Router();

const controller = require("../controllers/usersController");
const loginController = require("../controllers/loginController");

router.get("/all", controller.getAll);
router.post("/signup", controller.createUser);
router.post("/login", loginController.login);
router.patch("/update/:id", controller.updateUserById);
router.delete("/delete/:id", controller.deleteUserById);

module.exports = router;
