/**
 * Contribute Card Component
 */

import React, { FC, PropsWithChildren } from 'react';

import {
	Card,
	CardContent,
	Typography,
	styled,
	Button,
	CardActions,
} from '@mui/material';

interface ContributeCardProps extends PropsWithChildren {
	name: string;
	description: string;
	repoUrl: string;
	contributeUrl: string;
	icon: any;
}

const ContributorCard: FC<ContributeCardProps> = ({
	name,
	description,
	repoUrl,
	contributeUrl,
	icon,
}) => {
	const handleNavigate = (url: string) => () => {
		window.open(url, '_blank');
	};

	return (
		<Card sx={{ width: 'clamp(200px, 100%, 560px)' }}>
			<CardContent>
				<Typography
					variant='body1'
					fontSize='1.25rem'
					display='flex'
					alignItems='center'
					gap={2}
				>
					{icon} {name}
				</Typography>
				<Typography variant='body2' fontSize='1rem'>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<ContributeButton
					variant='text'
					onClick={handleNavigate(contributeUrl)}
				>
					How to Contribute?
				</ContributeButton>
				<RepoButton
					variant='contained'
					onClick={handleNavigate(repoUrl)}
				>
					Visit Repo.
				</RepoButton>
			</CardActions>
		</Card>
	);
};

export default ContributorCard;

const ContributeButton = styled(Button)({});

const RepoButton = styled(Button)({});
