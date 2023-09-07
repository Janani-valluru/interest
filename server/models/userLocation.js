const mongoose = require('mongoose');


const userLocationSchema = new mongoose.Schema({
  userId: String,
  latitude: Number,
  longitude: Number,
});