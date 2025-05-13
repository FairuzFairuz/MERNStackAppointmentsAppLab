import express from "express";
// import Appointment from "../models/Appointment.js";
import {
  createAppointment,
  deleteAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
} from "../controllers/appointment.js";

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
