/**
 * All Resources Container
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Data from '../../../utils/data';

import {
	Box,
	styled,
	Stack,
	Pagination,
	Grid,
	Typography,
} from '@mui/material';
import ResourceCard from './ResourceCard';

import { updateCurrentResources } from '../../../store/features/app';
import { useAppDispatch } from '../../../store';
import { RootState } from '../../../store';

const AllResources = () => {
	const dispatch = useAppDispatch();
	const { currentResources } = useSelector((state: RootState) => state.app);
	const [page, setPage] = useState({ page: 1, limit: 20, total: 0 });

	useEffect(() => {
		const handleGetTotalPages = async () => {
			const data = await Data.Resources.getTotalPages();
			setPage((prev) => {
				return { ...prev, total: data };
			});
		};
		if (page.total === 0) handleGetTotalPages();
	}, [page.total]);

	useEffect(() => {
		const handleResourcesUpdate = async () => {
			const data = await Data.Resources.getResources(
				page.page,
				undefined
			);
			dispatch(updateCurrentResources(data));
		};
		if (currentResources.length === 0) handleResourcesUpdate();
		else if (page.page >= 1) handleResourcesUpdate();
	}, [page.page, dispatch, currentResources.length]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage((prev) => {
			return { ...prev, page: value };
		});
	};
	return (
		<Main>
			<ResourceContainer
				container
				spacing={1}
				gridTemplateColumns={{ xs: 2 }}
			>
				{currentResources?.length > 0 ? (
					currentResources.map((resource, index) => (
						<ResourceCard key={index} {...resource} />
					))
				) : (
					<Box>
						<Typography variant='h5' textAlign={'center'}>
							😢 No Resources Found for Selected Tags or Search.
							Know some Resources?{' '}
							<Link to='/contribute'>Contribute now!</Link>
						</Typography>
					</Box>
				)}
			</ResourceContainer>
			<Stack spacing={2} mt={2}>
				<Pagination
					count={page.total}
					page={page.page}
					onChange={handlePageChange}
				/>
			</Stack>
		</Main>
	);
};

const Main = styled(Box)({
	width: '65%',
	padding: '0.5em',
	'@media(max-width: 800px)': {
		width: '100%',
	},
});

const ResourceContainer = styled(Grid)({
	gap: 4,
});

export default AllResources;
