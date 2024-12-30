const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // JWT for token generation

exports.createUser = async (req, res) => {
  try {
    const { fname, email, password } = req.body;

    // Input validation
    if (!fname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await userModel.create({
      fullname: fname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.Key, // Make sure to define JWT_SECRET in your .env file
        { expiresIn: "6h" } // Token expiration time (1 hour)
      );
  
    // Send success response
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        fname: user.fname,
        email: user.email,
        token:token
      },
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating user:", error);

    // Send error response
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate a JWT token for authentication (you can customize the payload as needed)
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.Key, // Make sure to define JWT_SECRET in your .env file
      { expiresIn: "6h" } // Token expiration time (1 hour)
    );

    // Send success response with the token and user data
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error logging in:", error);

    // Send error response
    res.status(500).json({ message: "Server error, please try again later" });
  }
};
