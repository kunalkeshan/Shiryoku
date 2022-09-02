// Dependencies
import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import { Box, styled } from '@mui/material';

function App() {
	return (
		<Main>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
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
