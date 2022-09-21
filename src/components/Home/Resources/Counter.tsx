/**
 * Counter Component
 */

import React, { useState, useEffect } from 'react';
import Data from '../../../utils/data';

import { Box, styled, Typography } from '@mui/material';

const Counter = () => {
	const [resourcesCount, setResourcesCount] = useState(0);
	const [roadmapsCount, setRoadmapsCount] = useState(0);

	useEffect(() => {
		const getTotalCount = async () => {
			const rsCount = await Data.Resources.getTotalResources();
			const rmCount = await Data.Roadmaps.getTotalRoadmaps();

			for (let i = 0; i <= rsCount; i++) {
				sleep(25, () => setResourcesCount(i));
			}
			for (let i = 0; i <= rmCount; i++) {
				sleep(100, () => setRoadmapsCount(i));
			}
		};

		function sleep(time: number, cb: any) {
			return setTimeout(cb, time);
		}
		getTotalCount();
	}, []);

	return (
		<Main>
			<Typography variant='body1'>{resourcesCount}+ Resources</Typography>
			<Typography variant='body1'>{roadmapsCount}+ Roadmaps</Typography>
			<Typography variant='caption'>and counting more</Typography>
		</Main>
	);
};

const Main = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
});

export default Counter;
