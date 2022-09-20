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
- `roadmap.ids`: List of IDs the resource belongs to.
- `roadmap.subTopics`: List of IDs the resources is a sub-topic to.

```json
[
 {
  "name": "",
  "description": "",
  "url": "",
  "icon": "",
  "tags": [""],
  "roadmap": {
   "ids": [""],
   "subTopics": [""],
  }
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

### Roadmaps

- `id`: Unique ID used to identify the roadmap. eg: 001
- `name`: Name of the Roadmap.
- `description`: Description of the Roadmap.
- `icon`: Icon for the Roadmap.
- `cover`: Cover image for the Roadmap.
- `topics[n].id`: Id of the topic of a roadmap. eg: 001-1
- `topics[n].name`: Name of the topic.

```json
[
 {
  "id": "",
  "name": "",
  "description": "",
  "icon": "",
  "cover": "",
  "topics": [
   {
    "id": "",
    "name": ""
   }
  ]
 }
]
```
