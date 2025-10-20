# 🛠️ Baigiamasis Back-End

This is the **back-end** for the Baigiamasis project, built with **Node.js**, **Express**, and **MongoDB Atlas**. It handles authentication, machine CRUD operations, and user role-based access with JWT.

##  Requirements

Before running the project, make sure you have:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (v18+)](https://nodejs.org/)
- A MongoDB Atlas database

##  Dependencies
  "bcrypt": "^6.0.0",
  "cors": "^2.8.5",
  "express": "^5.1.0",
  "express-jwt": "^8.5.1",
  "joi": "^18.0.1",
  "jsonwebtoken": "^9.0.2",
  "jwt-decode": "^4.0.0",
  "mongodb": "^6.20.0",
  "pnpm": "^10.18.1",
  "router": "^2.2.0"

Follow these steps to run the project locally:
git clone https://github.com/erikaspipas99/baigiamasis.git
cd "baigiamasis back-end"
npm install
node index.js

🔐 Authentication
Authentication is handled through the /auth/login endpoint.

📡 API Endpoints
POST /auth/login
{
  "username": "admin",
  "password": "adminas123"
}

GET /machine
Returns a list of all machine records.
If the user is an admin, all records are returned.
If the user is not admin, machines are filtered by the user's region.
POST /machine
Create a new machine entry.
PUT /machine
Update an existing machine by _id.
DELETE /machine
Delete a machine record by _id.

MongoDB Collection:
user - stores users with "username", "pass(bcvrypt):, "role", "region"
machine - basic data about machines.

File structure:
├── index.js         # Main server file, routes, and CRUD logic
├── Login.js         # Handles login and JWT token generation
├── authRegion.js    # Middleware for JWT and region validation
├── db.js            # MongoDB connection logic
├── hash.js          # Password hashing with bcrypt
├── validate.js      # Input validation using Joi
