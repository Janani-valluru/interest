// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
  Container,
  Chip,
  Paper,
  Grid,
} from '@mui/material';
import styled from 'styled-components';

const FormSection = styled.div`
  padding: 160px 0;
  background: #101522;
`;

const FormTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

`;

const FormContainer = styled.div`
display:flex;
 justify-content: center;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
`;


const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border: 20px;
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
  }

  img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const FormWrapper = styled.form`
  width: 100%;
`;

const FormMessage = styled.div`
  color: ${({ error }) => (error ? 'red' : 'green')};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;

const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;

const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

const FormImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

const FormImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
const CenteredButtonContainer = styled.div`
  text-align: center;
`;

const FormButton = styled.button`
  border-radius: 4px;
    background: none;
    margin-top: 1.5rem;
    white-space: nowrap;
    outline: none;
    width: 100%;
    font-size: 1.4rem;
    padding: 5px 15px;
    border: 2px solid black;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-align:center;
  

  &:hover {
    color: white;
    transition: background-color 0.4s ease-in;
    background-color: black;
  }
`;

function UserForm() {
    const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState(null);
  const [interest, setInterest] = useState('');
  const [interests, setInterests] = useState([]);
  const [walkingSpeed, setWalkingSpeed] = useState('');
  const [runningSpeed, setRunningSpeed] = useState('');
  const [gardeningType, setGardeningType] = useState('');
  const [swimmingLocation, setSwimmingLocation] = useState('');
  const [moviegenre, setMovieGenre] = useState('');
  
  

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  }, []);

  const handleAddInterest = () => {
    if (interest) {
      setInterests([...interests, interest]);
      setInterest('');
    }
  };

  const handleRemoveInterest = (index) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/user-data', {
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
         // Include location data
      });
      // Reset the form after submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setAge('');
      setEducation('');
      setLocation('');
      setInterests([]);
      setWalkingSpeed('');
      setRunningSpeed('');
      setGardeningType('');
      setSwimmingLocation('');
      setMovieGenre('')
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
    <FormSection>
      
      <FormContainer>
        <FormColumn>
          {/* ... form content ... */}
          <FormTitle>Interest Form</FormTitle>
 <FormWrapper onSubmit={handleSubmit}>
          <TextField
            label="FirstName"
            variant="outlined"
            fullWidth
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
            label="LastName"
            variant="outlined"
            fullWidth
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            label="Mobile"
            variant="outlined"
            fullWidth
            value={mobile}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Education"
            variant="outlined"
            fullWidth
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            />
            <TextField
            label="WalkingSpeed"
            variant="outlined"
            fullWidth
            value={walkingSpeed}
            onChange={(e) => setWalkingSpeed(e.target.value)}
            />
            <TextField
            label="RunningSpeed"
            variant="outlined"
            fullWidth
            value={runningSpeed}
            onChange={(e) => setRunningSpeed(e.target.value)}
            />

            <TextField
            label="SwimmingLocation"
            variant="outlined"
            fullWidth
            value={swimmingLocation}
            onChange={(e) => setSwimmingLocation(e.target.value)}
            />
            <TextField
            label="GardeningType"
            variant="outlined"
            fullWidth
            value={gardeningType}
            onChange={(e) => setGardeningType(e.target.value)}
            />
             <TextField
            label="MovieGenre(drama , action, comedy)"
            variant="outlined"
            fullWidth
            value={moviegenre}
            onChange={(e) => setMovieGenre(e.target.value)}
            />
           


  {/* ... other form content ... */}
          <br />
          <TextField
            label="Latitude"
            variant="outlined"
            fullWidth
            value={location?.latitude || ''}
            disabled
          />
          <TextField
            label="Longitude"
            variant="outlined"
            fullWidth
            value={location?.longitude || ''}
            disabled
            />
            <TextField
            label="Interest"
            variant="outlined"
            fullWidth
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            />
            <FormButton
            variant="contained"
            color="primary"
            onClick={handleAddInterest}
          >
            Add Interest
          </FormButton>
          <br />
          <Paper
            elevation={3}
            style={{ marginTop: '20px', padding: '10px' }}
          >
            <Typography variant="h6">Interests:</Typography>
            <FormRow>
              {interests.map((item, index) => (
                <Grid item key={index}>
                  <Chip
                    label={item}
                    onDelete={() => handleRemoveInterest(index)}
                  />
                </Grid>
              ))}
            </FormRow>
          </Paper>
          {/* ... rest of the form ... */}
          <br />
          <CenteredButtonContainer>
  <Button variant="contained" color="primary" type="submit">
    Submit
  </Button>
</CenteredButtonContainer>
            </FormWrapper>
        </FormColumn>
      </FormContainer>
    </FormSection>
  );
}
export default UserForm;
