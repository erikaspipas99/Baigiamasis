import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connectDB } from "./db.js";

const router = express.Router();
const JWT_SECRET = "password";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const db = await connectDB();
  const users = db.collection("user");
  const user = await users.findOne({ username });

  if (!user) return res.send("Bad Users");

  const isValid = await bcrypt.compare(password, user.pass);
  if (!isValid) return res.send("Bad password");

  const token = jwt.sign(
    { username: user.username, role: user.role, region: user.region },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
