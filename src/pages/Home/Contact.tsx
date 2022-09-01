/**
 * Contact Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

const Contact = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Contact{' '}
				<Typography variant='caption' component='span'>
					for any queries.
				</Typography>
			</Typography>
			<Divider />
		</Main>
	);
};

const Main = styled(Box)({});

export default Contact;
