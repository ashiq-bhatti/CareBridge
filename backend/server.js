const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const DbConennect = require("./utils/db.js");
const AuthRoutes = require("./routes/Auth.js");
const cookieparser = require("cookie-parser");
const AdminRoutes = require("./routes/AdminRoutes.js");
const DoctorRoutes = require("./routes/DoctorRoutes.js");
const PatientRoutes = require("./routes/PatientAppointmentBookingRoutes.js");
const StripeRoutes = require("./Stripe/stripeRoute.js");


dotenv.config();
const path = require("path");

//mongoDb
DbConennect();

const PORT = process.env.PORT || 4000;
app.use(express.json()); 
app.use(cors());
app.use(cookieparser());

// use for  Serve static data
app.use('/public', express.static('public'));


app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/doctor", DoctorRoutes);
app.use("/api/patientappointmentbooking", PatientRoutes);

app.use("/api",StripeRoutes)
app.get("/", (req, res) => {
  res.send("This is home page server page");
});


app.listen(PORT, () => {
  console.log(`server running on Port No ${PORT}`);
});
