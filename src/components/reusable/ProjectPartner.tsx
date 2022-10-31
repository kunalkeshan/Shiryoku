/**
 * Project Partner Component
 */

// Dependencies
import React, { FC, PropsWithChildren } from 'react';

// MUI
import { Typography, Paper, styled, Avatar, Tooltip } from '@mui/material';

interface ProjectPartnerProps extends PropsWithChildren {
	name: string;
	url: string;
	logo: string;
	scale: number;
}

const ProjectPartner: FC<ProjectPartnerProps> = ({
	name,
	url,
	logo,
	scale,
}) => {
	const handleNavigate = () => {
		window.open(url, '_blank');
	};

	return (
		<Tooltip title={`Learn more about ${name}!`}>
			<Container onClick={handleNavigate} sx={{ transform: `scale(${scale})` }}>
				<Avatar src={logo} alt={name} />
				<Typography>{name}</Typography>
			</Container>
		</Tooltip>
	);
};

const Container = styled(Paper)({
	display: 'flex',
	alignItems: 'center',
	padding: '0.25em 0.5em',
	justifyContent: 'center',
	cursor: 'pointer',
	transition: 'all 250ms ease-in-out',
	width: 'clamp(100px, 100%, 200px)',
});

export default ProjectPartner;

ProjectPartner.defaultProps = {
	scale: 1,
};
