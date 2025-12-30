# 🛒 MERN E-Commerce Website (Ongoing Project)

A full-stack **e-commerce web application** built using the **MERN stack**.  
This project focuses on implementing real-world features such as authentication, product management, cart & order flow, and responsive UI while following clean architecture and best practices.

> ⚠️ **Note:** This project is currently under active development. Features and structure may evolve over time.

---

## 🚀 Features Implemented

- User Authentication (JWT-based)
- User Registration & Login
- Product Listing & Product Details
- Shopping Cart Management
- Order Placement & Order History
- Protected Routes (User Authentication)
- Responsive UI (Mobile-Friendly)
- RESTful API Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Context API (State Management)
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

---

## 📂 Project Structure

client/ # React frontend
server/ # Node.js & Express backend
│
├── controllers
├── routes
├── models
├── middleware
├── config


---

## 🔐 Authentication Flow

- JWT is used for secure authentication
- Access tokens are generated on login
- Protected routes are secured using middleware
- User-specific data (orders, profile) is accessible only after authentication

---

## 🧠 Learning Outcomes

Through this project, I am learning:

- How JWT authentication works (access tokens & protected routes)
- Managing global state using Context API
- Structuring scalable REST APIs
- Handling real-world user flows (cart → checkout → order)
- Making the UI fully responsive
- Connecting frontend and backend efficiently
- Planning to manage complex state using Redux

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
