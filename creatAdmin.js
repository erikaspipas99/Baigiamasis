import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const router = express.Router();
const JWT_SECRET = "password";

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = db.collection("user");
  const user = await users.findOne({ username });

  if (!user) return res.send("Bad Users");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.send("Bad password");

  const token = jwt.sign(
    { username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
