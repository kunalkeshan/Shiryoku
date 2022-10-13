/**
 * Feedback Modal
 */

// Dependencies
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { format } from 'date-fns';

import { Dialog, DialogTitle, styled, Typography } from '@mui/material';

interface FeedbackModalProps extends PropsWithChildren {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FeedbackFormStatus {
	lastShown: number | null;
	firstTime: boolean;
}

const FeedbackModal: FC<FeedbackModalProps> = ({ open, setOpen }) => {
	const TWO_WEEKS_MS = 1.21e9;
	const THIRTY_MS = 1000 * 3;
	const [formStatus, setFormStatus] = useState<FeedbackFormStatus>({
		lastShown: null,
		firstTime: true,
	});

	const onClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleShowForm = () => {
			setTimeout(() => {
				setOpen(true);
				setFormStatus((prev) => {
					const newStatus = {
						...prev,
						lastShown: Date.now(),
						firstTime: false,
					};
					localStorage.setItem(
						'formStatus',
						JSON.stringify(newStatus)
					);
					return newStatus;
				});
			}, THIRTY_MS);
		};

		const handleFormStatus = () => {
			let localFormStatus: any = localStorage.getItem('formStatus');
			if (localFormStatus) {
				localFormStatus = JSON.parse(localFormStatus);
				setFormStatus(localFormStatus);
				if (localFormStatus.lastShown !== null) {
					const now = Date.now();
					if (now - localFormStatus.lastShown! > TWO_WEEKS_MS)
						handleShowForm();
				} else handleShowForm();
			} else handleShowForm();
		};
		handleFormStatus();
	}, []);

	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{
				overflowX: 'hidden',
			}}
		>
			<DialogTitle>Feedback Form</DialogTitle>
			{formStatus.lastShown && !formStatus.firstTime && (
				<Typography my='1em'>
					You previously viewed this form at{' '}
					{format(new Date(formStatus.lastShown!), 'PPP')}
				</Typography>
			)}
			<FormIframe
				src='https://docs.google.com/forms/d/e/1FAIpQLSfNQDOQkEKPubOBRIhselYTjCv82qv7qTyPh6exFvkT3sumhw/viewform?usp=pp_url&entry.34189569=Shiryoku+(Resources)&embedded=true'
				frameBorder='0'
				title='Shiryoku Feedback Form'
			>
				Loading…
			</FormIframe>
		</Dialog>
	);
};

const FormIframe = styled('iframe')({
	margin: '0 1em',
	width: '640px',
	height: '520px',
	overflowX: 'hidden',
	'@media(max-width: 700px)': {
		width: '520px',
	},
	'@media(max-width: 440px)': {
		width: '280px',
	},
});

export default FeedbackModal;
