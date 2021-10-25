const express = require("express");
const establishmentRouter = express.Router();

const establishmentController = require("../controllers/establishmentController");

establishmentRouter.get("/", establishmentController.index);
establishmentRouter.post("/", establishmentController.create);
establishmentRouter.post("/check-email", establishmentController.check_email);

module.exports = establishmentRouter;

