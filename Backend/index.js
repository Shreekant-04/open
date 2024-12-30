const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDatabase = require("./models/conn");
connectToDatabase();
const authRoute = require("./routes/Auth");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: ["https://quizz-app-eight-beta.vercel.app", "http://localhost:5173"], // Update with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api/v1", authRoute);
app.get("/", (req, res) => {
  res.status(200).send("Api v1 working...");
});

app.listen(5000, () => {
  console.log("server is listening");
});
