import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profiledisplay from './pages/Profiledisplay.js';


import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Footer from './components/Footer/Footer';
import Interest from './pages/Interest';
function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/Interest" exact component={Interest} />
				<Route path="/profile" exact component={Profiledisplay} />
				
			</Switch>
			 
			<Footer />
		</Router>
	);
}

export default App;
