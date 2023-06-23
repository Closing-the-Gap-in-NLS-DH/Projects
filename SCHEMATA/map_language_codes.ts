function getPaths(basePath: string): string[] {
  const paths: string[] = [];

  for (const dirEntry of Deno.readDirSync(basePath)) {
    if (dirEntry.isDirectory) {
      const subPath = `${basePath}/${dirEntry.name}`;
      paths.push(...getPaths(subPath));
    } else {
      const fullPath = `${basePath}/${dirEntry.name}`;

      if (fullPath.endsWith(".json")) {
        paths.push(fullPath);
      }
    }
  }

  return paths;
}

const projectPaths = getPaths("PROJECTS");

let langs: string[] = [];

for (const path of projectPaths) {
  const projectFile = Deno.readTextFileSync(path);
  const projectObj = JSON.parse(projectFile);

  const projectLangs: string[] = projectObj.project.lang;
  const researchLangs: string[] = projectObj.project.research_data.lang;

  langs = [...langs, ...projectLangs, ...researchLangs];
}

const langsSet = new Set(langs);
const langsConsolidated = Array.from(langsSet);
langsConsolidated.sort();

const fullLangsFile = Deno.readTextFileSync("LANGUAGES.json");
const fullLangs: Record<string, string> = JSON.parse(fullLangsFile);

const selectedLangs: Record<string, string> = {};

for (const lang of langsConsolidated) {
  selectedLangs[lang] = fullLangs[lang];
}

const stringified = JSON.stringify(selectedLangs, null, 2);
Deno.writeTextFileSync("selected_langs.json", stringified);
