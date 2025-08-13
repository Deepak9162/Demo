import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(cors({
  origin: ["https://demo090.netlify.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

