const DoctorModel = require("../models/Doctor.js");
const PatientModel = require("../models/patient.js");
const PatientAppointmentBookingModel = require("../models/patientAppointmentBooking.js");

const getPatient = async (req, res) => {
  try {
    const patients = await PatientModel.find();
    res.status(200).json({ patients });
  } catch (error) {
    console.error("Error in getPatient:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};
 
const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    const patient = await PatientModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    if (patient.role === "admin") {
      return res.status(409).json({
        success: false,
        message: "You cannot delete yourself because you are an admin",
      });
    }

    await PatientModel.findByIdAndDelete(patientId);

    return res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
      patient,
    });
  } catch (error) {
    console.error("Error in deletePatient:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const getDoctor = async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.status(200).json({ doctors });
  } catch (error) {
    console.error("Error in getDoctor:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const getDoctorbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await DoctorModel.findById(id);
    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error in getDoctor:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error....",
    });
  }
};

const UpdateDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    const Updatedoctor = await DoctorModel.findByIdAndUpdate(
      doctorId,
      req.body,
      { new: true }
    );

    if (!Updatedoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found..",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Doctor Updated successfully",
      Updatedoctor,
    });
  } catch (error) {
    console.error("Error in UpdateDoctor:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    const doctor = await DoctorModel.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found..",
      });
    }

    if (doctor.role === "admin") {
      return res.status(409).json({
        success: false,
        message:
          "You cannot delete yourself because you are an doctor as admin",
      });
    }

    await DoctorModel.findByIdAndDelete(doctorId);

    return res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
      doctor,
    });
  } catch (error) {
    console.error("Error in deleteDoctor:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const getAppointment = async (req, res) => {
  try {
    const appointments = await PatientAppointmentBookingModel.find();
    res.status(200).json({ appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

module.exports = {
  getPatient,
  deletePatient,
  getDoctor,
  deleteDoctor,
  UpdateDoctor,
  getDoctorbyId,
  getAppointment,
};
