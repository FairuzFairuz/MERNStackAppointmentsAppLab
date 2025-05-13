import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  purpose: { type: String, required: true },
  company: { type: String, default: "" },
  person: { type: String, default: "" },
  address: { type: String, default: "" },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  comments: { type: String, default: "" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
