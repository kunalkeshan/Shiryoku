/**
 * About Page
 */

// Dependencies
import React from 'react';

import { Typography, styled, Box, Divider, Grid, Paper } from '@mui/material';

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
			<TranslationBox elevation={3}>
				<Grid container id='container'>
					<Grid item xs={5} className='container__box'>
						<Typography variant='h5'>資</Typography>
						<p>Japanese</p>
					</Grid>
					<Grid item xs={7} className='container__box'>
						<Typography variant='h5'>Resources</Typography>
						<p>English</p>
					</Grid>
				</Grid>
			</TranslationBox>
		</Main>
	);
};

const Main = styled(Box)({});

const TranslationBox = styled(Paper)({
	padding: '1em',
	width: 'clamp(200px, 100%, 600px)',
	margin: '1em auto',
	userSelect: 'none',
	'#container': {
		backgroundColor: '#80808030',
		borderRadius: '4px',
		'.container__box': {
			padding: '1em',
			textAlign: 'center',
			fontSize: '1em',
			p: {
				fontSize: '0.8rem',
			},
			border: 'solid 1px #80808060',
			':first-child': {
				borderRadius: '4px 0 0 4px',
			},
			':last-child': {
				borderRadius: '0 4px 4px 0',
			},
		},
	},
});

export default About;
