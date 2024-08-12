const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
        type: String,
        enum: ["admin", "patient"],
        default: "patient",
      }
  },
  { timestamps: true }
);

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = PatientModel;
