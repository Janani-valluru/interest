// models/UserInterest.js
const mongoose = require('mongoose');

const userInterestSchema = new mongoose.Schema({
  firstname: String,
        lastname : String,
        email : String,
        mobile : Number,
  age: Number,
  education: String,
  interests: [String],
  location: {
    latitude: Number,
    longitude: Number,
  },
  walkingSpeed: String,
        runningSpeed : String,
        swimmingLocation : String,
        moviegenre: String,

});

module.exports = mongoose.model('UserInterest', userInterestSchema);
