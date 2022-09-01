/**
 * Home Page
 */

// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			Home
			<Outlet />
		</div>
	);
};

export default Home;
