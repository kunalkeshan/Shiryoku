/**
 * Fetch in-app Data Util
 */

// Dependencies
import allTags from '../data/tags.json';
import allResources from '../data/resources.json';
import allNotifications from '../data/notifications.json';

// Get Read Notifications from Local Storage, parse it if it's there
// If not there, then return an empty array.
const readNotifications: string[] = localStorage.getItem('readNotifications')
	? JSON.parse(localStorage.getItem('readNotifications') || '')
	: [];

interface ResourcesUtility {
	getResources: (page: number, limit: number) => Promise<Resource[]>;
	getSingleResource: (name: string) => Promise<Resource> | any;
}

interface TagUtility {
	getTags: () => Promise<Tags>;
}

interface NotificationUtility {
	getAllNotification: () => Promise<Notification[]>;
	updateReadNotifications: (
		notificationId: string
	) => Promise<string | Error | undefined>;
}

/**
 * Data Utility Class
 */
class Data {
	static get Resources() {
		const resourceUtility = {} as ResourcesUtility;

		/**
		 * @description Get all resources in paginated manner
		 * @param {number} page The current page
		 * @param {number} limit The amount of items to display per page
		 * @returns {Resource[]} Array of resources
		 */
		resourceUtility.getResources = async (
			page: number = 1,
			limit: number = 20
		) => {
			return allResources.slice((page - 1) * limit, page * limit);
		};

		/**
		 * @description Get's a single resources by it's name
		 * @param {string} name name of the page looking for
		 * @returns {Resource} Matching Resource
		 */
		resourceUtility.getSingleResource = async (name: string) => {
			return allResources.find((resource) => {
				const url = new URL(resource.url).hostname.split('.').shift();
				return url === name;
			});
		};

		return resourceUtility;
	}

	static get Tags() {
		const tagUtility = {} as TagUtility;

		tagUtility.getTags = async () => {
			return allTags;
		};

		return tagUtility;
	}

	static get Notifications() {
		const notificationUtility = {} as NotificationUtility;

		/**
		 * @description Compares read notifications and new notifications,
		 * returns true if already read and false if not for *read* property.
		 * @returns {array} Array of All notifications
		 */
		notificationUtility.getAllNotification = async () => {
			try {
				allNotifications.forEach((notification: Notification | any) => {
					notification.read = false;
					if (
						readNotifications.find(
							(readNotification) =>
								readNotification === notification.id
						)
					) {
						notification.read = true;
					}
				});
				return allNotifications as Notification[];
			} catch (error) {
				return Promise.reject(error);
			}
		};

		/**
		 * @description Update notification as read using notification Id
		 * @param {string} notificationId notification Id to be added to read notifications
		 * @returns {string} 'Notification marked as read!'
		 */
		notificationUtility.updateReadNotifications = async (
			notificationId: string
		) => {
			try {
				const readNotification = allNotifications.find(
					(notification) => notification.id === notificationId
				);
				if (!readNotification)
					throw new Error(
						'Notification with give Id does not exist!'
					);
				if (readNotifications.find((noti) => noti === notificationId))
					return;
				readNotifications.push(readNotification.id);
				localStorage.setItem(
					'readNotifications',
					JSON.stringify(readNotifications)
				);
				return 'Notification marked as read!';
			} catch (error) {
				return Promise.reject(error);
			}
		};

		return notificationUtility;
	}
}
