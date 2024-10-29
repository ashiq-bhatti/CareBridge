const express = require('express');
const { register, login, logout, ForgotPassword, ResetPassword} = require('../controllers/AuthCont.js');
const AuthRoutes=express.Router()

AuthRoutes.post('/register',register);
AuthRoutes.post('/login',login);
AuthRoutes.post('/logout',logout);
AuthRoutes.post('/forgot-password',ForgotPassword);
AuthRoutes.post('/reset-password/:id/:token',ResetPassword);


module.exports = AuthRoutes;
