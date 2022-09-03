// Dependencies
import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import { Box, styled } from '@mui/material';
import SnackbarComponent from './components/reusable/Snackbar';

function App() {
	return (
		<Main>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
			<SnackbarComponent />
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
