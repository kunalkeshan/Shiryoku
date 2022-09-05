/**
 * Support Page
 */

// Dependencies
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { Typography, styled, Box, Divider, Container } from '@mui/material';

import CoffeeAnimationData from '../../assets/lottie/coffee.json';

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
				<SupportContent
					width={{ xs: '100%', md: '35%' }}
				></SupportContent>
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
