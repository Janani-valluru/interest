const express = require('express');
const router = express.Router();


app.post('/api/user-locations', async (req, res) => {
  const { userId, latitude, longitude } = req.body;
  try {
    const newUserLocation = new UserLocation({ userId, latitude, longitude });
    await newUserLocation.save();
    res.status(201).json(newUserLocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/nearby-users', async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  try {
    const nearbyUsers = await UserLocation.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseFloat(radius),
        },
      },
    });
    res.json(nearbyUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});