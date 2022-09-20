/**
 * RoadMaps page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider, Grid, Paper } from '@mui/material';

const Roadmaps = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Roadmaps{' '}
				<Typography variant='caption' component='span'>
					- organized approach to the resources.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default Roadmaps;
