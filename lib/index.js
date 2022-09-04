/**
 * Convert Resources JSON to Resources MD
 */

const fs = require('fs');
const path = require('path');
const ResourcesJson = require('../src/data/resources.json');

const MD_PATH = path.join(__dirname, '../RESOURCES.md')

let tableOfContents = '';
let resources = `
| | Name | Description | Links | Tags | 
| --- | --- | --- | --- | --- |
`;

let INTRODUCTION_MD = `
# Resources

Incredible resources (with links) to help up-skill yourselves on various fields. Resources like programming, designing, engineering and much more and completely Open Source. Made with ♥ by Kunal Keshan.

**Table of Contents**:


`

function convertResourceToMd({ name, description, url, icon, github, tags }) {
    return `| <img src="${icon}" alt="${name} logo" width="100px" height="auto" /> | ### ${name} | ${description} | - [${url}](${url}) ${github ? `\n- [${github}](${github})` : ''} | ${tags.map((tag) => `\`${tag}\``).join(', ')} |`
}

function createResourcesTableOfContent({ name = '' }) {
    let id = name.replace(/[\W+]|[\s+]/ig, '-').toLowerCase();
    id = id.replace('--', '-');
    id = id.charAt(id.length - 1) === '-' ? id.substring(0, id.length - 1) : id;
    return `- [${name}](#${id})\n`;
};

ResourcesJson.forEach((resource) => {
    tableOfContents += createResourcesTableOfContent(resource);
    resources += convertResourceToMd(resource)
});

INTRODUCTION_MD += tableOfContents + resources;

fs.writeFileSync(MD_PATH, INTRODUCTION_MD)
