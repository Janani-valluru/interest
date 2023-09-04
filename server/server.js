// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userInterestRoutes = require('./routes/userinterest');
const userinterest = require('./models/userinterest');
const userDetailsRoutes = require('./routes/userdetails');




const app = express();

// Middleware
app.use(cors(
  {
    origin: ["https://interest-frontend-dp0i9w7gx-janani-valluru.vercel.app"],
    methods:["POST","GET"],
    credentials:true
));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://jananishetty24:jananishetty24@cluster0.usv8xva.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});







// API endpoint to store user preferences

// Use the routes

app.use('/api/user-data', userInterestRoutes);
app.use('/api/user-details', userDetailsRoutes);
// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/userinterests', (req, res) => {
  userinterest.find()
    .then()
})
