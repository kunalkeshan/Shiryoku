/**
 * Roadmap Card Component
 */

// Dependencies
import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid,
} from '@mui/material';

import { useAppDispatch } from '../../../store';
import { showSnackbar } from '../../../store/features/app';

interface RoadmapCardProps extends PropsWithChildren, IRoadmap {}

const RoadmapCard: FC<RoadmapCardProps> = ({
	name,
	description,
	cover,
	id,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const roadMapPath = `/roadmaps/${id}-${name
		.toLowerCase()
		.replace(/\W+/gi, '-')}`;
	const roadMapUrl = `${config.WEBSITE_URL}/#${roadMapPath}`;

	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(roadMapUrl);
			dispatch(
				showSnackbar({
					message: `${name} URL Copied to Clipboard!`,
					type: 'success',
				})
			);
		} catch (error) {
			dispatch(
				showSnackbar({
					message: `Unable to copy URL, try again later.`,
					type: 'error',
				})
			);
		}
	};

	const handleNavigate = () => {
		navigate(roadMapPath);
	};

	return (
		<Grid item xs={12} md={3}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					alt={name}
					height='140'
					image={cover}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' onClick={handleCopyToClipboard}>
						Share
					</Button>
					<Button size='small' onClick={handleNavigate}>
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default RoadmapCard;
