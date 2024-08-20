const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const shiftRoutes = require("./routes/ShiftRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/shifts", shiftRoutes);

mongoose.connect(process.env.DB_URI).then(() => console.log("DB connected"));

const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT || 4000, () =>
  console.log(`Server running on port ${PORT}`)
);
