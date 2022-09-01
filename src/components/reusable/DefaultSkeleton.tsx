/**
 * Default Skeleton Fallback
 */

import React from 'react';

import { Skeleton, Box, styled, Container } from '@mui/material';

const DefaultSkeleton = () => {
	return (
		<Container>
			<Skeleton
				variant='rounded'
				width='clamp(200px, 100%, 600px)'
				height={60}
			/>
			<Main>
				{[1, 2].map((num) => (
					<SkeletonContainer key={num}>
						<Skeleton
							variant='rectangular'
							width='clamp(200px, 100%, 600px)'
							height={120}
						/>
						<Skeleton
							variant='rounded'
							width='clamp(200px, 100%, 600px)'
							height={20}
						/>
						<Skeleton
							variant='rounded'
							width='clamp(100px, 100%, 300px)'
							height={20}
						/>
					</SkeletonContainer>
				))}
			</Main>
		</Container>
	);
};

const Main = styled(Box)({
	width: '100%',
	height: '100%',
	padding: '40px',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '1em',
	justifyContent: 'center',
	alignItems: 'center',
});

const SkeletonContainer = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	gap: '0.2em',
	width: '100%',
	margin: '0 auto',
});

export default DefaultSkeleton;
