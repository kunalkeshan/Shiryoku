/**
 * Application Configuration
 */

// Dependencies
import CodelanceDevsLogo from '../assets/codelance-devs-logo.png';

const APP_PARTNERS: NavLinks[] = [
	{
		name: 'Codelance Devs',
		url: 'https://www.linkedin.com/company/codelance-devs/',
		logo: CodelanceDevsLogo,
	},
];

const config = {
	WEBSITE_URL: `${window.location.protocol}//${window.location.host}`,
	GITHUB_URL: 'https://github.com/kunalkeshan/Shiryoku',
	GITHUB_CONTRIBUTIONS_URL:
		'https://api.github.com/repos/kunalkeshan/Shiryoku/contributors',
	GITHUB_ISSUES_URL:
		'https://api.github.com/repos/kunalkeshan/Shiryoku/issues?state=open',
	APP_PARTNERS,
	CONTACT: {
		email: 'kunalkeshan12@gmail.com',
		instagram: 'https://www.instagram.com/kunalkeshan/',
		linkedIn: 'https://www.linkedin.com/in/kunalkeshan/',
		twitter: 'https://twitter.com/_kunalkeshan_',
		github: 'https://github.com/kunalkeshan',
		youtube: 'https://www.youtube.com/channel/UCwVRztzBdqgB_Y9hkMX3lZA',
	},
	FORMSPREEE_CONTACT_FORM_ID: 'xbjbdlvj',
	GOOGLE_FORM_FEEDBACK_URL:
		'https://docs.google.com/forms/d/e/1FAIpQLSfNQDOQkEKPubOBRIhselYTjCv82qv7qTyPh6exFvkT3sumhw/viewform?usp=pp_url&entry.34189569=Shiryoku+(Resources)',
};

export default config;
