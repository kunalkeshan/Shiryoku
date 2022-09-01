/**
 * Single Resource Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

const ResourcePage = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Resource{' '}
				<Typography variant='caption' component='span'>
					Single Resource.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default ResourcePage;
