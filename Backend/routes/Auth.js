const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const { createUser, loginUser } = require("../controllers/Auth");
const { verifyUser } = require("../controllers/JWTVerify");

router.post("/auth/signup",  createUser);
router.post("/auth/login", loginUser);
router.post("/auth/verify", verifyUser, (req, res) => {
  res.send({email:req.user});
});

module.exports = router;
