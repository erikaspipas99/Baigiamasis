import jwt from "jsonwebtoken";

const JWT_SECRET = "Region";

export function authRegion(req, res) {
  const authName = req.headers["authorization"];
  const token = authName && authName.split(" ");

  if (!token) return res.json("miss token");
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.json("Bad token");
    req.user = user;
  });
}
