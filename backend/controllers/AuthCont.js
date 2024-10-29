const PatientModel = require("../models/patient.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingPatient = await PatientModel.findOne({ email });
    if (existingPatient) {
      return res.status(401).json({
        success: false,
        message: "User already exists.",
      });
    }

    const hashdPassword = await bcryptjs.hash(password, 10);

    const newPatient = new PatientModel({
      name,
      email,
      password: hashdPassword,
    });

    await newPatient.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
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
        message: "User not found",
      });
    }

    const isPasswordValid = await bcryptjs.compare(
      password,
      existingPatient.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { PatientId: existingPatient._id },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
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
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Error during logout.:", error);
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
  }
};

const ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await PatientModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not exists" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mhassnainali1122@gmail.com",
        pass: "fqxtdciihpevzdhk",
      },
    });

    const mailOptions = {
      from: "mhassnainali1122@gmail.com",
      to: email,
      subject: "Reset Password Link From Care Bridge",
      text: `http://localhost:5173/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ success: false, message: "Failed to send email" });
      } else {
        res
          .status(200)
          .json({ success: true, message: "Reset link sent successfully" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const ResetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const hashPassword = await bcryptjs.hash(password, 10);

    await PatientModel.findByIdAndUpdate(
      { _id: decoded.id },
      { password: hashPassword }
    );

    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Error during reset password..", error);
    res.status(500).json({
      success: false,
      message: "Invalid  or expired token",
    });
  }
};

module.exports = { register, login, logout, ForgotPassword, ResetPassword };
