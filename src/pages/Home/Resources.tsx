/**
 * Resources Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider } from '@mui/material';

import Tags from '../../components/Home/Resources/Tags';
import Search from '../../components/Home/Resources/Search';
import AllResources from '../../components/Home/Resources/AllResources';

const Resources = () => {
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Resources{' '}
				<Typography variant='caption' component='span'>
					that will blow your mind!
				</Typography>
			</Typography>
			<Divider variant='fullWidth' />
			<Container>
				<AllResources />
				<CtaBox id='cta'>
					<Search />
					<Divider variant='fullWidth' />
					<Tags />
				</CtaBox>
			</Container>
		</Main>
	);
};

const Main = styled(Box)({
	width: '100%',
});

const Container = styled(Box)({
	width: '100%',
	height: '100%',
	display: 'flex',
	marginTop: '1em',
	gap: '1em',
	'@media(max-width: 800px)': {
		flexDirection: 'column-reverse',
	},
});

const CtaBox = styled(Box)({
	width: '35%',
	borderRadius: '8px',
	background: '#e3f2fd',
	padding: '1em',
	height: 'fit-content',
	'@media(max-width: 800px)': {
		width: '100%',
	},
	'@media(min-width:800px)': {
		position: 'sticky',
		top: '100px',
	},
});

export default Resources;
