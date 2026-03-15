import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecretkey";


const app = express();

app.use(cors());
app.use(express.json());

type User = {
    email: string;
    password: string;
};

const users: User[] = [];


app.get("/", (req, res) => {
  res.send("Authentication server running");
});


app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ 
    email, 
    password: hashedPassword });

  console.log("Registered users:", users);

  res.json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign(
  { email: user.email },
  JWT_SECRET,
  { expiresIn: "1h" }
);

res.json({
  message: "Login successful",
  token
});
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});