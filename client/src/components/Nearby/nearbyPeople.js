// Install required packages: react, react-dom, react-map-gl, axios, etc.
// Create your React components and set up your project structure.
// MapComponent.js

import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    
    width: '100%',
    height: '500px',
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });

  const [userLocations, setUserLocations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {

    // Fetch user's location and nearby users
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setViewport({ ...viewport, latitude, longitude });
      fetchNearbyUsers(latitude, longitude);

    });
  }, []);

  const fetchNearbyUsers = async (latitude, longitude) => {
    try {
      const response = await axios.get(`/api/nearby-users?latitude=${latitude}&longitude=${longitude}&radius=10000`);
      setUserLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <ReactMapGL {...viewport} onViewportChange={(newViewport) => setViewport(newViewport)}>
        {userLocations.map((user) => (
          <Marker
            key={user._id}
            latitude={user.latitude}
            longitude={user.longitude}
          >
            <div
              className="marker"
              onClick={() => setSelectedUser(user)}
            >
              <img src="/user-marker.png" alt="User Marker" />
            </div>
          </Marker>
        ))}

        {selectedUser && (
          <Popup
            latitude={selectedUser.latitude}
            longitude={selectedUser.longitude}
            onClose={() => setSelectedUser(null)}
          >
            <div>
              <h3>{selectedUser.username}</h3>
              <p>Location: ({selectedUser.latitude}, {selectedUser.longitude})</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;






