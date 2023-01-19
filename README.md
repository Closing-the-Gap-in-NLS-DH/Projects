[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Closing-the-Gap-in-NLS-DH/Projects/graphs/commit-activity)

[![Generic badge](https://img.shields.io/badge/IndexSchema-v0.1.1-blue.svg)](#json-schema-for-project-index--uuid-dictionary-v011)
[![Generic badge](https://img.shields.io/badge/ProjectsSchema-v0.1.7-blue.svg)](#json-schema-for-projects-v017)

# Closing the Gap in Non-Latin-Script Data

This project aims to facilitate research in Digital Humanities projects dealing with non-Latin-script data in Latin-script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives, and related institutions in a structured way.

This repository contains metadata information on projects and useful resources that can be loosely associated with the field of Digital Humanities and non-Latin-script-based research. We are particularly interested in the situation of (digital) Arabic Studies and related fields.

Graphical User Interface: <https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data>

## Contribution

You want to participate and contribute data on your project to our database? That's great!

You can either write plain JSON or use the form we provide on the Graphical User Interface. If you decide to use plain JSON, please follow the provided JSON schema.

If you are not able or willing to write plain JSON, feel free to use the form we provide: <https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data/contribute>

Since we use a standardized vocabulary, please use the [keywords documentation](https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/keywords_documentation.md) to choose tags for your project. As our taxonomy is still developing, feel free to contact us with any suggestions for improvement.

After you have finished your work, simply provide us with the final JSON file so that we can ingest it. The data will be available immediately after the file is added to our store.

## Schema Documentation

The schema is under continual development. Existing entries will not be automatically updated to newer versions of the schema. In case of issues, the creator or last editor will be contacted.

Feel free to discuss possible improvements to the schema via GitHub issues.

We will add a history of all upcoming schema versions beginning with `v0.1.6`.

### JSON Schema for Projects (`v0.1.7`)

See `TEMPLATES/project.json` for a template and `SCHEMATA/project.schema.json` for a comprehensive schema of the latest version.

### JSON Schema for Project Index / UUID Dictionary (`v0.1.1`)

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
