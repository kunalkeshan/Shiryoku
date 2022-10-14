/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultSkeleton from '../components/reusable/DefaultSkeleton';
import About from '../pages/Home/About';

const Home = lazy(() => import('../pages/Home/Home'));
const Resources = lazy(() => import('../pages/Home/Resources'));
const Contact = lazy(() => import('../pages/Home/Contact'));
const Contribute = lazy(() => import('../pages/Home/Contribute'));
const Issues = lazy(() => import('../pages/Home/Issues'));
const Support = lazy(() => import('../pages/Home/Support'));
const Roadmaps = lazy(() => import('../pages/Home/Roadmaps/Roadmaps'));
const Roadmap = lazy(() => import('../pages/Home/Roadmaps/Roadmap'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
	return (
		<Suspense fallback={<Home><DefaultSkeleton /></Home>}>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route
						index
						element={<Resources />}
					/>
					<Route
						path='contribute'
						element={<Contribute />}
					/>
					<Route
						path='issues'
						element={<Issues />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='support'
						element={<Support />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='roadmaps'
						element={<Roadmaps />}
					/>
					<Route
						path='roadmaps/:currentRoadmap'
						element={<Roadmap />}
					/>
					<Route path='*' element={<Navigate to={'/not-found'} />} />
				</Route>
				<Route
					path='/not-found'
					element={<NotFound />}
				/>
				<Route path='*' element={<Navigate to={'/not-found'} />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
