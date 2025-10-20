# 🔧 Back-end: Baigiamasis projektas

This is the **back-end** for the **Baigiamasis** project, built with **Node.js**, **Express**, and **MongoDB Atlas**. It handles:

- 🔐 JWT-based authentication
- ➕ CRUD operations for machines
- 🧑‍💼 Role and region-based access control

## ✅ Requirements

Before running the project, ensure the following are installed:

- Visual Studio Code
- Node.js (v18+)
- A MongoDB Atlas database *(or local instance)*

## 📦 Dependencies

```json
"bcrypt": "^6.0.0"
"cors": "^2.8.5"
"express": "^5.1.0"
"express-jwt": "^8.5.1"
"joi": "^18.0.1"
"jsonwebtoken": "^9.0.2"
"jwt-decode": "^4.0.0"
"mongodb": "^6.20.0"
"pnpm": "^10.18.1"
"router": "^2.2.0"

# 1. Clone the repository
git clone https://github.com/erikaspipas99/baigiamasis.git

# 2. Navigate to the back-end directory
cd "baigiamasis back-end"

# 3. Install dependencies
npm install

# 4. Start the server
node index.js

Authentication:
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "adminas123"
}

API Endpoints:
| Method | Endpoint      | Description                                        |
| ------ | ------------- | -------------------------------------------------- |
| POST   | `/auth/login` | Authenticate user and receive JWT                  |
| GET    | `/machine`    | Get all machines (admin) or region-specific (user) |
| POST   | `/machine`    | Create new machine                                 |
| PUT    | `/machine`    | Update machine by `_id`                            |
| DELETE | `/machine`    | Delete machine by `_id`                            |

MongoDB Collections:
user:
username
pass (bcrypt-hashed)
role (e.g., "admin", "user")
region
machine:
Stores machine-related data (name, type, region, etc.)

File Structure:
baigiamasis back-end/
├── index.js          # Main server file, routes, and CRUD logic
├── Login.js          # Handles login and JWT generation
├── authRegion.js     # Middleware for JWT and region validation
├── db.js             # MongoDB connection logic
├── hash.js           # Password hashing with bcrypt
├── validate.js       # Input validation using Joi

