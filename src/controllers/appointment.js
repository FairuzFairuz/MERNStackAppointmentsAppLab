import Appointment from "../models/Appointment.js";

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find(
      {},
      "title type date time purpose company person address comments"
    );
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ error: "Not Found" });
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID format" });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment)
      return res.status(404).json({ error: "Not Found" });
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ error: "Failed to update" });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(400).json({ error: "Fail to delete" });
  }
};
