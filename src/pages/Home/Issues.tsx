/**
 * Issues Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

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
		</Main>
	);
};

const Main = styled(Box)({});

export default Issues;
