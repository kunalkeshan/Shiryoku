/**
 * RoadMaps page
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import Data from '../../../utils/data';

import {
	Typography,
	styled,
	Box,
	Divider,
	Grid,
	Container,
} from '@mui/material';

import RoadmapCard from '../../../components/Home/Roadmap/RoadmapCard';

const Roadmaps = () => {
	const [roadMaps, setRoadMaps] = useState<IRoadmap[]>([]);

	useEffect(() => {
		const handleFetchRoadmaps = async () => {
			const data = await Data.Roadmaps.getRoadmaps();
			setRoadMaps(data);
		};
		if (roadMaps.length === 0) handleFetchRoadmaps();
	}, [roadMaps.length]);

	return (
		<Main>
			<Typography variant="h6" noWrap>
				Roadmaps{' '}
				<Typography variant="caption" component="span">
					- organized approach to the resources.
				</Typography>
			</Typography>
			<Divider />
			<Container>
				<RoadMapContainer container>
					{roadMaps.length > 0 &&
						roadMaps.map((data, index) => (
							<RoadmapCard key={index} {...data} />
						))}
				</RoadMapContainer>
			</Container>
		</Main>
	);
};

const Main = styled(Box)({});

const RoadMapContainer = styled(Grid)({
	marginTop: '1em',
	gap: '1em',
});

export default Roadmaps;
