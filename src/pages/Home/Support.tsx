/**
 * Support Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

const Support = () => {
	return 		<Main>
	<Typography variant='h6' noWrap>
		Support{' '}
		<Typography variant='caption' component='span'>
			to keep the project running.
		</Typography>
	</Typography>
	<Divider />
</Main>;
};

const Main = styled(Box)({});

export default Support;
