/**
 * Contribute Page
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectContributorsList } from '../../utils/axios';
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
	// Button,
} from '@mui/material';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WebIcon from '@mui/icons-material/Web';
// import YouTubeIcon from '@mui/icons-material/YouTube';

import ContributeCard from '../../components/Home/Contribute/ContributeCard';
import ContributorCard from '../../components/Home/Contribute/ContributorCard';

interface ContributionData {
	name: string;
	description: string;
	repoUrl: string;
	contributeUrl: string;
	icon: any;
}

const Contribute = () => {
	const [contributors, setContributors] = useState<ContributorProfile[]>([]);

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
			name: 'Contribute to Resources!',
			description:
				'For changes related to the resources, visit this link to make those switches.',
			repoUrl: `${config.GITHUB_URL}/tree/main`,
			contributeUrl: `${config.GITHUB_URL}/blob/main/CONTRIBUTING.md`,
			icon: <LibraryBooksIcon />,
		},
		{
			name: 'Contribute to this Website!',
			description:
				'For changes related to this website, visit the following link to develop and integrate what you think can improve this website.',
			repoUrl: `${config.GITHUB_URL}`,
			contributeUrl: `${config.GITHUB_URL}/blob/main/CONTRIBUTING.md`,
			icon: <WebIcon />,
		},
	];

	useEffect(() => {
		const handleFetchContributors = async () => {
			const data = await fetchProjectContributorsList();
			setContributors(data);
		};
		if (contributors.length === 0) handleFetchContributors();
	}, [contributors]);

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
				<Typography variant='body1' fontSize='1.25rem' mt={2}>
					Meet our Contributors!
				</Typography>
				<Typography variant='caption'>
					Without whom this project would not be possible!
				</Typography>
				<Contributors>
					{contributors.length > 0
						? contributors.map((person, index) => (
								<ContributorCard {...person} key={index} />
						  ))
						: null}
				</Contributors>
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

// const YouTubeButton = styled(Button)({
// 	backgroundColor: '#FF0000',
// 	width: 'fit-content',
// 	alignSelf: 'flex-start',
// 	'&:hover': {
// 		backgroundColor: '#FF0000',
// 	},
// 	'.yt-icon': {
// 		marginLeft: '4px',
// 	},
// });

const Contributors = styled(Box)({
	padding: '1em',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	// justifyContent: 'center',
	gap: '1em',
});

export default Contribute;
