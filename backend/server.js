const express = require('express');
const app =express();
const dotenv = require('dotenv');
const cors = require('cors');
const DbConennect = require('./utils/db.js');
const AuthRoutes = require('./routes/Auth.js');
const cookieparser = require('cookie-parser');
const AdminRoutes = require('./routes/AdminRoutes.js');


dotenv.config()

//mongoDb
DbConennect();

const PORT = process.env.PORT ||4000
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}));
app.use(cookieparser())

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.get('/',(req,res)=>{
    res.send('This is home page');

});

app.listen(PORT,()=>{
    console.log(`server running Port No ${PORT}`);
})