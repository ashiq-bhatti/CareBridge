const express = require("express");
const multer = require("multer");
const DoctorModel = require("../models/Doctor.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("image");

const registerDoctor = async (req, res) => {
  try {
    const {
      fname,
      lname,
      collage,
      specialist,
      email,
      city,
      pmc,
      cnic,
      phone,
      gender,
      date,
      degrees,
      waitTime,
      experience,
      patientSatisfied,
      fee,
      timeFrom,
      timeTo,
    } = req.body;
    const image = req.file ? req.file.filename : null;
 if (!image) {
      return res
       .status(400)
       .json({ success: false, message: "Please upload an image." });
    }
    const existDoctor = await DoctorModel.findOne({ email });
    if (existDoctor) {
      return res 
        .status(401)
        .json({ success: false, message: "Doctor already   exists." });
    }

    const newDoctor = new DoctorModel({
      fname,
      lname,
      collage,
      specialist,
      email,
      city,
      pmc,
      cnic,
      phone,
      gender,
      date,
      degrees,
      waitTime,
      experience,
      patientSatisfied,
      fee,
      timeFrom,
      timeTo,
      image,
    });

    await newDoctor.save();

    res.status(200).json({
      success: true,
      message: "Doctor registered successfully.",
      doctor: newDoctor,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Doctor registration  error", error });
  }
};

const fetchDoctors = async(req, res) => {
  const fetch = await DoctorModel.find()
  res.status(200).json({ success: true, doctors: fetch });
}

module.exports = { registerDoctor, upload, fetchDoctors };
