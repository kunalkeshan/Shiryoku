/**
 * Contributor Card Component
 */

// Dependencies
import React, { FC, PropsWithChildren } from 'react';

import { Tooltip, Box, styled, Avatar, Typography, Paper } from '@mui/material';

interface ContributorCardProps extends PropsWithChildren, ContributorProfile {}

const ContributorCard: FC<ContributorCardProps> = ({
	avatar,
	contributions,
	profile,
	username,
}) => {
	const handleNavigate = () => {
		window.open(profile, '_blank');
	};

	return (
		<Main onClick={handleNavigate}>
			<Tooltip
				title={`Visit ${username}'s Profile, contributions made: ${contributions}`}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection={'column'}
					width="100%"
					height="100%"
				>
					<Avatar src={avatar} alt={username} variant="rounded" />
					<Typography variant="caption">{username}</Typography>
				</Box>
			</Tooltip>
		</Main>
	);
};

export default ContributorCard;

const Main = styled(Paper)({
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	cursor: 'pointer',
	padding: '1em',
	minWidth: '100px',
	minHeight: '100px',
	'&:hover': {},
});
