const PatientModel = require("../models/patient.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the patient already exists
    const existingPatient = await PatientModel.findOne({ email });
    if (existingPatient) {
      return res.status(401).json({
        success: false,
        message: "Patient already exists.",
      });
    }

    // Create a new patient
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newPatient = new PatientModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new patient
    await newPatient.save();

    res.status(201).json({
      success: true,
      message: "Patient registered successfully",
      patient: newPatient,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingPatient = await PatientModel.findOne({ email });

    if (!existingPatient) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcryptjs.compare(
      password,
      existingPatient.password
    );
    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { PatientId: existingPatient._id },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      patient: existingPatient,
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

exports.forgetPassword = (req,res,next)=>{

}
exports.resetPassword = (req,res,next)=>{
  
}


module.exports = { register, login, logout };
