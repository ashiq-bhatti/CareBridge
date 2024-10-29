const mongoose = require('mongoose');

const DbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB is successfully connected..");
    } catch (error) {
        console.error("MongoDB connection error...", error);
    }
};
 
module.exports = DbConnect;



