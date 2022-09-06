/**
 * Support Page
 */

// Dependencies
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { Typography, styled, Box, Divider, Container } from '@mui/material';

import CoffeeAnimationData from '../../assets/lottie/coffee.json';
import BuyMeACoffee from '../../components/Home/Support/BuyMeACoffee';
import BecomeAPatreon from '../../components/Home/Support/BecomeAPatreon';

const Support = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Support{' '}
				<Typography variant='caption' component='span'>
					to keep the project running.
				</Typography>
			</Typography>
			<Divider />
			<Content>
				<Animation display={{ xs: 'none', md: 'block' }}>
					<Player
						src={CoffeeAnimationData}
						autoplay
						loop
						style={{ width: '100%', height: 'auto' }}
					/>
				</Animation>
				<SupportContent width={{ xs: '100%', md: '35%' }}>
					<Typography>
						Shiryoku (Resources) is an initiative to reduce the
						resistance between students and the resources that they
						require to up-skill themselves. <br />I made this
						Project during my third year the philosophy, that;
					</Typography>
					<Typography component='q' fontWeight='bold' variant='h6'>
						Be the Senior You Needed the most as a Junior.
					</Typography>
					<Typography>
						To keep this project running, your support would mean a
						lot. A simple coffee is worth a 1000 times more than a
						coffee!
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '1em',
							mt: 1,
							flexWrap: 'wrap',
						}}
					>
						<BuyMeACoffee />
						<BecomeAPatreon />
					</Box>
				</SupportContent>
			</Content>
		</Main>
	);
};

const Main = styled(Box)({});

const Content = styled(Container)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
});

const Animation = styled(Box)({
	width: 'max(50%, 200px)',
	display: 'flex',
});

const SupportContent = styled(Box)({
	padding: '1em',
	width: '35%',
	background: 'rgba( 255, 255, 255, 0.4 )',
	backdropFilter: 'blur(4px)',
	webkitBackdropFilter: 'blur(4px)',
	borderRadius: '8px',
	marginTop: '1em',
});

export default Support;
