
const express = require('express');
const { StripePayment } = require('./stripeController');


const StripeRoutes = express.Router()

StripeRoutes.post('/create-checkout-session',StripePayment)

module.exports = StripeRoutes 