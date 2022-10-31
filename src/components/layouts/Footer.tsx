/**
 * Footer Component
 */

// Dependencies
import React from 'react';
import { useNavigate } from 'react-router';
import config from '../../config';

// MUI
import { Box, styled, Typography, Link } from '@mui/material';

// Components
// import ProjectPartner from '../reusable/ProjectPartner';

const Footer = () => {
	const navigate = useNavigate();

	const links: NavLinks[] = [
		{
			name: 'Home',
			nav: '/',
		},
		{
			name: 'About',
			nav: '/about',
		},
		{
			name: 'Contribute',
			nav: '/contribute',
		},
		{
			name: 'Issues',
			nav: '/issues',
		},
		{
			name: 'Contact',
			nav: '/contact',
		},
		{
			name: 'Support',
			nav: '/support',
		},
		{
			name: 'Repo',
			link: 'https://github.com/kunalkeshan/Shiryoku',
		},
		{
			name: 'Give Feedback',
			link: config.GOOGLE_FORM_FEEDBACK_URL,
		},
	];

	const handleNavigate = (link: NavLinks) => {
		if (link.link) {
			window.open(link.link, '_blank');
		} else {
			navigate(link.nav || '');
		}
	};

	return (
		<Main component="footer">
			<Typography variant="body2">
				All Rights Reserved.{' '}
				<Link
					component="a"
					href="https://github.com/kunalkeshan/Shiryoku/blob/main/LICENSE"
					target="_blank"
					sx={{
						cursor: 'pointer',
					}}
				>
					Shiryoku (Resources)
				</Link>{' '}
				&copy; {new Date().getFullYear()} . Made with &#129505; by{' '}
				{
					<Link
						component="a"
						href="https://twitter.com/_kunalkeshan_"
						target="_blank"
						sx={{
							cursor: 'pointer',
						}}
					>
						Kunal Keshan
					</Link>
				}
				.
			</Typography>
			<NavLinks>
				{links.map((link, index) => (
					<Link
						key={index}
						component="a"
						onClick={() => handleNavigate(link)}
						sx={{
							cursor: 'pointer',
							fontSize: '0.8rem',
						}}
					>
						{link.name}
					</Link>
				))}
			</NavLinks>
			<Box m={2}>
				<Typography variant="caption" lineHeight={0}>
					{/* Project Partners: */}
				</Typography>
				<ProjectPartnersContainer>
					{/* {config.APP_PARTNERS.length > 0 && config.APP_PARTNERS.map((partner, index) => (
						<ProjectPartner {...partner} key={index} scale={0.4} />
					))} */}
				</ProjectPartnersContainer>
			</Box>
		</Main>
	);
};

const Main = styled(Box)({
	marginTop: 'auto',
	padding: '.5em',
	textAlign: 'center',
});

const NavLinks = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1em',
	flexWrap: 'wrap',
	margin: '0.5em',
});

const ProjectPartnersContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export default Footer;
