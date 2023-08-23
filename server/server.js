// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userInterestRoutes = require('./routes/userinterest');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://jananishetty24:jananishetty24@cluster0.usv8xva.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the routes
app.use('/api/user-data', userInterestRoutes);
// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
