const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrderStatus,
  getDashboard
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id/status", updateOrderStatus);
router.get("/dashboard/summary", getDashboard);

module.exports = router;