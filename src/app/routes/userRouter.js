const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");
const scheduleController = require("../controllers/scheduleController");

userRouter.get("/", userController.index);
userRouter.post("/", userController.create);
userRouter.post("/check-email", userController.check_email);
userRouter.post("/login", userController.login);
userRouter.post("/active-account", userController.check_phone);
userRouter.get("/schedules/:id", userController.schedules);
userRouter.get("/schedules/one/:id", scheduleController.schedules_one);
userRouter.post("/whatsapp", userController.whatsApp);

module.exports = userRouter;