// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
  
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
     padding: 0 -15px -15px -15px;
`;


const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border: 20px;
  flex: 1;
  max-width: 60%;
  display: flex;
  justify-content: flex-start;
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



const FormWrapper = styled.form`
  width: 100%;
`;







const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  justify-content: flex-start;
`;
const RadioContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;


const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
  justify-content: flex-start;
`;


const RadioButton = styled.input`
  margin-left: 5px;
  justify-content:flex-start;
`;

const FormLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  justify-content: flex-start;
`;







function UserForm() {
  const history = useHistory()
    const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState(null);
  
  const [walkingSpeed, setWalkingSpeed] = useState('');
  const [runningSpeed, setRunningSpeed] = useState('');
  const [gardeningType, setGardeningType] = useState('');
  const [swimmingLocation, setSwimmingLocation] = useState('');
  const [moviegenre, setMovieGenre] = useState('');
  const [shopping, setShopping] = useState('');
  const [dogwalking, setDogWalking] = useState('');
   const [coffee, setCoffee] = useState([]);
  const [errands, setErrands] = useState([]);
  const [rides, setRides] = useState([]);
  const [childcare, setChildcare] = useState([]);
  const [eldercare, setEldercare] = useState([]);
  const [petcare, setPetCare] = useState([]);
  const [Dinnerparties, setDinnerParties] = useState([]);
  const [television, setTelevision] = useState([]);
  const [restaurant, setRestaurants] = useState([]);
  const [happyhour, setHappyHour] = useState([]);
  const [arts, setArts] = useState([]);
  const [repair, setRepairAdvice] = useState([]);
  
  
   
  

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

  


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://interest-backend.onrender.com/api/user-data', {
        firstname,
        lastname,
        email,
        mobile,
        age,
        education,
        
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
      
      setWalkingSpeed('');
      setRunningSpeed('');
      setGardeningType('');
      setSwimmingLocation('');
      setMovieGenre('');
      setChildcare('');
      setDogWalking('');
      setEldercare('');
      setErrands('');
      setDinnerParties('');
      setHappyHour('');
      setTelevision('');
      setRestaurants('');
      setArts('');
      setCoffee('');
      setRepairAdvice('');
      setRides('');
      
      history.push('/profile');
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
            
       
              
  <form className="basic-form" autoComplete="off">
        <label htmlFor="name">FirstName</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
            </form>
            
             
      <form className="basic-form" autoComplete="off">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          placeholder="Enter your last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      
            
    
          <form className="basic-form" autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
            </form>



            

            <form className="basic-form" autoComplete="off">
        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </form>
      <form className="basic-form" autoComplete="off">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <form className="basic-form" autoComplete="off">
        <label htmlFor="education">Education</label>
        <input
          id="education"
          type="text"
          placeholder="Enter your education level"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </form>
           
<form className="basic-form" autoComplete="off">
        <label htmlFor="latitude">Latitude</label>
        <input
          id="latitude"
          type="text"
          
          value={location?.latitude || ''}
          disabled
        />
            </form>
            <form className="basic-form" autoComplete="off">
        <label htmlFor="longitude">Latitude</label>
        <input
          id="longitude"
          type="text"
           value={location?.longitude || ''}
        
          disabled
        />
            </form>
           
           
            
            {/*walkingSpeed*/}
          <RadioGroupWrapper>
            <div>Walking Speed</div>
             
    <RadioContainer>
      <RadioLabel>
        <RadioButton
          type="radio"
          value="Slow"
          checked={walkingSpeed === 'Slow'}
          onChange={(e) => setWalkingSpeed(e.target.value)}
        />
          Slow
</RadioLabel>
                
      <RadioLabel>
        <RadioButton
          type="radio"
          value="Moderate"
          checked={walkingSpeed === 'Moderate'}
          onChange={(e) => setWalkingSpeed(e.target.value)}
        />
        Moderate
      </RadioLabel>
      <RadioLabel>
        <RadioButton
          type="radio"
          value="Fast"
          checked={walkingSpeed === 'Fast'}
          onChange={(e) => setWalkingSpeed(e.target.value)}
        />
        Fast
      </RadioLabel>
    </RadioContainer>
  </RadioGroupWrapper>
{/*ruunig*/}
            <div>
          <RadioGroupWrapper>    
      <div>Running Speed</div>
      <RadioContainer>
        <RadioLabel>
          <RadioButton
            type="radio"
            value="Slow"
            checked={runningSpeed === 'Slow'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Slow
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            type="radio"
            value="Moderate"
            checked={runningSpeed === 'Moderate'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Moderate
        </RadioLabel>
        <RadioLabel>
          <RadioButton
            type="radio"
            value="Fast"
            checked={runningSpeed === 'Fast'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Fast
        </RadioLabel>
                </RadioContainer>
                </RadioGroupWrapper>
            </div>
            
            

            
             
            {/*gardening*/}
         <RadioGroupWrapper>
  <div>gardeningType</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Flowers/Landscape"
        checked={gardeningType === 'Flowers/Landscape'}
        onChange={(e) => setGardeningType(e.target.value)}
      />
      Flowers/Landscape
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Fruit/Veg"
        checked={gardeningType === 'Fruit/Veg'}
        onChange={(e) => setGardeningType(e.target.value)}
      />
      Fruit/Veg
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="both"
        checked={gardeningType === 'both'}
        onChange={(e) => setGardeningType(e.target.value)}
      />
      both
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

{/*movie*/}

            <RadioGroupWrapper>
  <div>moviegenre</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Action"
        checked={moviegenre === 'Action'}
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      Action
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Romance"
        checked={moviegenre === 'Romance'}
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      Romance
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Comedy"
        checked={moviegenre === 'Comedy'}
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      Comedy
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Other"
        checked={moviegenre === 'Other'}
        onChange={(e) => setMovieGenre(e.target.value)}
      />
      Other
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>


            {/*shopping*/}

            <RadioGroupWrapper>
  <div>shopping</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Groceries"
        checked={shopping === 'Groceries'}
        onChange={(e) => setShopping(e.target.value)}
      />
      Groceries
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Clothing"
        checked={shopping === 'Clothing'}
        onChange={(e) => setShopping(e.target.value)}
      />
      Clothing
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Books"
        checked={shopping === 'Books'}
        onChange={(e) => setShopping(e.target.value)}
      />
      Books
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            
            {/*swimm*/}
            
<RadioGroupWrapper>
  <div>swimmingLocation</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="My backyard"
        checked={swimmingLocation === 'My backyard'}
        onChange={(e) => setSwimmingLocation(e.target.value)}
      />
      My backyard
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Public pool"
        checked={swimmingLocation === 'Public pool'}
        onChange={(e) => setSwimmingLocation(e.target.value)}
      />
      Public pool
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Health club pool"
        checked={swimmingLocation === 'Health club pool'}
        onChange={(e) => setSwimmingLocation(e.target.value)}
      />
      Health club pool
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

       {/*coffee*/}
              <RadioGroupWrapper>
  <div>coffee</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="My place"
        checked={coffee === 'My place'}
        onChange={(e) => setCoffee(e.target.value)}
      />
      My place
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Your place"
        checked={coffee === 'Your place'}
        onChange={(e) => setCoffee(e.target.value)}
      />
      Your place
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            
            {/*art*/}
             <RadioGroupWrapper>
  <div>arts</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Drawing"
        checked={arts === 'Drawing'}
        onChange={(e) => setArts(e.target.value)}
      />
      Drawing
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Sketching"
        checked={arts === 'Sketching'}
        onChange={(e) => setArts(e.target.value)}
      />
      Sketching
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Painting"
        checked={arts === 'Painting'}
        onChange={(e) => setArts(e.target.value)}
      />
      Painting
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

           
             {/*party*/}
           <RadioGroupWrapper>
  <div>Dinner parties</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Casual"
        checked={Dinnerparties === 'Casual'}
        onChange={(e) => setDinnerParties(e.target.value)}
      />
      Casual
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="LeftOvers Okay"
        checked={Dinnerparties === 'LeftOvers Okay'}
        onChange={(e) => setDinnerParties(e.target.value)}
      />
      LeftOvers Okay
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="no housecleaning"
        checked={Dinnerparties === 'no housecleaning'}
        onChange={(e) => setDinnerParties(e.target.value)}
      />
      No housecleaning
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>


               {/*Watching televised sports*/}
           <RadioGroupWrapper>
  <div>Watching televised sports</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Football"
        checked={television === 'Football'}
        onChange={(e) => setTelevision(e.target.value)}
      />
      Football
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Basketball"
        checked={television === 'Basketball'}
        onChange={(e) => setTelevision(e.target.value)}
      />
      Basketball
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Other"
        checked={television === 'Other'}
        onChange={(e) => setTelevision(e.target.value)}
      />
      Other
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>


              {/*Restaurants*/}
           <RadioGroupWrapper>
  <div>Restaurants</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="American"
        checked={restaurant === 'American'}
        onChange={(e) => setRestaurants(e.target.value)}
      />
      American
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Mexican"
        checked={restaurant === 'Mexican'}
        onChange={(e) => setRestaurants(e.target.value)}
      />
      Mexican
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Indian"
        checked={restaurant === 'Indian'}
        onChange={(e) => setRestaurants(e.target.value)}
      />
      Indian
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

{/*happy */}
<RadioGroupWrapper>
  <div>Happy Hour</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Quaterly"
        checked={happyhour === 'Quaterly'}
        onChange={(e) => setHappyHour(e.target.value)}
      />
      Quaterly
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Monthly"
        checked={happyhour === 'Monthly'}
        onChange={(e) => setHappyHour(e.target.value)}
      />
      Monthly
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Weekly"
        checked={happyhour === 'Weekly'}
        onChange={(e) => setHappyHour(e.target.value)}
      />
      Weekly
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Outdoor"
        checked={happyhour === 'Outdoor'}
        onChange={(e) => setHappyHour(e.target.value)}
      />
      Outdoor
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

{/*errands*/}
          <RadioGroupWrapper>
  <div>Errands</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Emergencies"
        checked={errands === 'Emergencies'}
        onChange={(e) => setErrands(e.target.value)}
      />
      Emergencies
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Occasional"
        checked={errands === 'Occasional'}
        onChange={(e) => setErrands(e.target.value)}
      />
      Occasional
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Regular/frequent"
        checked={errands === 'Regular/frequent'}
        onChange={(e) => setErrands(e.target.value)}
      />
      Regular/frequent
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            {/*rides*/}
           <RadioGroupWrapper>
  <div>Rides</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Emergencies"
        checked={rides === 'Emergencies'}
        onChange={(e) => setRides(e.target.value)}
      />
      Emergencies
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Occasional"
        checked={rides === 'Occasional'}
        onChange={(e) => setRides(e.target.value)}
      />
      Occasional
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Regular/frequent"
        checked={rides === 'Regular/frequent'}
        onChange={(e) => setRides(e.target.value)}
      />
      Regular/frequent
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            {/*childcare */}
            
            <RadioGroupWrapper>
  <div>Child care</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Emergencies"
        checked={childcare === 'Emergencies'}
        onChange={(e) => setChildcare(e.target.value)}
      />
      Emergencies
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Occasional"
        checked={childcare === 'Occasional'}
        onChange={(e) => setChildcare(e.target.value)}
      />
      Occasional
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Regular/frequent"
        checked={childcare === 'Regular/frequent'}
        onChange={(e) => setChildcare(e.target.value)}
      />
      Regular/frequent
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            
             {/*ELder care*/}
            
            <RadioGroupWrapper>
  <div>Elder care</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Emergencies"
        checked={eldercare === 'Emergencies'}
        onChange={(e) => setEldercare(e.target.value)}
      />
      Emergencies
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Occasional"
        checked={eldercare === 'Occasional'}
        onChange={(e) => setEldercare(e.target.value)}
      />
      Occasional
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Regular/frequent"
        checked={eldercare === 'Regular/frequent'}
        onChange={(e) => setEldercare(e.target.value)}
      />
      Regular/frequent
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

           
           

            {/*petcare*/}
            
            <RadioGroupWrapper>
  <div>Pet care</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Emergencies"
        checked={petcare === 'Emergencies'}
        onChange={(e) => setPetCare(e.target.value)}
      />
      Emergencies
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Occasional"
        checked={petcare === 'Occasional'}
        onChange={(e) => setPetCare(e.target.value)}
      />
      Occasional
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Regular/frequent"
        checked={petcare === 'Regular/frequent'}
        onChange={(e) => setPetCare(e.target.value)}
      />
      Regular/frequent
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

            
           {/*repair*/}
            <RadioGroupWrapper>
  <div>Repair advice</div>
  <RadioContainer>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Home repair"
        checked={repair === 'Home repair'}
        onChange={(e) => setRepairAdvice(e.target.value)}
      />
      Home repair
    </RadioLabel>
    <RadioLabel>
      <RadioButton
        type="radio"
        value="Auto repair"
        checked={repair === 'Auto repair'}
        onChange={(e) => setRepairAdvice(e.target.value)}
      />
      Auto repair
    </RadioLabel>
  </RadioContainer>
</RadioGroupWrapper>

           
           {/* ... other form content ... */}
          <br />
          
    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button
    onClick={handleSubmit}
    variant="contained"
    color="primary"
    component={Link}
    to="/profile"
  >
    Submit
  </Button>
</div>

            </FormWrapper>
        </FormColumn>
      </FormContainer>
    </FormSection>
  );
}
export default UserForm;
