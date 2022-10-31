# Contributing Guide

**Table of Contents**:

- [Contributing Guide](#contributing-guide)
  - [🚀 Getting Started](#-getting-started)
  - [❓ How to Contribute](#-how-to-contribute)
  - [📐 Standards and Guidelines](#-standards-and-guidelines)
    - [Updating Resources](#updating-resources)
    - [Updating Tags](#updating-tags)
    - [Updating Roadmaps](#updating-roadmaps)
    - [Common Guidelines](#common-guidelines)
  - [🗡️ Forking the Project](#️-forking-the-project)
  - [🐰 Basic Contributing Guidelines](#-basic-contributing-guidelines)
    - [Contributing -](#contributing--)
      - [Making Changes](#making-changes)
  - [🤖 Advanced Contributing Guidelines](#-advanced-contributing-guidelines)
    - [Cloning and Installing Dependencies](#cloning-and-installing-dependencies)
    - [Implementing a Feature](#implementing-a-feature)
    - [Testing](#testing)
  - [👾 Creating a Pull Request](#-creating-a-pull-request)
  - [🐙 Merging a Pull Request](#-merging-a-pull-request)
  - [❓ Questions](#-questions)

## 🚀 Getting Started

When contributing to Shiryoku, it's good to know our best practices, tips, and tricks. Shiryoku is built using **React-TypeScript**. Uses **Material UI** components and fetches the resources from the sources file located in the `/src/data/*.ts` files. You don't have to know how to work with React, or TypeScript to contribute, you can simply contribute to the project using GitHub.

If you're not sure how to contribute using GitHub, fill out this form with the resources you have and I'll help you out to add them to this project.

📃 Link to Form: [https://forms.gle/M1tUaoBtVFrG996r8](https://forms.gle/M1tUaoBtVFrG996r8)

## ❓ How to Contribute

There's two separate guidelines for how to contribute to the Shiryoku. If you're simply looking to make some files changes to any one of the following files...

- `README.MD`
- `src/data/README.md` or `src/data/*.ts`
- `CONTRIBUTING.MD`
- Or any documentation related file.

Refer to the [Basic Contributing Guidelines](#basic-contributing-guidelines). This will go over how to easily make changes without having to push any files locally.

If you're looking for making changes to the website and resources to this project, please refer to the [Advanced Contributing Guidelines](#advanced-contributing-guidelines).

## 📐 Standards and Guidelines

### Updating Resources

Adding new resources or updating the already existing ones involves making changes to the `/src/data/resources.ts` file. The template for the resources object is as present in the [README.md](/src/data/README.md) file inside the same data folder.

When adding a new resource make sure to follow the below template:

- `name`: Name of the Resource.
- `description`: Short information of what the resource is for.
- `url`: Destination link to the resource.
- `icon`: Resource logo image link.
- `tags`: List of unique and relevant tags for the resource concerned. (required syntax: lowercase, separted by white space, eg: `web development`)
- `roadmap.ids`: List of IDs the resource belongs to. (Optional)
- `roadmap.subTopics`: List of IDs the resources is a sub-topic to. (Optional)

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
			"subTopics": [""]
		}
	}
]
```

### Updating Tags

Adding new tags or updating the already existing ones involves making changes to the `/src/data/tags.ts` file. The template for the tags object is as present in the [README.md](/src/data/README.md) file inside the same data folder.

When adding new tags make sure to follow the below template:

- `tags`: Collection of Uniqe tags. (required syntax: lowercase, separted by white space, eg: `web development`)

```json
["...others", "unique tag"]
```

### Updating Roadmaps

Adding new roadmaps or updating the already existing ones involves making changes to the `/src/data/roadmaps.ts` file. The template for the roadmaps object is as present in the [README.md](/src/data/README.md) file inside the same data folder.

When adding a new roadmap make sure to follow the below template:

- `id`: Unique ID used to identify the roadmap. eg: 001
- `name`: Name of the Roadmap.
- `description`: Description of the Roadmap.
- `icon`: Icon for the Roadmap.
- `cover`: Cover image for the Roadmap.
- `topics[n].id`: Id of the topic of a roadmap. eg: 001-1 ((&lt;id&gt;-&lt;topic order&gt;)
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

### Common Guidelines

- When adding new resources/tags/roadmaps check if it already exists. Use the search command, `ctrl/cmd + F` to search for it if you're in GitHub, else search it directly in the website.
- If you've added something new, make sure that it follows the respective template.
- If there's some issue with the resources/tags/roadmaps, open up an issue about it with the proper title and relevant instructions in the body.

## 🗡️ Forking the Project

First you will have to obtain your own copy of the Shiryoku repository, also known as "forking". [Click here](https://github.com/kunalkeshan/Shiryoku/fork) to open the fork wizard or go to the top right of your screen and then click the fork button.

![Forking Shiryoku](/assets/contributing/forking.jpg)

This will create a clone of the repository under your own account. Navigate to your profile now and click on the new repository called `Shiryoku` under your profile.

## 🐰 Basic Contributing Guidelines

You must have a browser that can access GitHub, and possess a GitHub account. Once you have those two things, you're ready to move on to making your contribution(s)!

<!--
The steps for basic contributions are showcased splendidly in this [youtube video](), so it is recommended you watch it.
 -->

### Contributing -

#### Making Changes

There are two methods to making a change in the code.

**Option 1** - Visual Studio Code Web Editor (Recommended)

If you are not a developer and wish to contribute resources, notifications update, roadmaps or any documentation related contributions, having a text editor will make contributions much easier. To make complex edits without installing anything, we recommend using GitHub's VS Code web editor. In your fork of `Shiryoku` (fork it first), go to the Code tab of the repo and press `.` (the period/dot key). This will open up the repo in an online VS Code instance you can use to edit files in the browser.

Once you are done making your changes, go to the Source Control tab in the activity bar with `Ctrl/Cmd + Shift + G`, click the `+` next to the files you've changed to stage them, type a brief message summarizing the changes made in the commit, and press `Ctrl/Cmd + Enter` to commit your changes to your fork.

Once done, move on to the [next section to create a pull request](#creating-a-pull-request).

**Option 2** - GitHub Web UI

You're now ready to make a change. Navigate to the file that you're looking to contribute to in your forked repository. Once you navigate to the file, you should see an Edit icon (shaped as a pencil) on the right:

![Contributing using GitHub Web UI](/assets/contributing/edit-gh-gui.jpg)

_Note however that some files that are too large might not have this option. In these cases you will need to download the code and create edits outside of the GitHub web UI. Refer to [Advanced Contributing Guidelines](#advanced-contributing-guidelines)_

At this point, you should take a look at [Standards and Guidelines](#standards-and-guidelines) to view guidelines for theme, language, resources, and roadmaps data contributions.

Once you've completed your change, you're ready to commit them. At the bottom of the edit file screen, you will find the commit UI. In the first box, you want to put in a title that describes the change you made. Then in the description field, you can put in any additional detail to supplement your title further.

You will find two radio buttons, one prompts you to commit directly to your current branch, and the other prompts you to create a new branch for your commit and start a pull request. Select the first option to commit the change directly to your current branch.

Click `Commit changes` once you are ready to proceed.

![Committing Changes using GitHub Web UI](/assets/contributing/commiting.jpg)

## 🤖 Advanced Contributing Guidelines

**[Fork the Repository](#forking-the-project) if you've not done it already.**

If you're looking to contribute changes to the website, add new features or fix some issues, follow the advanced guidelines mentioned below.

**Some Prerequisites**:

- Have installed Node and NPM in your system. If not [use this](https://nodejs.org/en/download/)!
- You know how to work with [React](https://reactjs.org/).
- Practical Knowledge of [TypeScript](https://www.typescriptlang.org/docs/).
- Are familiar with [Material UI](https://mui.com/) styling library.

### Cloning and Installing Dependencies

After forking the repository, copy the Git Url to the forked repo in order to clone it to your system.

![Copying Git Url from Forked Repo](/assets/contributing/copy-git-url.jpg)

Use the following command in your `terminal/command prompt` to clone the repo.

```bash
git clone https://github.com/<your username here>/Shiryoku.git
```

After cloning the repository, open the folder and use the following command in the folder to install all the dependencies.

```bash
npm install
```

Once the dependencies have been installed, start the application.

```bash
npm start
```

Visit `http://localhost:3000` to view the application in your local development environment.

### Implementing a Feature

While Implementing a feature or fixing a bug, make sure to add proper documentation while doing so. It will help review it while opening a Pull request.

### Testing

Test out your changes in the browser, and test will all possible test cases.

- Responsive.
- Invalid User Input.
- Load Time.
- etc...

While opening a PR, make sure that you've added some Images along with it, to make it easier to review.

## 👾 Creating a Pull Request

You can repeat the steps above for as many changes as needed. Once you are done making all your code changes and you have committed them to your branch, you are ready to make a pull request (PR). Go back to the main page of your forked repository. Ensure that your current branch (which is likely still master at this point) is up to date. You can do so by clicking the following button:

![Syncing Fork](/assets/contributing/syncing-fork.jpg)

Once up to date, you can click the Contribute button to open a PR.

Create a pull request:

![Contribute from Fork](/assets/contributing/contribute-from-fork.jpg)

Be sure to add a good description to the PR and that the source and destination branches at the top look correct. The `base repository` and `base branch` should be listed as `kunalkeshan/Shiryoku` and `main` respectively, and on the right of that should be your forked repository and the branch you have your changes on.

Once done, click on Create pull request to officially publish your PR.

## 🐙 Merging a Pull Request

All you have to do now is wait for approval or comments and go from there!

Once your PR is approved, all that is left to do is merge it!

## ❓ Questions

For any Queries on what type of material to add, contact [Kunal Keshan](mailto:kunalkeshan12@gmail.com).
