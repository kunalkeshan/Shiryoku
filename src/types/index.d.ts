/**
 * Resource Interface
 */
interface Resource {
	name: string;
	description: string;
	url: string;
	github?: string;
	icon?: string;
	tags: string[];
}

/**
 * Tag Type
 */
type Tags = string[];

/**
 * Notifications Interface
 */
interface Notification {
	id: string;
	title: string;
	message: string;
	dateAdded: string;
	link?: string;
	linkText?: string;
	read?: boolean;
}

interface ContributorProfile {
	username: string;
	avatar: string;
	profile: string;
	contributions: number;
}

interface GitHubIssue {
	url: string,
	state: string,
	title: string,
	body: string,
	labels: object[],
	createdAt: string,
	updatedAt: string,
}
