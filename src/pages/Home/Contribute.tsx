/**
 * Contribute Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

const Contribute = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Contribute{' '}
				<Typography variant='caption' component='span'>
					to the Resources.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default Contribute;
