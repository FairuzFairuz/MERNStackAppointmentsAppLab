import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import appointment from "./src/routes/appointment.js";

dotenv.config();
const app = express();
app.use(express.json);
app.use(cors());

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.error("DB Connection failed:", error));

app.use("/api/appointments", appointment);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
