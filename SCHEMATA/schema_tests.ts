import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { v4 } from "https://deno.land/std@0.192.0/uuid/mod.ts";
import { keywords, projectSchema } from "./project_schema.ts";

Deno.test("ensure no duplicate keywords", () => {
  const keywordsSet = new Set(keywords);
  assertEquals(keywordsSet.size, keywords.length);
});

Deno.test("validate project template", () => {
  const templateFile = Deno.readTextFileSync("TEMPLATES/project.json");
  const template = JSON.parse(templateFile);

  // Fill in required fields
  template.record_metadata.uuid = crypto.randomUUID();
  template.record_metadata.record_created_on = Date();

  projectSchema.parse(template);
});

// Get list of project files
const projectsFile = Deno.readTextFileSync("PROJECTS.json");
const projectsObj = JSON.parse(projectsFile);
const projects: [string, Record<string, string>][] =
  Object.entries(projectsObj);

// Test parsing each project file
for (const [id, details] of projects) {
  const path = `.${details.path}${id}.json`;

  Deno.test(`validate ${details.path}`, () => {
    const projectFile = Deno.readTextFileSync(path);
    const projectObj = JSON.parse(projectFile);
    projectSchema.parse(projectObj);

    const uuid = projectObj.record_metadata.uuid;

    // Validate UUID; Zod also does this, but not as strictly
    assertEquals(v4.validate(uuid), true);

    // Ensure filename matches internal UUID
    assertEquals(uuid, id);
  });
}

// Get a sorted list of just IDs from PROJECTS.json
const projectIds = projects.map(([id]) => id);
projectIds.sort();

Deno.test("ensure no duplicate IDs in projects list", () => {
  const projectIdSet = new Set(projectIds);
  assertEquals(projectIdSet.size, projectIds.length);
});

Deno.test("ensure filenames match listed IDs", () => {
  const filenameIds = getIdsFromFilenames("PROJECTS");
  filenameIds.sort();
  assertEquals(filenameIds, projectIds);
});

//
// Helper functions
//

function getIdsFromFilenames(basePath: string): string[] {
  const ids = [];

  for (const dirEntry of Deno.readDirSync(basePath)) {
    if (dirEntry.isDirectory) {
      const subPath = `${basePath}/${dirEntry.name}`;
      ids.push(...getIdsFromFilenames(subPath));
    } else {
      ids.push(dirEntry.name.slice(0, -5));
    }
  }

  return ids;
}
