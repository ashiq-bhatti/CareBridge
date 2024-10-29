const PatientAppointmentBookingModel = require("../models/patientAppointmentBooking");

const AppointmentBooking = async (req, res) => {
  try {
    const { name, phone, date, time, payMethod } = req.body;
    const { id } = req.params;
    const newPatientAppointment = new PatientAppointmentBookingModel({
      name: name,
      phone: phone,
      date: date,
      time: time,
      payMethod: payMethod,
      doctor: id,
    });

    await newPatientAppointment.save();
    res.status(200).json({
      success: true,
      message: "Appointment Booking Successfully.",
      patient: newPatientAppointment,
    });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({
      success: false,
      message: "Error in processing Patient  Appointment Booking",
      error: error.message,
    });
  }
};

const fetchPatients = async (req, res) => {
  try {
    const fetchPatient = await PatientAppointmentBookingModel.find().populate(
      "doctor",
      "fname lname  specialist fee"
    );
    if (fetchPatient) {
      return res.status(200).json(fetchPatient);
      console.log(fetchPatient);
    } else {
      return res.status(400).json({ message: "Cannot find" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const getPatientById = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await PatientAppointmentBookingModel.findById(
      patientId
    ).populate("doctor", "fname lname  fee");
    res.status(200).json({ success: true, patient });
  } catch (error) {
    console.log("Erroe in get patient", error);
    res.status(500).json({ success: false, Message: "Server internal error" });
  }
};

module.exports = { AppointmentBooking, fetchPatients, getPatientById };
