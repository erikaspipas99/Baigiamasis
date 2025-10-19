# Baigiamasis back-end
 
Local Setup 
Requirements:
Visual Studio Code;
node.js 18+;
MongoSV atlas;
  "dependencies": {
    "bcrypt": "^6.0.0",
    "cors": "^2.8.5",
    "express": "^5.1.0",
    "express-jwt": "^8.5.1",
    "joi": "^18.0.1",
    "jsonwebtoken": "^9.0.2",
    "jwt-decode": "^4.0.0",
    "mongodb": "^6.20.0",
    "pnpm": "^10.18.1",
    "router": "^2.2.0" }

Project Setup:
git clone https://github.com/erikaspipas99/baigiamasis.git
cd baigiamasis back-end
npm install
node index.js

Authentication is done via the /auth/login endpoint. Upon login, a
JWT token is returned, which is used to access protected endpoints.
JWT Structure:
"username": "admin",
"role": "admin",
"region": "pass"

API Endpoint:
POST /auth/Login
To log in to the system, you need:
"username": "admin",
"password":"adminas123"

GET/machine
returns all "machine" records. If the user is not an admin, it is returned by region.

POST /machine
Adds a new "machine" record;
"id":1234,
"addresses": "Savanoriai",
"ip": 192.168.0.1 ,
"region": "Kaunas"

PUT /machine
Updates an existing record by _id.
"IP": "new IP addresses",
"addresses":"new machine location addresses"

DELETE /machine
Deletes records by _id.
"_id": "this id number deleted"

MongoDB Collection:
user - stores users with "username", "pass(bcvrypt):, "role", "region"
machine - basic data about machines.

File structure:
-| index.js // main server file and CRUD operations;
-| Login.js // Login logic with JWT;
-| authRegion.js // middleware for JWT verification;
-| db.js // MongoDB login;
-| hash.js // password hashing;
-| validate.js // Joi validation;



