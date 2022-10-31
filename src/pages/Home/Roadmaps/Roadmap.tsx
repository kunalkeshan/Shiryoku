/**
 * Single RoadMap page
 */

// Dependencies
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from '../../../utils/data';
import config from '../../../config';

import {
	Typography,
	styled,
	Box,
	Divider,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Grid,
	Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ResourceCard from '../../../components/Home/Resources/ResourceCard';

import { useAppDispatch } from '../../../store';
import { showSnackbar } from '../../../store/features/app';

const Roadmap = () => {
	const dispatch = useAppDispatch();
	const { currentRoadmap } = useParams();
	const navigate = useNavigate();
	const [roadmap, setRoadmap] = useState<IRoadmap | undefined>(undefined);
	const [resources, setResources] = useState<Resource[]>([]);
	const [roadMapId] = useMemo(() => {
		return currentRoadmap?.match(/^[0-9]+/gi) ?? [];
	}, [currentRoadmap]);
	const roadMapUrl = useMemo(() => {
		return config.WEBSITE_URL + '/#/roadmaps/' + currentRoadmap;
	}, [currentRoadmap]);

	useEffect(() => {
		const handleFetchRoadmap = async () => {
			const data = await Data.Roadmaps.getSingleRoadmap(roadMapId);
			setRoadmap(data);
		};
		if (roadmap === undefined) handleFetchRoadmap();
	}, [roadMapId, roadmap]);

	useEffect(() => {
		const handleFetchResources = async () => {
			const data = await Data.Roadmaps.getResourcesOfRoadmap(roadMapId);
			setResources(data);
		};
		if (resources.length === 0) handleFetchResources();
	}, [resources.length, roadMapId]);

	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(roadMapUrl);
			dispatch(
				showSnackbar({
					message: `${roadmap?.name} URL Copied to Clipboard!`,
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

	return (
		<Main>
			<Typography variant="h6" noWrap>
				Roadmap{' '}
				<Typography variant="caption" component="span">
					- organized approach to the resources.
				</Typography>
			</Typography>
			<Divider />
			<Cover>
				<img
					className="cover"
					src={roadmap?.cover}
					alt={roadmap?.name}
					loading="lazy"
				/>
				<img
					className="icon"
					src={roadmap?.icon}
					alt={roadmap?.name}
					loading="lazy"
				/>
				<ArrowBackIcon
					className="backBtn"
					titleAccess="Go back"
					onClick={() => navigate('/roadmaps')}
				/>
			</Cover>
			<Typography variant="h4" mt={2}>
				{roadmap?.name}
				<Tooltip title="Copy roadmap url to clipboard">
					<ContentCopyIcon
						onClick={handleCopyToClipboard}
						sx={{ cursor: 'pointer' }}
					/>
				</Tooltip>
			</Typography>
			<Typography variant="caption">{roadmap?.description}</Typography>
			{roadmap?.topics.length! > 0 &&
				roadmap?.topics.map((topic, index) => (
					<Accordion key={index}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">{topic.name}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Grid container gap={2}>
								{resources.length > 0 &&
									// eslint-disable-next-line array-callback-return
									resources.map((resource, index) => {
										if (resource.roadmap?.subTopics.includes(topic.id))
											return <ResourceCard key={index} {...resource} />;
									})}
							</Grid>
						</AccordionDetails>
					</Accordion>
				))}
		</Main>
	);
};

const Main = styled(Box)({
	width: '100%',
});

const Cover = styled(Box)({
	position: 'relative',
	width: '100%',
	height: '320px',
	marginBottom: '4rem',
	'img.cover': {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	'img.icon': {
		width: '6rem',
		height: 'auto',
		borderRadius: '50%',
		position: 'absolute',
		bottom: '-3rem',
		left: '2rem',
		border: 'solid 0.4rem #FFFFFF',
	},
	'.backBtn': {
		position: 'absolute',
		top: '2rem',
		right: '2rem',
		transform: 'scale(1.5)',
		cursor: 'pointer',
	},
});

export default Roadmap;
