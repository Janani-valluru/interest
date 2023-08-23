import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Let's meet our neighbours</MainHeading>
				<HeroText>
					through NeighborGood
				</HeroText>
				<ButtonWrapper>
					<Link to="Interest">
						<Button>Get Started</Button>
					</Link>
					
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
