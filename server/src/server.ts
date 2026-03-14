import cors from "cors";
import express from "express";

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

app.post("/register", (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password });

  console.log("Registered users:", users);

  res.json({ message: "User registered successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});