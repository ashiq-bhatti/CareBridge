const jwt = require("jsonwebtoken");
const PatientModel = require("../models/patient.js");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log(token)
    
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await PatientModel.findById(decoded.PatientId);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized: Patient not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Unauthorized: User is not admin",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server internal error",
    });
    console.error("Error during authorization:", error);
  }
};

module.exports = isAdmin;
