// routes/userDetails.js
const express = require('express');
const router = express.Router();
const User = require('../models/userinterest'); // Import your User model

// Retrieve user details
router.get('/', async (req, res) => {
  try {
    const userData = await User.findOne({}, {
      _id: 0, // Exclude the _id field from the response
      firstname: 1,
      lastname: 1,
      email: 1,
      mobile: 1,
      age: 1,
      education: 1,
      interests: 1,
      location: 1,
      walkingSpeed: 1,
      runningSpeed: 1,
      swimmingLocation: 1,
      moviegenre: 1
    })

     .sort({ _id: -1 }) // Sort by _id in descending order (most recent first)
      .exec();
    
    if (!userData) {
      return res.status(404).json({ error: 'User details not found' });
    }
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
