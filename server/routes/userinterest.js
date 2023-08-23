// routes/userInterest.js
const express = require('express');
const router = express.Router();
const UserInterest = require('../models/userinterest');

// Create a new user interest
router.post('/', async (req, res) => {
  try {
    const { firstname,lastname,email,mobile, age, education, interests, location,walkingSpeed,runningSpeed,swimmingLocation,moviegenre,childcare,
        eldercare,
        dogwalking,
      errands,  arts,
        Dinnerparties,
        television,
        restaurant,
        happyhour,
        coffee,
      repair,
        rides,} = req.body;
    
    const newUserInterest = new UserInterest({
     firstname,
        lastname,
        email,
        mobile,
        age,
        education,
        interests,
        location,
        walkingSpeed,
        runningSpeed,
        swimmingLocation,
      moviegenre,
        childcare,
        eldercare,
        dogwalking,
      errands,
       
        arts,
        Dinnerparties,
        television,
        restaurant,
        happyhour,
        coffee,
      repair,
        rides,
    });
    await newUserInterest.save();
    res.json(newUserInterest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
