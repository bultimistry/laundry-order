# 🧺 Laundry Order Management System (AI-First)

A simple full-stack application to manage laundry orders, track status, and monitor business metrics.

---

## 🚀 Tech Stack

Frontend:
- React (Create React App)
- Tailwind CSS

Backend:
- Node.js
- Express.js

Other:
- Axios
- UUID

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

git clone https://github.com/bultimistry/laundry-order
cd laundry-system

---

### 2️⃣ Run Backend

cd backend  
npm install  
npm run dev  

Server runs on: http://localhost:5000

---

### 3️⃣ Run Frontend

cd frontend  
npm install  
npm start  

App runs on: http://localhost:3000

---

## ✨ Features Implemented

### 🧾 Order Management
- Create new laundry orders
- Auto-calculated billing
- Unique Order ID

### 🔄 Order Status
- RECEIVED
- PROCESSING
- READY
- DELIVERED
- Update status from UI

### 📋 Order Viewing
- View all orders
- Filter by status
- Search by name or phone

### 📊 Dashboard
- Total orders
- Total revenue
- Orders grouped by status

---

## 🤖 AI Usage Report

### Tools Used
- ChatGPT
- GitHub Copilot

---

### Sample Prompts

- "Generate Express.js CRUD APIs for order management"
- "Build React UI for order form and dashboard"
- "Add filtering to React frontend using API params"

---

### What AI Got Wrong

- Suggested ES module version of uuid which caused runtime error
- Initial filtering logic didn’t handle combined name + phone properly
- UI suggestions lacked proper state handling initially

---

### Improvements Made

- Fixed uuid issue by downgrading version
- Optimized filtering logic in backend
- Improved UI with Tailwind CSS
- Added clean architecture (controller → service → data)

---

## ⚖️ Tradeoffs

### Skipped
- Database (used in-memory storage)
- Authentication system
- Multi-garment dynamic UI

---

### If Given More Time

- Integrate MongoDB
- Add user authentication (admin login)
- Add payment tracking
- Generate invoice PDF
- Add unit testing

---

## 📡 API Endpoints

POST /orders  
GET /orders  
PUT /orders/:id/status  
GET /orders/dashboard/summary  

---

## 🎥 Demo



https://www.loom.com/share/27874ce2cebb481897872efc61b6c5dc

---

## 📌 Author

bulti mistry
