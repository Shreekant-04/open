const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
exports.verifyUser = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];

    const decoded = jwt.verify(token, process.env.Key);
    const user = await userModel.findOne({ email: decoded.email });

    if (!user) return res.status(404).json({ message: "User not found" });
    req.user = user.email;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
