/**
 * Resources Page
 */

// Dependencies
import React, { useEffect, useState, useMemo } from 'react';

import {
	Typography,
	styled,
	Box,
	Divider,
	TextField,
	List,
	Chip,
	Stack,
	Pagination,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';

import Data from '../../utils/data';

const Resources = () => {
	const [tags, setTags] = useState<Tags>([]);
	const [resources, setResources] = useState<Resource[]>([]);
	const [page, setPage] = useState({ page: 1, limit: 20, total: 0 });
	const [selectedTags, setSelectedTags] = useState<Tags>([]);
	const [search, setSearch] = useState('');

	useMemo(() => {
		const handleFetchResources = async () => {
			const data = await Data.Resources.getResources(
				page.page,
				page.limit,
				selectedTags,
				search
			);
			setResources(data);
		};
		handleFetchResources();
	}, [selectedTags, search, page]);

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
		const handleFetchTags = async () => {
			const data = await Data.Tags.getTags();
			setTags(data);
		};
		if (tags.length === 0) handleFetchTags();
	}, [tags]);

	useEffect(() => {
		const handleFetchResources = async () => {
			const data = await Data.Resources.getResources();
			setResources(data);
		};
		if (resources.length === 0) handleFetchResources();
	}, [resources]);

	const handleSelectTag = (tag: string) => {
		setSelectedTags((prev) => {
			if (prev.includes(tag)) {
				return prev.filter((item) => item !== tag);
			}
			return [...prev, tag];
		});
	};

	const handleDeleteTag = (tag: string) => () => {
		setSelectedTags((prev) => {
			if (!prev.includes(tag)) {
				return [...prev, tag];
			}
			return prev.filter((item) => item !== tag);
		});
	};

	const clearAllSelectedTags = () => {
		setSelectedTags([]);
	};

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage((prev) => {
			return { ...prev, page: value };
		});
	};

	const chitActiveStyle = {
		backgroundColor: '#0288d1',
		':hover': {
			backgroundColor: '#0288d1',
		},
	};

	const CallToActions = () => {
		return (
			<CtaBox id='cta'>
				<TextField
					type='text'
					variant='outlined'
					fullWidth
					label='Search'
					placeholder='Search for awesome resources...'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					InputProps={{
						endAdornment: <SearchIcon />,
					}}
					sx={{ mb: 2 }}
				/>
				<Divider variant='fullWidth' />
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
							onClick={clearAllSelectedTags}
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
			</CtaBox>
		);
	};
	console.log(resources);
	return (
		<Main>
			<Typography variant='h6' noWrap>
				Resources{' '}
				<Typography variant='caption' component='span'>
					that will blow your mind!
				</Typography>
			</Typography>
			<Divider variant='fullWidth' />
			<Container>
				<ResourceContainer id='resources'>
					<>
						{resources?.length > 0 &&
							resources.map((resource) => (
								<div>{resource.name}</div>
							))}
					</>
					<Stack spacing={2}>
						<Pagination
							count={page.total}
							page={page.page}
							onChange={handlePageChange}
						/>
					</Stack>
				</ResourceContainer>
				<CallToActions />
			</Container>
		</Main>
	);
};

const Main = styled(Box)({
	width: '100%',
});

const Container = styled(Box)({
	width: '100%',
	height: '100%',
	display: 'flex',
	marginTop: '1em',
	gap: '1em',
	'@media(max-width: 800px)': {
		flexDirection: 'column-reverse',
	},
});

const ResourceContainer = styled(List)({
	width: '65%',
	padding: '0.5em',
	'@media(max-width: 800px)': {
		width: '100%',
	},
});

const CtaBox = styled(Box)({
	width: '35%',
	borderRadius: '8px',
	background: '#e3f2fd',
	padding: '0.5em',
	height: 'fit-content',
	'@media(max-width: 800px)': {
		width: '100%',
	},
});

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

export default Resources;
