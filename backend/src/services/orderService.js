const { v4: uuidv4 } = require("uuid");
const orders = require("../data/orders");

const VALID_STATUSES = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

// Create Order
exports.createOrder = ({ customerName, phone, garments }) => {
  if (!customerName || !phone || !garments) {
    throw new Error("Missing required fields");
  }

  let totalAmount = 0;

  garments.forEach(item => {
    totalAmount += item.quantity * item.price;
  });

  const newOrder = {
    id: uuidv4(),
    customerName,
    phone,
    garments,
    totalAmount,
    status: "RECEIVED",
    createdAt: new Date()
  };

  orders.push(newOrder);

  return newOrder;
};

// Get Orders with filters
exports.getOrders = ({ status, phone, name }) => {
  let filtered = [...orders];

  if (status) {
    filtered = filtered.filter(o => o.status === status);
  }

  if (phone) {
    filtered = filtered.filter(o => o.phone.includes(phone));
  }

  if (name) {
    filtered = filtered.filter(o =>
      o.customerName.toLowerCase().includes(name.toLowerCase())
    );
  }

  return filtered;
};

// Update Status
exports.updateStatus = (id, status) => {
  if (!VALID_STATUSES.includes(status)) {
    throw new Error("Invalid status");
  }

  const order = orders.find(o => o.id === id);

  if (!order) {
    throw new Error("Order not found");
  }

  order.status = status;

  return order;
};

// Dashboard
exports.getDashboard = () => {
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce(
    (sum, o) => sum + o.totalAmount,
    0
  );

  const statusCount = {};

  orders.forEach(o => {
    statusCount[o.status] = (statusCount[o.status] || 0) + 1;
  });

  return {
    totalOrders,
    totalRevenue,
    statusCount
  };
};