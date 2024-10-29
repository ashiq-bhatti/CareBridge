const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["admin","doctor"],
      //   default: "doctor",
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    collage: {
      type: String,
      required: true,
    },
    pmc: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    degrees: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    waitTime: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },
    patientSatisfied: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },

    timeFrom: {
      type: String,
      required: true,
    },
    timeTo: {
      type: String,
      required: true,
    },   
   
      image: {
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);

const DoctorModel = mongoose.model("Doctor", DoctorSchema);

module.exports = DoctorModel;
