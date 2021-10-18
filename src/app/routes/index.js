const express = require("express");
const router = express();

const userRouter = require("./userRouter");

router.use("/user", userRouter);

module.exports = router;