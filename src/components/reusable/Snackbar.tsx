/**
 * Snackbar Component
 */

// Dependencies
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';

// Actions
import { hideSnackbar } from '../../store/features/app';
import { RootState, useAppDispatch } from '../../store';

function SnackbarComponent() {
	const dispatch = useAppDispatch();
	const { snackbar } = useSelector((state: RootState) => state.app);

	// Close Snackbar Function
	const handleSnackbarClose = () => {
		dispatch(hideSnackbar());
	};
	return (
		<Snackbar
			open={snackbar.display}
			autoHideDuration={6000} // 6 Seconds before Hiding the Snackbar
			onClose={handleSnackbarClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			TransitionComponent={Slide}
		>
			<Alert
				onClose={handleSnackbarClose}
				severity={snackbar.type}
				variant='standard'
				className='z-50 w-full'
			>
				{snackbar.message}
			</Alert>
		</Snackbar>
	);
}

export default SnackbarComponent;
