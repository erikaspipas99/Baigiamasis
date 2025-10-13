import jwt from "jsonwebtoken";

const JWT_SECRET = "Region";

export function authRegion(req, res) {
  const authName = req.headers("autho");
  const token = authName.split(" ");

  if (!token) return res.json("miss token");
  jwt.verify(token, JWT_SECRET, (user) => {
    if (!user) return res.json("Bad token");
    req.user = user;
  });
}
