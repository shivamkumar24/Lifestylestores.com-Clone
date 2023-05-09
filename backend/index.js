const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { menRouter } = require("./routes/men.route");
const { womenRouter } = require("./routes/women.route");
const { authMiddleware } = require("./middlewares/auth.middleware");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/men", menRouter);
app.use("/women", womenRouter);
app.use(authMiddleware);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
  } catch (error) {
    console.log("Connection Error:", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
