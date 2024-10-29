const express = require('express');
const { getPatient, deletePatient, getDoctor, deleteDoctor, UpdateDoctor, getDoctorbyId, getAppointment } = require('../controllers/AdminCont.js');
const isAdmin = require('../middleware/verifyToken.js');

const AdminRoutes = express.Router();

AdminRoutes.get('/getpatient', getPatient);
AdminRoutes.delete('/deletepatient/:id', deletePatient);
AdminRoutes.get('/getdoctor' , getDoctor ); 
AdminRoutes.delete('/deletedoctor/:id' , deleteDoctor);
AdminRoutes.put('/updatedoctor/:id', UpdateDoctor);
AdminRoutes.get('/get-doctor-by-id/:id', getDoctorbyId);
AdminRoutes.get('/get-appointment', getAppointment);



module.exports = AdminRoutes;
