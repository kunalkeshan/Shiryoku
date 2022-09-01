// Dependencies
import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<AppRoutes />
			</HashRouter>
		</div>
	);
}

export default App;
