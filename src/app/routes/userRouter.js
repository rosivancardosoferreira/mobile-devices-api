const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
// userRouter.post("/login", userController.login);
// userRouter.put("/:id", userController.update);
// userRouter.delete("/:id", userController.del);

module.exports = userRouter;

