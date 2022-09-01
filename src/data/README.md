# App Data

A mini guide to how the app data is stored in the resources application.

**Table of Contents**:

- [Templates](#templates)
  - [Resources](#resources)
  - [Notifications](#notifications)
  - [Tags](#tags)

## Templates

### Resources

- `name`: Name of the Resource.
- `description`: Short information of what the resource is for.
- `url`: Destination link to the resource.
- `icon`: Resource logo image link.
- `tags`: List of unique and relevant tags for the resource concerned.

```json
[
	{
		"name": "",
		"description": "",
		"url": "",
		"icon": "",
		"tags": []
	}
]
```

> File: [resources.json](./resources.json)

### Notifications

- `id`: Unique Id for the notification.
- `title`: Title of the notification.
- `message`: Message of the notification.
- `dateAdded`: When the notification was published.
- `link`: Link that can be added to the notification message. Use `{link}` in the message to add link.
- `linkText`: Link text, will fill `{link}` in the message body, and redirect to the link above on click.

```json
[
	{
		"id": "",
		"title": "",
		"message": "",
		"dateAdded": "",
		"link": "",
		"linkText": ""
	}
]
```

> File: [notifications.json](./notifications.json)

### Tags

- `tags`: Collection of Uniqe tags. 

```json
[
    "...others",
    "unique tag"
]
```

> File: [tags.json](./tags.json)
