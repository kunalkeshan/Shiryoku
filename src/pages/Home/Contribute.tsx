/**
 * Contribute Page
 */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

import {
	Box,
	Divider,
	styled,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Button,
} from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WebIcon from '@mui/icons-material/Web';
import YouTubeIcon from '@mui/icons-material/YouTube';

import ContributeCard from '../../components/Home/ContributeCard';

interface ContributionData {
	name: string;
	description: string;
	repoUrl: string;
	contributeUrl: string;
	icon: any;
}

const Contribute = () => {
	const contributionExamples: string[] = [
		'Typo in some Documentation or README.md file.',
		'Adding new and updated resources to this project.',
		'Removing Irrelevant content.',
		'Adding new features to this website.',
		'Managing bug fixes that you can fix.',
		'Improving the filtering process of resources.',
	];

	const contributionData: ContributionData[] = [
		{
			name: 'Contribute to Notes!',
			description:
				'For changes related to the notes and study material, visit this link to make those switches.',
			repoUrl:
				'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/tree/main',
			contributeUrl:
				'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/main/CONTRIBUTING.md',
			icon: <LibraryBooksIcon />,
		},
		{
			name: 'Contribute to this Website!',
			description:
				'For changes related to this website, visit the following link to develop and integrate what you think can improve this website.',
			repoUrl:
				'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/tree/client',
			contributeUrl:
				'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/blob/client/CONTRIBUTING.md',
			icon: <WebIcon />,
		},
	];

	return (
		<Main>
			<Typography variant='h6' noWrap>
				Contribute{' '}
				<Typography variant='caption' component='span'>
					to the Resources.
				</Typography>
			</Typography>
			<Divider />
			<Content>
				<Typography variant='body1' fontSize='1.2rem'>
					This project is <b>Open Source</b>! That means that you're
					free to contribute and make changes that you feel would
					improve the quality of this project.
				</Typography>
				<Typography variant='body1' fontSize='1rem'>
					If you don't know how to work with GitHub, and have things
					you want to contribute or make changes to,{' '}
					<Link to='/contact'>contact me</Link> to get those changes.
				</Typography>
				<Typography variant='body1' fontSize='1.2rem' mt={1}>
					Some examples of places where you can contribute:
				</Typography>
				<List>
					{contributionExamples.map((example, index) => (
						<ListItem key={index} disablePadding disableGutters>
							<ListItemIcon>
								<HdrStrongIcon />
							</ListItemIcon>
							<ListItemText>{example}</ListItemText>
						</ListItem>
					))}
				</List>
				<Link to='/issues'>
					View more contributing requests here...
				</Link>
				<Typography variant='body1' fontSize='1.2rem'>
					This project is hosted at GitHub, you can contribute in any
					two ways mentioned below:
				</Typography>
				<CardContainer>
					{contributionData.map((data, index) => (
						<ContributeCard key={index} {...data} />
					))}
				</CardContainer>
				<Divider />
			</Content>
		</Main>
	);
};

const Main = styled(Box)({});

const Content = styled(Box)({
	padding: '1em',
});

const CardContainer = styled(Box)({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	// justifyContent: 'space-around',
	gap: '1em',
	margin: '1em 0',
});

const YouTubeButton = styled(Button)({
	backgroundColor: '#FF0000',
	width: 'fit-content',
	alignSelf: 'flex-start',
	'&:hover': {
		backgroundColor: '#FF0000',
	},
	'.yt-icon': {
		marginLeft: '4px',
	},
});

export default Contribute;
