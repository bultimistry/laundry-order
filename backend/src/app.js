const express = require("express");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/orders", orderRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Laundry API is running...");
});

module.exports = app;