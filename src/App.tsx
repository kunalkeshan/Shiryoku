// Dependencies
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import { Box, styled } from '@mui/material';
import SnackbarComponent from './components/reusable/Snackbar';
import FeedbackModal from './components/reusable/FeedbackModal';

function App() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Main>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
			<SnackbarComponent />
			<FeedbackModal open={open} setOpen={setOpen} />
		</Main>
	);
}

const Main = styled(Box)({
	fontFamily: "'Ubuntu Mono', monospace",
	'*': {
		fontFamily: 'inherit !important',
	},
});

export default App;
