const orderService = require("../services/orderService");

// Create Order
exports.createOrder = (req, res) => {
  try {
    const order = orderService.createOrder(req.body);

    res.status(201).json({
      message: "Order created successfully",
      orderId: order.id,
      totalAmount: order.totalAmount
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Orders (with filters)
exports.getOrders = (req, res) => {
  const { status, phone, name } = req.query;

  const orders = orderService.getOrders({ status, phone, name });

  res.json(orders);
};

// Update Status
exports.updateOrderStatus = (req, res) => {
  try {
    const order = orderService.updateStatus(
      req.params.id,
      req.body.status
    );

    res.json({
      message: "Status updated",
      order
    });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Dashboard
exports.getDashboard = (req, res) => {
  const data = orderService.getDashboard();

  res.json(data);
};