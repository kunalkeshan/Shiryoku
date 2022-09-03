/**
 * About Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

const About = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				About{' '}
				<Typography variant='caption' component='span'>
					- get to know the <b>"why"</b>.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default About;
