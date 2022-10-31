/**
 * Search Field
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Data from '../../../utils/data';

import { Box, TextField, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { updateCurrentResources } from '../../../store/features/app';
import { useAppDispatch } from '../../../store';
import { RootState } from '../../../store';

const Search = () => {
	const dispatch = useAppDispatch();
	const { selectedTags } = useSelector((state: RootState) => state.app);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const handleResourcesUpdate = async (value?: string) => {
			const data = await Data.Resources.getResources(
				undefined,
				undefined,
				selectedTags,
				value
			);
			dispatch(updateCurrentResources(data));
		};
		if (search) handleResourcesUpdate(search);
		if (!search) handleResourcesUpdate();
	}, [search, dispatch, selectedTags]);

	return (
		<Box mb={2}>
			<TextField
				type="text"
				variant="outlined"
				fullWidth
				label="Search"
				placeholder="Search for awesome resources..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				autoComplete="off"
				InputProps={{
					endAdornment: <SearchIcon />,
				}}
			/>
			{search && (
				<Link
					mt={0}
					fontSize={8}
					sx={{ cursor: 'pointer' }}
					onClick={() => setSearch('')}
				>
					Clear search
				</Link>
			)}
		</Box>
	);
};

export default Search;
