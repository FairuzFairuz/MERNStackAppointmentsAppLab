import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["Interview", "Dinner", "Medical", "Dental", "Lunch", "Other"],
    },
    purpose: { type: String, required: true },
    company: { type: String, default: "" },
    person: { type: String, default: "" },
    address: { type: String, default: "" },
    dateTime: { type: Date, required: true },
    comments: { type: String, default: "" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
