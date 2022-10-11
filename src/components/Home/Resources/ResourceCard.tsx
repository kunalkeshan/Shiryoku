/**
 * Resource Card
 */

// Dependencies
import React, { FC, PropsWithChildren, useState } from 'react';

import {
	Tooltip,
	Paper,
	styled,
	Grid,
	Avatar,
	Box,
	IconButton,
	Typography,
	Stack,
	Chip,
	Menu,
	MenuItem
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useAppDispatch } from '../../../store';
import { showSnackbar } from '../../../store/features/app';

interface ResourceCardProps extends PropsWithChildren, Resource {}

const ResourceCard: FC<ResourceCardProps> = (props) => {
	const dispatch = useAppDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleCopyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(props.url);
			dispatch(
				showSnackbar({
					message: `${props.name} URL Copied to Clipboard!`,
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

	const handleShareResource = async () => {
		try {
			const shareData = {
				url: props.url,
				title: `${props.name} from Shiryoku by Kunal Keshan`,
				text: props.description,
			};

			await navigator.share(shareData);
		} catch (error) {}
	};

	const handleRedirectToIssues = () => {
		window.open('https://github.com/kunalkeshan/Shiryoku/issues')
		handleClose();
	}
	const handleRedirectToTags = () => {
		window.open('https://github.com/kunalkeshan/Shiryoku/blob/main/src/data/tags.json')
		handleClose();
	}

	return (
		<ResourceContainer item xs={12} lg={5}>
			<ResourceBox elevation={3}>
				<Box
					display='flex'
					alignItems='center'
					width='100%'
					flexWrap='wrap'
				>
					<Avatar
						src={props?.icon ?? props?.name}
						sx={{ mr: 2, cursor: 'pointer' }}
						imgProps={{ loading: 'lazy' }}
					/>
					<div>
						<Typography
							variant='body1'
							fontWeight={600}
							maxWidth='200px'
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.2em',
							}}
						>
							{props.name}
							<Tooltip title='Copy resource url to clipboard'>
								<ContentCopyIcon
									onClick={handleCopyToClipboard}
									sx={{
										fontSize: '1em',
										cursor: 'pointer',
										borderRadius: '50%',
									}}
								/>
							</Tooltip>
						</Typography>
						<div
							style={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								width: '20ch',
							}}
						>
							<Tooltip
								title={props.description}
								arrow
								followCursor={true}
								placement='bottom'
							>
								<Typography variant='caption' noWrap>
									{props.description}
								</Typography>
							</Tooltip>
						</div>
					</div>
					<LinksBox>
						<Tooltip
							title='Visit Website'
							arrow
							followCursor={true}
							placement='bottom'
						>
							<IconButton href={props.url} target='_blank'>
								<LanguageIcon />
							</IconButton>
						</Tooltip>
						{props.github && (
							<Tooltip
								title='View Open Source Code'
								arrow
								followCursor={true}
								placement='bottom'
							>
								<IconButton
									href={props?.github}
									target='_blank'
								>
									<GitHubIcon />
								</IconButton>
							</Tooltip>
						)}
						<Tooltip
							title={`Share ${props.name}`}
							arrow
							followCursor={true}
							placement='bottom'
						>
							<IconButton onClick={handleShareResource}>
								<ShareIcon />
							</IconButton>
						</Tooltip>
						<Tooltip
							title='More Options'
							arrow
							followCursor={true}
							placement='bottom'
						>
							<>
							<IconButton onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
								'aria-labelledby': 'basic-button',
								}}
							>
								<MenuItem onClick={handleRedirectToIssues}>Report Resource</MenuItem>
								<MenuItem onClick={handleRedirectToTags}>Edit Tags</MenuItem>
							</Menu>
							</>
						</Tooltip>
					</LinksBox>
				</Box>
				<Stack direction='row' flexWrap='wrap' mt={2}>
					{props.tags.map((tag) => (
						<Chip
							label={tag}
							key={tag}
							size='small'
							sx={{
								fontSize: '0.6rem',
								padding: '0.1em 0.2em',
								fontWeight: 'bold',
								margin: '0.2em',
							}}
						/>
					))}
				</Stack>
			</ResourceBox>
		</ResourceContainer>
	);
};

const ResourceContainer = styled(Grid)({});

const ResourceBox = styled(Paper)({
	padding: '1em',
	height: '100%',
});

const LinksBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	alignSelf: 'flex-end',
	marginLeft: 'auto',
});

export default ResourceCard;
