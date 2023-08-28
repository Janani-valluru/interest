// models/UserInterest.js
const mongoose = require('mongoose');

const userInterestSchema = new mongoose.Schema({
  firstname: String,
        lastname : String,
        email : String,
        mobile : Number,
  age: Number,
  education: String,
  
  location: {
    latitude: Number,
    longitude: Number,
  },
  walkingSpeed: String,
        runningSpeed : String,
        swimmingLocation : String,
  moviegenre: String,
        
        errands: [String],  // Define as an array of strings if it's supposed to be an array
  arts: [String],
  Dinnerparties: [String],
  television: [String],
  restaurant: [String],
  happyhour: [String],
  coffee: [String],
  repair: [String],
  rides: [String],

});

module.exports = mongoose.model('UserInterest', userInterestSchema);
