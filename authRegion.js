import jwt from "jsonwebtoken";

const JWT_SECRET = "password";

export function authRegion(req, res, next) {
  const authName = req.headers["authorization"];
  const token = authName && authName.split(" ")[1];

  if (!token) return res.json("miss token");

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.json("Bad token");
    console.log("miss JWT", user);
    req.user = user;
    next();
  });
}
