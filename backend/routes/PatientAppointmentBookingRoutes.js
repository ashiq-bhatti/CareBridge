const express = require('express');
const { AppointmentBooking,fetchPatients, getPatientById } = require('../controllers/PatientAppointmentBookingCtrl');

const PatientRoutes = express.Router();

PatientRoutes.post('/bookappointment', AppointmentBooking); 
PatientRoutes.get('/get-patientbooking-by-id/:id', getPatientById); 
//ya nichy  wala route admin waly routes ma rakhna tha but uder kisi waja se kaam ni kr rha is lia ider rakha ha
PatientRoutes.get('/bookappointment', fetchPatients); 

module.exports = PatientRoutes;
