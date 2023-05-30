// Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URL;
module.exports = mongoose.connect('mongodb://127.0.0.1/pollingdb', {
     useNewUrlParser: true,
      useUnifiedTopology: true 
    })
    .then(() => console.log("Database connected successfully!"));



