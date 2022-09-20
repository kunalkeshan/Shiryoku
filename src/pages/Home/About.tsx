/**
 * About Page
 */

// Dependencies
import React from 'react';

import {
	Typography,
	styled,
	Box,
	Divider,
	Grid,
	Paper,
	Container,
} from '@mui/material';

import TagsGif from '../../assets/howToUse/tags.gif';
import SearchGif from '../../assets/howToUse/search.gif';
import ShareGif from '../../assets/howToUse/share.gif';
import RoadmapsGif from '../../assets/howToUse/roadmaps.gif';
import { info } from 'console';

const data = [
	{
		image: TagsGif,
		label: 'Sort resources using Tags',
		text: 'Use tags to sort the specific resources that you are looking for. When needed, use the "Clear Tags" button to clear all selected tags.',
	},
	{
		image: SearchGif,
		label: 'Search for Resources',
		text: "Search for resources based on the name, description and tags associated to it. Clear the search when you're done searching.",
	},
	{
		image: ShareGif,
		label: 'Share and visit resource',
		text: 'Use the "Copy the URL to your clipboard" to share the URL directly, or visit the website, the GitHub repo (if open source) and share it optionally where you need to.',
	},
	{
		image: RoadmapsGif,
		label: 'Use Roadmaps',
		text: 'Roadmaps is an organized approach to Resources. Share the roadmap with others, and use it to follow a structured learning path.',
	},
];

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
			<Container>
				{data.map((info, index) => (
					<Box
						key={index}
						sx={{
							display: 'flex',
							alignItems: 'center',
							mt: 4,
							flexDirection:
								index % 2 === 0 ? 'row' : 'row-reverse',
							gap: '1em',
							'@media (max-width: 800px)': {
								flexWrap: 'wrap',
								flexDirection: 'row',
							},
						}}
					>
						<Box>
							<Typography variant='h4'>{info.label}</Typography>
							<Typography variant='h6'>{info.text}</Typography>
						</Box>
						<img
							src={info.image}
							alt={info.label}
							style={{
								width: 'min(100%, 400px)',
								height: 'auto',
							}}
						/>
					</Box>
				))}
			</Container>
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
