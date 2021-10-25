const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");
const scheduleController = require("../controllers/scheduleController");

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.post("/check-email", userController.check_email);
userRouter.post("/login", userController.login);
userRouter.get("/schedules/:id", userController.schedules);
userRouter.get("/schedules/one/:id", scheduleController.schedules_one);

module.exports = userRouter;

