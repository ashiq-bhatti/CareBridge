const mongoose = require("mongoose");

const PatientAppointmentBookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    payMethod : {
      type: String,
      required: true,
      enum: ["online", "cash"],
      default:'online',
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
       ref: 'Doctor'
    },
  },
  { timestamps: true }
);

const PatientAppointmentBookingModel = mongoose.model(
  "patientAppointmentBookin",
  PatientAppointmentBookingSchema
);

module.exports = PatientAppointmentBookingModel;
