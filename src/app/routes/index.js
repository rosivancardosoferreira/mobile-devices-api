const express = require("express");
const router = express();

const userRouter = require("./userRouter");
const establishmentsRouter = require("./establishmentsRouter");
const scheduleRouter = require("./scheduleRouter");


router.use("/user", userRouter);
router.use("/establishment", establishmentsRouter);
router.use("/schedule", scheduleRouter);

module.exports = router;