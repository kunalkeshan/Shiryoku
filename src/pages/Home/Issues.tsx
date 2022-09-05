/**
 * Issues Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider, Container } from '@mui/material';


const Issues = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Issues{' '}
				<Typography variant='caption' component='span'>
					to fix the Resources.
				</Typography>
			</Typography>
			<Divider />
			<Content>
				<Animation></Animation>
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

export default Issues;
