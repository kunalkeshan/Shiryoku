/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense, PropsWithChildren, FC } from 'react';
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

interface LazyCompProps extends PropsWithChildren {
	Component: FC;
}

const AppRoutes = () => {
	const LazyComponent: FC<LazyCompProps> = (props) => {
		return (
			<Suspense fallback={<DefaultSkeleton />}>
				<props.Component />
			</Suspense>
		);
	};

	return (
		<Routes>
			<Route path='/' element={<Home />}>
				<Route
					index
					element={<LazyComponent Component={Resources} />}
				/>
				<Route
					path='contribute'
					element={<LazyComponent Component={Contribute} />}
				/>
				<Route
					path='issues'
					element={<LazyComponent Component={Issues} />}
				/>
				<Route
					path='contact'
					element={<LazyComponent Component={Contact} />}
				/>
				<Route
					path='support'
					element={<LazyComponent Component={Support} />}
				/>
				<Route
					path='about'
					element={<LazyComponent Component={About} />}
				/>
				<Route
					path='roadmaps'
					element={<LazyComponent Component={Roadmaps} />}
				/>
				<Route
					path='roadmaps/:currentRoadmap'
					element={<LazyComponent Component={Roadmap} />}
				/>
				<Route path='*' element={<Navigate to={'/not-found'} />} />
			</Route>
			<Route
				path='/not-found'
				element={<LazyComponent Component={NotFound} />}
			/>
			<Route path='*' element={<Navigate to={'/not-found'} />} />
		</Routes>
	);
};

export default AppRoutes;
