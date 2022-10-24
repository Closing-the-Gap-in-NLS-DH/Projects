[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Closing-the-Gap-in-NLS-DH/Projects/graphs/commit-activity)

[![Generic badge](https://img.shields.io/badge/IndexSchema-v0.1.1-blue.svg)](#indexschema)
[![Generic badge](https://img.shields.io/badge/ProjectsSchema-v0.1.6-blue.svg)](#projectsschema)

# Closing the Gap in Non-Latin Script Data

The project aims to facilitate research in Digital Humanities projects dealing with Non-Latin Script in Latin Script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives and/or related institutions in a structured way.

This repository contains metadata information on projects and useful resources that can be loosely associated to the field of Digital Humanities and Non-Latin-Script-based research. This project is particularly interested in the situation of (digital) Arabic Studies and related fields.

Graphical User Interface: https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data

## Contribution

You want to participate and contribute data on your project to our databse? That's great!

You can either write plain JSON or use the form we provide on the Graphical User Interface. If you decide to use plain JSON, please follow the provided JSON schema.

If you are not able or willing to write plain JSON, feel free to use the form we provide: https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data/contribute

After you finished your work, just provide us with the final JSON file, so we can ingest it. The data will be available immediately after the file is added to the store.

## Schema Documentation

The schema underlies continuous development. Existing entries are not going to be automatically updated to newer versions of the schema. In case of issues, the creator or last editor will be contacted.

Feel free to discuss possible improvements the schema in the GitHub issues.

We will add a history of all upcoming schema versions beginning with `v0.1.6`.

### <a id="indexschema"></a>JSON Schema for Projects (`v0.1.6`)

See `TEMPLATES/project.json` for a template and `SCHEMATA/project.schema.json` for a comprehensive schema of the latest version.

### <a id="indexschema"></a>JSON Schema for Project Index / UUID Dictionary (`v0.1.1`)

```javascript
{
  ...
  "{uuid}": {
    "title": "{title}",
    // The simplified title should not contain any special characters and be machine-readable
    "path": "/PROJECTS/{simplified_title}/"
  }
  ...
}
```
