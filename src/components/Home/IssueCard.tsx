/**
 * Issue Card Component
 */

// Dependencies
import React, { FC, PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import * as DateFns from 'date-fns';

import {
	Grid,
	Paper,
	Typography,
	Chip,
	Divider,
	Stack,
	Tooltip,
	styled,
	Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface IssueCardProps extends PropsWithChildren, GitHubIssue {}

const IssueCard: FC<IssueCardProps> = ({
	title,
	body,
	state,
	updatedAt,
	createdAt,
	labels,
	url,
}) => {
	const handleNavigateToIssue = () => {
		window.open(url, '_blank');
	};

	return (
		<Grid item xs={12} md={4} m={2}>
			<Card>
				<Typography variant='h6'>
					<GitHubIcon /> {title} -{' '}
					<Chip
						label={state}
						variant='outlined'
						color='success'
						sx={{ transform: 'scale(0.8)' }}
					/>
				</Typography>
				<Divider />
				<Typography p={2}>
					<ReactMarkdown>{body}</ReactMarkdown>
				</Typography>
				<GitHubButton
					startIcon={<GitHubIcon />}
					onClick={handleNavigateToIssue}
					variant='outlined'
				>
					View Issue in GitHub
				</GitHubButton>
				<Divider />
				{labels.length > 0 &&
					labels.map((label) => (
						<Tooltip title={label.description}>
							<Chip
								label={label.name}
								sx={{
									cursor: 'pointer',
									backgroundColor: `#${label.color}`,
									margin: '0.5em 0.25em',
								}}
							/>
						</Tooltip>
					))}
				<Divider />
				<Stack direction='row' spacing={2} mt={1}>
					<p>
						<b>Created At</b>:{' '}
						{DateFns.format(new Date(createdAt), 'PPP')}
					</p>
					<p>
						<b>Updated At</b>:{' '}
						{DateFns.format(new Date(updatedAt), 'PPP')}
					</p>
				</Stack>
			</Card>
		</Grid>
	);
};

export default IssueCard;

const GitHubButton = styled(Button)({
	width: '100%',
	marginBottom: '1em',
	'&:hover': {},
});

const Card = styled(Paper)({
	padding: '1em 0.75em',
	height: '100%',
});
