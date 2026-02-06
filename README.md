# Backend Developer Intern Assignment

This project is a simple full-stack application built as part of a backend developer intern assignment.  
The main focus is on building a secure REST API with authentication, role-based access, and CRUD operations, along with a basic frontend to interact with the APIs.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- SQLite3
- JWT (jsonwebtoken)
- bcryptjs
- Joi (validation)
- cors, helmet
- dotenv

### Frontend
- React (Vite)
- Fetch API
- Basic CSS (component-wise)

---

## 📁 Project Structure

backend/
├── src/
│ ├── config/ # Database connection
│ ├── controllers/ # Auth & Task logic
│ ├── middleware/ # JWT & role middleware
│ ├── routes/ # API routes (v1)
│ ├── utils/ # Validation schemas
│ └── app.js # App entry point
├── .env
├── package.json

frontend/
├── src/
│ ├── components/ # Login, Register, Dashboard
│ ├── services/ # API helper
│ ├── App.jsx
│ └── main.jsx



---

## ⚙️ Backend Setup

1. Navigate to backend folder:
```bash
cd backend


🔐 Authentication Flow

User registers using email & password

Passwords are hashed using bcrypt

On login, a JWT token is issued

Token is stored in localStorage

Protected routes require Authorization: Bearer <token>

🧩 API Endpoints (v1)
Auth

POST /api/v1/auth/register – Register user

POST /api/v1/auth/login – Login user

Tasks (Protected)

GET /api/v1/tasks – Get user tasks

POST /api/v1/tasks – Create task

PUT /api/v1/tasks/:id – Update task

DELETE /api/v1/tasks/:id – Delete task

🛡 Role-Based Access Control

Each user has a role (user or admin)

JWT payload contains role info

Middleware is ready to restrict routes based on roles

Current implementation restricts users to manage only their own tasks

🧪 Testing

APIs tested using Postman

Frontend tested manually through browser

Basic validation added to prevent invalid inputs

📈 Scalability Notes

If this application were to scale:

Move to PostgreSQL/MySQL for production

Add Redis for caching

Dockerize services

Add rate limiting & logging

Split auth and task services into microservices