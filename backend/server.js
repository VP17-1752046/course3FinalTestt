import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import teacherRoute from "./routes/teacherRoute.js";
import positionRoute from "./routes/positionRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://trongtin:trongtin1999@cluster0.qhv8q.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/teachers", teacherRoute);
app.use("/api/positions", positionRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
