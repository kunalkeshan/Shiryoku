/**
 * Single RoadMap page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider, Grid, Paper } from '@mui/material';

const Roadmap = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Roadmap{' '}
				<Typography variant='caption' component='span'>
					- organized approach to the resources.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default Roadmap;
