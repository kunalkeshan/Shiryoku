/**
 * Axios setup
 */

import axios from 'axios';
import config from '../config';

type IFetchProjectContributors = () => Promise<ContributorProfile[]>;

type IFetchProjectIssuesList = () => Promise<GitHubIssue[]>;

export const fetchProjectContributorsList: IFetchProjectContributors =
	async () => {
		try {
			let contributors: ContributorProfile[] = sessionStorage.getItem(
				'contributors'
			)
				? JSON.parse(sessionStorage.getItem('contributors') || '{}')
				: null;
			if (!contributors) {
				const response = await axios.get(config.GITHUB_CONTRIBUTIONS_URL);
				contributors = response.data.map((account: any) => {
					return {
						username: account.login,
						avatar: account.avatar_url,
						profile: account.html_url,
						contributions: account.contributions,
					};
				});
				sessionStorage.setItem('contributors', JSON.stringify(contributors));
			}
			return contributors;
		} catch (error) {
			sessionStorage.removeItem('contributors');
			return [];
		}
	};

export const fetchProjectIssuesList: IFetchProjectIssuesList = async () => {
	try {
		let issues: GitHubIssue[] = sessionStorage.getItem('issues')
			? JSON.parse(sessionStorage.getItem('issues') || '{}')
			: null;
		if (!issues) {
			const response = await axios.get(config.GITHUB_ISSUES_URL);
			issues = response.data.map((issue: any) => {
				return {
					url: issue.html_url,
					state: issue.state,
					title: issue.title,
					body: issue.body,
					labels: issue.labels,
					createdAt: issue.created_at,
					updatedAt: issue.updated_at,
				};
			});
			sessionStorage.setItem('issues', JSON.stringify(issues));
		}
		return issues;
	} catch (error) {
		sessionStorage.removeItem('issues');
		return [];
	}
};
