const mongoose = require("mongoose");

module.exports =  connect = async() => {
    
    try {
        const response = await mongoose.connect(process.env.DB_URI, {
            useUnifiedTopology: true
        }); 
        console.log("Mongoose connected");
    } catch (error) {
        console.log(error);
    }
}