/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense, PropsWithChildren, FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultSkeleton from '../components/reusable/DefaultSkeleton';

const Home = lazy(() => import('../pages/Home/Home'));
const Resources = lazy(() => import('../pages/Home/Resources'));
const ResourcePage = lazy(() => import('../pages/Home/ResourcePage'));
const Contact = lazy(() => import('../pages/Home/Contact'));
const Contribute = lazy(() => import('../pages/Home/Contribute'));
const Issues = lazy(() => import('../pages/Home/Issues'));
const Support = lazy(() => import('../pages/Home/Support'));
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
					path='resource/:resourceName'
					element={<LazyComponent Component={ResourcePage} />}
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
