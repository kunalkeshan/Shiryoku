/**
 * Home Page
 */

// Dependencies
import React, { useEffect, useState, FC, PropsWithChildren, ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
	Box,
	Toolbar,
	List,
	CssBaseline,
	Typography,
	Divider,
	Link,
	Tooltip,
	IconButton,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import AppsIcon from '@mui/icons-material/Apps';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BugReportIcon from '@mui/icons-material/BugReport';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import MapIcon from '@mui/icons-material/Map';

import NavigationItem from '../../components/Home/NavigationItem';
import Footer from '../../components/layouts/Footer';
import Notifications from '../../components/notifications/Notifications';

import config from '../../config';

const drawerWidth = 240;

interface HomeProps extends PropsWithChildren {
	children?: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
	const location = useLocation();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState('');

	const MAIN_NAV_ITEMS: NavLinks[] = [
		{
			name: 'Resources',
			nav: '/',
			icon: <AppsIcon />,
		},
		{
			name: 'Roadmaps',
			nav: '/roadmaps',
			icon: <MapIcon />,
		},
		{
			name: 'Contribute',
			nav: '/contribute',
			icon: <PersonAddAlt1Icon />,
		},
		{
			name: 'Issues',
			nav: '/issues',
			icon: <BugReportIcon />,
		},
		{
			name: 'Contact',
			nav: '/contact',
			icon: <AlternateEmailIcon />,
		},
		{
			name: 'Support',
			nav: '/support',
			icon: <VolunteerActivismIcon />,
		},
		{
			name: 'About',
			nav: '/about',
			icon: <InfoIcon />,
		},
	];

	const ADDITIONAL_NAV_ITEMS: NavLinks[] = [
		{
			name: 'Repo',
			link: config.GITHUB_URL,
			icon: <GitHubIcon />,
		},
	];

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const currentLocation = location.pathname;
		setCurrentPage(currentLocation);
	}, [location]);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 1,
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
							overflow: 'visible',
						}}
					>
						<Typography variant='h5' noWrap component='div' sx={{
							'@media (max-width: 500px)': {
								display: 'flex',
								flexDirection: 'column',
							}
						}}>
							Shiryoku (Resources){' '}
							<Typography variant='caption' component='span'>
								by{' '}
								<Link
									href={config.CONTACT.twitter}
									color='#fff'
								>
									Kunal Keshan
								</Link>
							</Typography>
						</Typography>
						<Notifications />
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Typography
						variant='h4'
						textAlign='center'
						width='100%'
						sx={{ userSelect: 'none' }}
					>
						<Tooltip
							title='Shiryoku (Japanese for Resources)'
							placement='bottom'
							followCursor
						>
							<div>資</div>
						</Tooltip>
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{MAIN_NAV_ITEMS.map((item, index) => (
						<NavigationItem
							{...item}
							key={index}
							open={open}
							currentPage={currentPage}
						/>
					))}
				</List>
				<Divider />
				<List>
					{ADDITIONAL_NAV_ITEMS.map((item, index) => (
						<NavigationItem
							{...item}
							key={index}
							open={open}
							currentPage={currentPage}
						/>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children ? children : <Outlet />}
				<Footer />
			</Box>
		</Box>
	);
};

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export default Home;
