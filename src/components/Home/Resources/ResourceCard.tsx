/**
 * Resource Card
 */

// Dependencies
import React, { FC, PropsWithChildren } from 'react';

import { Tooltip, Paper, styled, Grid, Avatar } from '@mui/material';

interface ResourceCardProps extends PropsWithChildren, Resource {}

const ResourceCard: FC<ResourceCardProps> = (props) => {
	return (
		<ResourceContainer item xs={12}>
			<ResourceBox elevation={3}>{props.name}</ResourceBox>
		</ResourceContainer>
	);
};

const ResourceContainer = styled(Grid)({});

const ResourceBox = styled(Paper)({});

export default ResourceCard;
