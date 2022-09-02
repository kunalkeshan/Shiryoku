/**
 * Tags Component
 */

// Dependencies
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Data from '../../../utils/data';

import { Box, Typography, Chip, styled, Stack } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

import {
	updateSelectedTags,
	clearAllSelectedTags,
	updateCurrentResources,
} from '../../../store/features/app';
import { useAppDispatch } from '../../../store';
import { RootState } from '../../../store';

const Tags = () => {
	const dispatch = useAppDispatch();
	const { selectedTags } = useSelector((state: RootState) => state.app);
	const [tags, setTags] = useState<Tags>([]);

	const handleSelectTag = (tag: string) => {
		dispatch(updateSelectedTags(tag));
	};

	const handleDeleteTag = (tag: string) => () => {
		dispatch(updateSelectedTags(tag));
	};

	const handleClearAllSelectedTags = () => {
		dispatch(clearAllSelectedTags());
	};

	useEffect(() => {
		const handleFetchTags = async () => {
			const data = await Data.Tags.getTags();
			setTags(data);
		};
		if (tags.length === 0) handleFetchTags();
	}, [tags]);

	useEffect(() => {
		const handleResourcesUpdate = async () => {
			const data = await Data.Resources.getResources(
				undefined,
				undefined,
				selectedTags
			);
			dispatch(updateCurrentResources(data));
		};
		if (selectedTags.length >= 0) handleResourcesUpdate();
	}, [selectedTags, dispatch]);

	const chitActiveStyle = {
		backgroundColor: '#0288d180',
		'&:hover': {
			backgroundColor: '#0288d1 !important',
		},
	};

	return (
		<Box>
			<Typography mt={2} fontWeight={600} variant='body2'>
				<CategoryIcon sx={{ fontSize: 'inherit' }} /> Tags{' '}
				<Typography component='span' variant='subtitle2'>
					| Click to filter resources{' '}
				</Typography>
				{selectedTags.length > 0 && (
					<Chip
						label='Clear All Tags'
						size='small'
						color='error'
						variant='outlined'
						sx={{ transform: 'scale(0.8)' }}
						onClick={handleClearAllSelectedTags}
					/>
				)}
			</Typography>
			<ChipContainer>
				{tags.length > 0 &&
					tags.map((tag) => (
						<Chip
							label={tag}
							key={tag}
							sx={{
								cursor: 'pointer',
								transition: 'all 200ms',
								'&:hover': {},
								'@media(min-width: 800px)': {
									margin: '0.1em',
								},
								...(selectedTags.includes(tag)
									? chitActiveStyle
									: {}),
							}}
							size='small'
							variant='outlined'
							onClick={() => handleSelectTag(tag)}
							onDelete={
								!selectedTags.includes(tag)
									? undefined
									: handleDeleteTag(tag)
							}
						/>
					))}
			</ChipContainer>
		</Box>
	);
};

const ChipContainer = styled(Stack)({
	flexWrap: 'wrap',
	flexDirection: 'row',
	gap: 2,
	marginTop: 4,
	maxHeight: '280px',
	overflow: 'auto',
	padding: 1,
	'&::-webkit-scrollbar': {
		width: '0.2em',
	},
	'&::-webkit-scrollbar-track': {
		boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
		webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: '4px',
	},
});

export default Tags;
