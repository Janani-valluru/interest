// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Card,
  CardContent,
    CircularProgress,
    Grid,
  
} from '@mui/material';



import { Link } from 'react-router-dom';
import { Button} from '../../globalStyles';

import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '24px', // You can adjust the value as needed
    paddingBottom: '24px', // You can adjust the value as needed
  },
  card: {
    padding: '16px', // You can adjust the value as needed
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
}));
function UserDetails() {
    const classes = useStyles();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Fetch user data from the server
    axios.get('https://interest-backend.onrender.com/user-details') // Update the route to match your Express route
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!userData) {
    return <Typography>No user data available.</Typography>;
    }
  const { location } = userData;
  const latitude = location ? location.latitude : null;
  const longitude = location ? location.longitude : null;

  return (


    
    <Container className={classes.container}>
      <Typography variant="h4" align='center'>Profile</Typography>
      <Card className={classes.card}>
        <CardContent>
          {loading ? (
            <CircularProgress />
          ) : userData ? (
            
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">First Name: {userData.firstname}</Typography>
                </Grid>
        
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Last Name: {userData.lastname}</Typography>
                </Grid>
            
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" >Email: {userData.email}</Typography>
                </Grid>
                              
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Mobile: {userData.mobile}</Typography>
                </Grid>
                                 
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Age: {userData.age}</Typography>
                </Grid>
                                    
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Education: {userData.education}</Typography>
                </Grid>
                                          
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Latitude: {latitude}</Typography>
                </Grid>
                                             
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Longitude: {longitude}</Typography>
                </Grid>
                                                  

                                                     
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Walking Speed: {userData.walkingSpeed}</Typography>
                </Grid>
                                                          
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Running Speed: {userData.runningSpeed}</Typography>
                </Grid>
                                                              
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1">Swimming Location: {userData.swimmingLocation}</Typography>
                </Grid>
                                                                  
                <Grid item xs={12} md={6}>
                  <Typography>Movie Genre: {userData.moviegenre}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Child Care: {userData.childcare}</Typography>
                </Grid>
              
                <Grid item xs={12} md={6}>
                  <Typography>ElderCare: {userData.eldercare}</Typography></Grid>
                     
                <Grid item xs={12} md={6}>
                  <Typography>Errands: {userData.errands}</Typography>
                </Grid>
        
                <Grid item xs={12} md={6}>
                  <Typography>Arts: {userData.arts}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography  variant="subtitle1">Dinner Parties: {userData.Dinnerparties}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Televison: {userData.television}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Restaurants: {userData.restaurant}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Happy Hour: {userData.happyhour}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Coffee: {userData.coffee}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Repair: {userData.repair}</Typography></Grid>
                <Grid item xs={12} md={6}>
                  <Typography>Rides: {userData.rides}</Typography></Grid>
              </Grid>
              ) : (
            <Typography>No user data available.</Typography>
            
          )}
          

        </CardContent>
        <Button>
					<Link to="matches">
					Get Started
					</Link>
					
				</Button>
        
      </Card>
    </Container>
    
  );
}

export default UserDetails;
