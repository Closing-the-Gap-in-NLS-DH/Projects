//
// Utilities (ideally to be defined elsewhere)
//

interface Listing {
	title: string;
	path: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonStuff = Record<string, any>;

function sortTitles(a: JsonStuff, b: JsonStuff): 1 | -1 | 0 {
	const aTitle = a.project.title.toLowerCase();
	const bTitle = b.project.title.toLowerCase();

	if (aTitle > bTitle) {
		return 1;
	} else if (aTitle < bTitle) {
		return -1;
	} else return 0;
}

//
// Fetch and save keywords
//

const keywordsRes = await fetch(
	'https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master/KEYWORDS/KEYWORDS.json'
);
const keywords: Record<string, string[]> = await keywordsRes.json();
await Deno.writeTextFile('./static/archive/KEYWORDS/KEYWORDS.json', JSON.stringify(keywords));

//
// Fetch and save list of projects
//

const projectsRes = await fetch(
	'https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master/PROJECTS.json'
);
const projects: Record<string, Listing> = await projectsRes.json();
await Deno.writeTextFile('./static/archive/PROJECTS.json', JSON.stringify(projects));

//
// Fetch project entries and build collection
//

const projectEntries: [string, Listing][] = Object.entries(projects);

const urls: string[] = [];
for (const [id, details] of projectEntries) {
	urls.push(
		`https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master${details.path}${id}.json`
	);
}

let entries: [string, JsonStuff][] = await Promise.all(
	urls.map(async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		return [url, data];
	})
);

entries = entries.sort((a, b) => sortTitles(a[1], b[1]));

await Deno.writeTextFile('./static/archive/ENTRIES.json', JSON.stringify(entries));

//
// Record time of last archive
//

await Deno.writeTextFile('./static/archive/generated.txt', new Date().toUTCString());
