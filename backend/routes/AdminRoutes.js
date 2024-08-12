const express = require('express');
const { getPatient, deletePatient } = require('../controllers/AdminCont.js');
const isAdmin = require('../middleware/verifyToken.js');
const AdminRoutes = express.Router();

AdminRoutes.get('/getpatient', isAdmin, getPatient);
AdminRoutes.delete('/delete/:id', isAdmin, deletePatient);

module.exports = AdminRoutes;
