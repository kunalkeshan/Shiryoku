/**
 * Contact Page
 */

// Dependencies
import React, { useMemo } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useForm, ValidationError } from '@formspree/react';
import config from '../../config';

import {
	Typography,
	styled,
	Box,
	Divider,
	Container,
	Tooltip,
	Button,
	TextField,
	Link,
	Paper,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import ContactMailAnimationData from '../../assets/lottie/contact-mail.json';

const Contact = () => {
	const [submit, handleSubmit] = useForm(config.FORMSPREEE_CONTACT_FORM_ID);
	const socialLinks: NavLinks[] = useMemo(
		() => [
			{
				name: `Email: ${config.CONTACT.email}`,
				url: `mailto:${config.CONTACT.email}`,
				icon: <EmailIcon sx={{ '&:hover': { color: '#ff0f00 !important' } }} />,
			},
			{
				name: 'Instagram',
				url: config.CONTACT.instagram,
				icon: (
					<InstagramIcon sx={{ '&:hover': { color: '#C13584 !important' } }} />
				),
			},
			{
				name: 'LinkedIn',
				url: config.CONTACT.linkedIn,
				icon: (
					<LinkedInIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />
				),
			},
			{
				name: 'Twitter',
				url: config.CONTACT.twitter,
				icon: (
					<TwitterIcon sx={{ '&:hover': { color: '#1DA1F2 !important' } }} />
				),
			},
			{
				name: 'GitHub',
				url: config.CONTACT.github,
				icon: <GitHubIcon />,
			},
			{
				name: 'YouTube',
				url: config.CONTACT.youtube,
				icon: (
					<YouTubeIcon sx={{ '&:hover': { color: '#ff0000 !important' } }} />
				),
			},
		],
		[]
	);

	const LinkItem = ({ name, icon, url }: NavLinks) => {
		return (
			<Tooltip title={name}>
				<LinkPaper>
					<Link href={url} target="_blank">
						{icon}
					</Link>
				</LinkPaper>
			</Tooltip>
		);
	};

	return (
		<Main>
			<Typography variant="h6" noWrap>
				Contact{' '}
				<Typography variant="caption" component="span">
					for any queries.
				</Typography>
			</Typography>
			<Divider />
			<Content>
				<Animation display={{ xs: 'none', md: 'block' }}>
					<Player
						src={ContactMailAnimationData}
						autoplay
						loop
						style={{ width: '100%', height: 'auto' }}
					/>
				</Animation>
				<ContactForm width={{ xs: '100%', md: '35%' }}>
					<Typography variant="body1">
						If you have some changes that will improve the quality of this
						project, or this website. Feel free to contact me by filling the
						form below. I'll reach out to you ASAP!
					</Typography>
					{submit.succeeded ? (
						<Box>
							<Divider sx={{ my: 2 }} />
							<Typography variant="body1" fontSize="1.5rem">
								Thanks for sending me a message! I'll get back to you ASAP!
							</Typography>
							<Divider sx={{ my: 2 }} />
						</Box>
					) : (
						<Form component="form" onSubmit={handleSubmit}>
							<TextField
								type="text"
								variant="outlined"
								placeholder="eg: John Doe"
								name="name"
								id="name"
								label="Name"
								fullWidth
								required
							/>
							<TextField
								type="email"
								variant="outlined"
								placeholder="eg: john.doe@gmail.com"
								name="email"
								id="email"
								label="Email"
								fullWidth
								required
							/>
							<TextField
								type="text"
								variant="outlined"
								placeholder="eg: Improve site navbar!"
								name="message"
								id="message"
								label="Your Message"
								multiline
								fullWidth
								required
							/>
							<ValidationError
								prefix="Message"
								field="message"
								errors={submit.errors}
							/>
							<SubmitButton type="submit" variant="outlined">
								Send Message
							</SubmitButton>
						</Form>
					)}
					<Typography variant="body1">
						Alternatively, contact me through any of the links below.
					</Typography>
					<LinksContainer>
						{socialLinks.map((link, index) => (
							<LinkItem key={index} {...link} />
						))}
					</LinksContainer>
				</ContactForm>
			</Content>
		</Main>
	);
};

const Main = styled(Box)({});

const Content = styled(Container)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
});

const Animation = styled(Box)({
	width: 'max(50%, 200px)',
	display: 'flex',
});

const ContactForm = styled(Box)({
	padding: '1em',
	width: '35%',
	background: 'rgba( 255, 255, 255, 0.4 )',
	backdropFilter: 'blur(4px)',
	webkitBackdropFilter: 'blur(4px)',
	borderRadius: '8px',
	marginTop: '1em',
});

const Form = styled(Box)({
	width: '100%',
	padding: '0.5em 1.5em 0.5em 0',
	display: 'flex',
	flexDirection: 'column',
	gap: '1em',
});

const SubmitButton = styled(Button)({});

const LinksContainer = styled(Box)({
	marginTop: '1em',
	display: 'flex',
	alignItems: 'center',
	gap: '1.5em',
});

const LinkPaper = styled(Paper)({
	padding: '0.5em',
	cursor: 'pointer',
	transition: 'all 200ms',
	a: {
		all: 'unset',
	},
});

export default Contact;
