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
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://jananishetty24:jananishetty24@cluster0.usv8xva.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.post('/user-data', async (req, res) => {
  const FormData = req.body;
  try {
    const savedFormData = await FormData.create(FormData);
    res.status(201).json(savedFormData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/profile/:profileName', async (req, res) => {
  const profileName = req.params.profileName;
  try {
    const formData = await FormData.findOne({ profileName });
    if (formData) {
      res.json(formData);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



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