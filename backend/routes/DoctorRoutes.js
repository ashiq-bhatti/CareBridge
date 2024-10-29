const express = require('express');
const { registerDoctor, upload } = require('../controllers/DoctorCtrl');

const DoctorRoutes = express.Router();

DoctorRoutes.post('/register',upload,registerDoctor);

module.exports = DoctorRoutes; 