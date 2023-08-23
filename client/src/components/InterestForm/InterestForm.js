// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;



const BlueButton = styled(Button)`
  color: white;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const FormCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
      await axios.post('http://localhost:5000/api/user-data', {
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
            onChange={(e) => setMobile(e.target.value)}
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
           
            
            {/*walkingSpeed*/}
            <RadioGroupWrapper>
        <FormLabel>Walking Speed</FormLabel>
        <label>
          <input
            type="radio"
            value="Slow"
            checked={walkingSpeed === 'Slow'}
            onChange={(e) => setWalkingSpeed(e.target.value)}
          />
          Slow
        </label>
        <label>
          <input
            type="radio"
            value="Moderate"
            checked={walkingSpeed === 'Moderate'}
            onChange={(e) => setWalkingSpeed(e.target.value)}
          />
          Moderate
        </label>
        <label>
          <input
            type="radio"
            value="Fast"
            checked={walkingSpeed === 'Fast'}
            onChange={(e) => setWalkingSpeed(e.target.value)}
          />
          Fast
        </label>
            </RadioGroupWrapper>

{/*ruunig*/}
        <RadioGroupWrapper>
        <FormLabel>Running Speed</FormLabel>
        <label>
          <input
            type="radio"
            value="Slow"
            checked={runningSpeed === 'Slow'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Slow
        </label>
        <label>
          <input
            type="radio"
            value="Moderate"
            checked={runningSpeed === 'Moderate'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Moderate
        </label>
        <label>
          <input
            type="radio"
            value="Fast"
            checked={runningSpeed === 'Fast'}
            onChange={(e) => setRunningSpeed(e.target.value)}
          />
          Fast
        </label>
            </RadioGroupWrapper>

            
             
            {/*gardening*/}
            <RadioGroupWrapper>
        <FormLabel> gardeningType</FormLabel>
        <label>
          <input
            type="radio"
            value="Flowers/Landscape "
            checked={gardeningType=== 'Flowers/Landscape '}
            onChange={(e) => setGardeningType(e.target.value)}
          />
         Flowers/Landscape 
        </label>
        <label>
          <input
            type="radio"
            value="Fruit/Veg"
            checked={gardeningType === 'Fruit/Veg'}
            onChange={(e) => setGardeningType(e.target.value)}
          />
         Fruit/Veg
        </label>
        <label>
          <input
            type="radio"
            value="both"
            checked={gardeningType=== 'both'}
            onChange={(e) => setGardeningType(e.target.value)}
          />
         both
        </label>
            </RadioGroupWrapper>
{/*movie*/}

             <RadioGroupWrapper>
        <FormLabel> moviegenre</FormLabel>
        <label>
          <input
            type="radio"
            value="Action "
            checked={ moviegenre=== 'Action '}
            onChange={(e) => setMovieGenre(e.target.value)}
          />
       Action
        </label>
        <label>
          <input
            type="radio"
            value="Romance"
            checked={ moviegenre === 'Romance'}
            onChange={(e) => setMovieGenre(e.target.value)}
          />
         Romance
        </label>
        <label>
          <input
            type="radio"
            value="Comedy"
            checked={ moviegenre=== 'Comedy'}
            onChange={(e) => setMovieGenre(e.target.value)}
          />
        Comedy
              </label>
               <label>
          <input
            type="radio"
            value="Other"
            checked={ moviegenre=== 'Other'}
            onChange={(e) => setMovieGenre(e.target.value)}
          />
       Other
        </label>
            </RadioGroupWrapper>

            {/*shopping*/}

            <RadioGroupWrapper>
        <FormLabel> shopping</FormLabel>
        <label>
          <input
            type="radio"
            value="Groceries "
            checked={shopping=== 'Groceries '}
            onChange={(e) => setShopping(e.target.value)}
          />
         Groceries
        </label>
        <label>
          <input
            type="radio"
            value="Clothing "
            checked={shopping=== 'Clothing '}
            onChange={(e) => setShopping(e.target.value)}
          />
        Clothing 
        </label>
        <label>
          <input
            type="radio"
            value=" Books"
            checked={shopping=== ' Books'}
            onChange={(e) => setShopping(e.target.value)}
          />
         Books
        </label>
            </RadioGroupWrapper>
            
            {/*swimm*/}
            

               <RadioGroupWrapper>
        <FormLabel> swimmingLocation</FormLabel>
        <label>
          <input
            type="radio"
            value="My backyard "
            checked={swimmingLocation=== 'My backyard '}
            onChange={(e) => setSwimmingLocation(e.target.value)}
          />
         My backyard
        </label>
        <label>
          <input
            type="radio"
            value="Public pool"
            checked={swimmingLocation === 'Public pool'}
            onChange={(e) => setSwimmingLocation(e.target.value)}
          />
        Public pool 
        </label>
        <label>
          <input
            type="radio"
            value="Health club pool"
            checked={swimmingLocation=== ' Health club pool'}
            onChange={(e) => setSwimmingLocation(e.target.value)}
          />
        Health club pool
        </label>
            </RadioGroupWrapper>
           
       {/*coffee*/}
               <RadioGroupWrapper>
        <FormLabel> coffee</FormLabel>
        <label>
          <input
            type="radio"
            value="  My place"
            checked={coffee=== 'My place'}
            onChange={(e) => setCoffee(e.target.value)}
          />
        My place
        </label>
        <label>
          <input
            type="radio"
            value="Your place"
            checked={coffee === 'Your place'}
            onChange={(e) =>  setCoffee(e.target.value)}
          />
        Your place
              </label>  
            </RadioGroupWrapper> 
            
            {/*art*/}
             <RadioGroupWrapper>
        <FormLabel> arts</FormLabel>
        <label>
          <input
            type="radio"
            value="Drawing "
            checked={arts=== 'Drawing '}
            onChange={(e) => setArts(e.target.value)}
          />
       Drawing
        </label>
        <label>
          <input
            type="radio"
            value=""
            checked={arts === 'Sketching'}
            onChange={(e) => setArts(e.target.value)}
          />
       Sketching
        </label>
        <label>
          <input
            type="radio"
            value="Painting"
            checked={arts=== ' Painting'}
            onChange={(e) => setArts(e.target.value)}
          />
       Painting
        </label>
            </RadioGroupWrapper>
           
             {/*party*/}
            <RadioGroupWrapper>
        <FormLabel> Dinner parties</FormLabel>
        <label>
          <input
            type="radio"
            value="Casual"
            checked={ Dinnerparties ==='Casual' }
            onChange={(e) => setDinnerParties(e.target.value)}
          />
       Casual
        </label>
        <label>
          <input
            type="radio"
            value="LeftOvers Okay"
            checked={Dinnerparties === 'LeftOvers Okay'}
            onChange={(e) =>  setDinnerParties(e.target.value)}
          />
       LeftOvers Okay
        </label>
        <label>
          <input
            type="radio"
            value="no housecleaning"
            checked={Dinnerparties=== ' no housecleaning'}
            onChange={(e) =>  setDinnerParties(e.target.value)}
          />
      no housecleaning
        </label>
            </RadioGroupWrapper>

               {/*Watching televised sports*/}
            <RadioGroupWrapper>
        <FormLabel> Watching televised sports</FormLabel>
        <label>
          <input
            type="radio"
            value="Football"
            checked={ television ==='Football' }          
            onChange={(e) => setTelevision(e.target.value)}
          />
    Football
        </label>
        <label>
          <input
            type="radio"
            value="Basketball"
            checked={television  === 'Basketball'}
            onChange={(e) => setTelevision(e.target.value)}
          />
     Basketball
        </label>
        <label>
          <input
            type="radio"
            value=" Other"
            checked={television === '  Other'}
            onChange={(e) => setTelevision(e.target.value)}
          />
       Other
        </label>
            </RadioGroupWrapper>

              {/*Restaurants*/}
            <RadioGroupWrapper>
        <FormLabel> Restaurants</FormLabel>
        <label>
          <input
            type="radio"
            value="American"
            checked={ restaurant==='American' }           
            onChange={(e) => setRestaurants(e.target.value)}
          />
   American
        </label>
        <label>
          <input
            type="radio"
            value="Mexican"
            checked={restaurant === 'Mexican'}
            onChange={(e) => setRestaurants(e.target.value)}
          />
    Mexican
        </label>
        <label>
          <input
            type="radio"
            value="Indian"
            checked={restaurant === '  Indian'}
            onChange={(e) => setRestaurants(e.target.value)}
          />
      Indian
        </label>
            </RadioGroupWrapper>
{/*happy */}

            <RadioGroupWrapper>
        <FormLabel> Happy Hour</FormLabel>
        <label>
          <input
            type="radio"
            value="Quaterly"
            checked={ happyhour==='Quaterly' }           
            onChange={(e) => setHappyHour(e.target.value)}
          />
   Quaterly
        </label>
        <label>
          <input
            type="radio"
            value="Monthly"
            checked={ happyhour==='Monthly' }
            onChange={(e) => setHappyHour(e.target.value)}
          />
    Monthly
        </label>
        <label>
          <input
            type="radio"
            value="Weekly"
            checked={happyhour === 'Weekly'}
            onChange={(e) => setHappyHour(e.target.value)}
          />
      Weekly
              </label>
              <label>
          <input
            type="radio"
            value="Outdoor"
            checked={happyhour === 'Outdoor'}
            onChange={(e) => setHappyHour(e.target.value)}
          />
     Outdoor
        </label>
            </RadioGroupWrapper>
{/*errands*/}
            <RadioGroupWrapper>
           <FormLabel>Errands</FormLabel>
        <label>
          <input
            type="radio"
            value="	Emergencies"
            checked={ errands==='	Emergencies' }           
            onChange={(e) =>setErrands(e.target.value)}
          />
   	Emergencies
        </label>
        <label>
          <input
            type="radio"
            value="Occasional"
            checked={  errands==='Occasional ' }
            onChange={(e) => setErrands(e.target.value)}
          />
    Occasional
        </label>
        <label>
          <input
            type="radio"
            value="Regular/frequent"
            checked={ errands === 'Regular/frequent'}
            onChange={(e) => setErrands(e.target.value)}
          />
     Regular/frequent
              </label>
              
            </RadioGroupWrapper>

            {/*rides*/}
            <RadioGroupWrapper>
           <FormLabel>Rides</FormLabel>
        <label>
          <input
            type="radio"
            value="	Emergencies"
            checked={ rides==='	Emergencies' }           
            onChange={(e) => setRides(e.target.value)}
          />
   	Emergencies
        </label>
        <label>
          <input
            type="radio"
            value="Occasional"
            checked={ rides==='Occasional ' }
            onChange={(e) => setRides(e.target.value)}
          />
    Occasional
        </label>
        <label>
          <input
            type="radio"
            value="Regular/frequent"
            checked={rides === 'Regular/frequent'}
            onChange={(e) => setRides(e.target.value)}
          />
     Regular/frequent
              </label>

            </RadioGroupWrapper>
            
            {/*childcare */}
            
            <RadioGroupWrapper>
           <FormLabel>Child care</FormLabel>
        <label>
          <input
            type="radio"
            value="	Emergencies"
            checked={ childcare==='	Emergencies' }           
            onChange={(e) => setChildcare(e.target.value)}
          />
   	Emergencies
        </label>
        <label>
          <input
            type="radio"
            value="Occasional"
            checked={ childcare==='Occasional ' }
            onChange={(e) => setChildcare(e.target.value)}
          />
    Occasional
        </label>
        <label>
          <input
            type="radio"
            value="Regular/frequent"
            checked={childcare=== 'Regular/frequent'}
            onChange={(e) => setChildcare(e.target.value)}
          />
     Regular/frequent
              </label>

            </RadioGroupWrapper>
            
             {/*ELder care*/}
            
            <RadioGroupWrapper>
           <FormLabel>Elder care</FormLabel>
        <label>
          <input
            type="radio"
            value="	Emergencies"
            checked={ eldercare==='	Emergencies' }           
            onChange={(e) => setEldercare(e.target.value)}
          />
   	Emergencies
        </label>
        <label>
          <input
            type="radio"
            value="Occasional"
            checked={ eldercare==='Occasional ' }
            onChange={(e) => setEldercare(e.target.value)}
          />
    Occasional
        </label>
        <label>
          <input
            type="radio"
            value="Regular/frequent"
            checked={eldercare=== 'Regular/frequent'}
            onChange={(e) => setEldercare(e.target.value)}
          />
     Regular/frequent
              </label>

             </RadioGroupWrapper>
           
           

            {/*petcare*/}
            
            <RadioGroupWrapper>
           <FormLabel>Pet care</FormLabel>
        <label>
          <input
            type="radio"
            value="	Emergencies"
            checked={ petcare==='	Emergencies' }           
            onChange={(e) => setPetCare(e.target.value)}
          />
   	Emergencies
        </label>
        <label>
          <input
            type="radio"
            value="Occasional"
            checked={ petcare==='Occasional ' }
            onChange={(e) => setPetCare(e.target.value)}
          />
    Occasional
        </label>
        <label>
          <input
            type="radio"
            value="Regular/frequent"
            checked={petcare=== 'Regular/frequent'}
            onChange={(e) => setPetCare(e.target.value)}
          />
     Regular/frequent
              </label>

            </RadioGroupWrapper>
            
           {/*repair*/}
            
            <RadioGroupWrapper>
           <FormLabel>Repair advice</FormLabel>
        <label>
          <input
            type="radio"
            value="	Home repair"
            checked={ repair==='	Home repair' }           
            onChange={(e) => setRepairAdvice(e.target.value)}
          />
   	Home repair
        </label>
        <label>
          <input
            type="radio"
            value="Auto repair"
            checked={ repair==='Auto repair ' }
            onChange={(e) => setRepairAdvice(e.target.value)}
          />
   Auto repair
        </label>
        

            </RadioGroupWrapper>
            
           
           


           


  {/* ... other form content ... */}
          <br />
          
            
          
          <CenteredButtonContainer>
  <Button>
					<Link to="profile">
						
                  <BlueButton variant="contained" onClick={handleSubmit} >SUBMIT</BlueButton>
      
					</Link>
					
				</Button>
</CenteredButtonContainer>
            </FormWrapper>
        </FormColumn>
      </FormContainer>
    </FormSection>
  );
}
export default UserForm;
