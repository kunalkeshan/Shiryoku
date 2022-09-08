/**
 * Issues Page
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { fetchProjectIssuesList } from '../../utils/axios';

import {
	Typography,
	Box,
	styled,
	Divider,
	Grid,
	Container,
} from '@mui/material';

import IssueCard from '../../components/Home/IssueCard';

const Issues = () => {
	const [issues, setIssues] = useState<GitHubIssue[]>([]);

	useEffect(() => {
		const handleFetchIssues = async () => {
			const data = await fetchProjectIssuesList();
			setIssues(data);
		};
		handleFetchIssues();
	}, []);
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Issues{' '}
				<Typography variant='caption' component='span'>
					to fix the Resources.
				</Typography>
			</Typography>
			<Divider />
			<Content>
				{issues.length > 0 ? (
					<CardsContainer
						container
						spacing={2}
						gap={2}
						justifyContent='center'
					>
						{issues.map((issue, index) => (
							<IssueCard {...issue} key={index} />
						))}
					</CardsContainer>
				) : (
					<Typography>No issues available right now! 🥳🙌</Typography>
				)}
			</Content>
		</Main>
	);
};

const Main = styled(Box)({});

const Content = styled(Container)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
});

const CardsContainer = styled(Grid)({
	marginTop: '1em',
	width: '100%',
});

export default Issues;
