<script lang="ts" context="module">
	import { searchTerm, selectedTab, selectedTerms } from '$lib/stores.svelte';
	import { PUBLIC_CTG_ARCHIVE } from '$env/static/public';

	interface Listing {
		title: string;
		path: string;
	}

	const useArchive = PUBLIC_CTG_ARCHIVE.toLowerCase() === 'true';
	const urlPrefix = useArchive
		? '/Closing-The-Gap-In-Non-Latin-Script-Data/archive'
		: 'https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type JsonStuff = Record<string, any>;

	export async function fetchCategories(
		keywordsMap: Record<string, string[]>
	): Promise<Record<string, string[]>> {
		const usedKeys = Object.keys(keywordsMap);

		const res = await fetch(`${urlPrefix}/KEYWORDS/KEYWORDS.json`);
		const categorizedKeys: Record<string, string[]> = await res.json();

		for (const [category, keywords] of Object.entries(categorizedKeys)) {
			categorizedKeys[category] = keywords.sort();

			for (const keyword of keywords) {
				if (!usedKeys.includes(keyword)) {
					categorizedKeys[category] = categorizedKeys[category].filter((i) => i !== keyword);
				}
			}
		}

		return categorizedKeys;
	}

	export async function fetchEntries(
		listData: Record<string, Listing>
	): Promise<[string, JsonStuff][]> {
		if (useArchive) {
			const entriesRes = await fetch(`${urlPrefix}/ENTRIES.json`);
			const entries: [string, JsonStuff][] = await entriesRes.json();
			return entries;
		}

		const listEntries: [string, Listing][] = Object.entries(listData);

		const urls: string[] = [];

		for (const [id, details] of listEntries) {
			urls.push(`${urlPrefix}${details.path}${id}.json`);
		}

		let entries: [string, JsonStuff][] = await Promise.all(
			urls.map(async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return [url, data];
			})
		);

		entries = entries.sort((a, b) => sortTitles(a[1], b[1]));

		return entries;
	}

	export async function fetchList(): Promise<[number, Record<string, Listing>]> {
		const listResponse = await fetch(`${urlPrefix}/PROJECTS.json`);

		const listData: Record<string, Listing> = await listResponse.json();
		const count = Object.keys(listData).length;

		return [count, listData];
	}

	export async function fetchTemplate(): Promise<Record<string, unknown>> {
		const res = await fetch(`${urlPrefix}/TEMPLATES/project.json`);
		const template: Record<string, unknown> = await res.json();
		return template;
	}

	export function filterPlaces(places: JsonStuff[]): JsonStuff[] {
		return places.filter((place) => place.place_name.text);
	}

	export function getKeywords(entries: [string, JsonStuff][]): Record<string, string[]> {
		const keywordsMap: Record<string, string[]> = {};

		for (const [url, data] of entries) {
			const keywords: string[] = data.project.keywords;

			for (const keyword of keywords) {
				if (keywordsMap[keyword]) {
					keywordsMap[keyword].push(url);
				} else {
					keywordsMap[keyword] = [url];
				}
			}
		}

		return keywordsMap;
	}

	export function getLanguages(entries: [string, JsonStuff][]): Record<string, string[]> {
		const languagesMap: Record<string, string[]> = {};

		for (const [url, data] of entries) {
			const languages: string[] = data.project.research_data.lang;

			for (const language of languages) {
				if (languagesMap[language]) {
					languagesMap[language].push(url);
				} else {
					languagesMap[language] = [url];
				}
			}
		}

		return languagesMap;
	}

	export function handleHash() {
		if (window.location.hash) {
			if (window.location.hash.startsWith('#keywords=')) {
				selectedTab.set('keywords');

				const keywords = window.location.hash.split('keywords=')[1];
				const keywordsArray = keywords.split(',');

				selectedTerms.set(new Set(keywordsArray));
			} else if (window.location.hash.startsWith('#languages=')) {
				selectedTab.set('languages');

				const langs = window.location.hash.split('languages=')[1];
				const langsArray = langs.split(',');

				selectedTerms.set(new Set(langsArray));
			} else {
				// TODO: handle search hash?
				// For now, just reset
				searchTerm.set('');
				selectedTerms.set(new Set());
			}
		} else {
			// No hash; just make sure everything is reset
			searchTerm.set('');
			selectedTerms.set(new Set());
		}
	}

	export function resetHash() {
		searchTerm.set('');
		selectedTerms.set(new Set());
		window.location.hash = '';
	}

	export function searchEntries(
		entries: [string, JsonStuff][],
		term: string
	): [string, JsonStuff][] {
		const termLower = term.toLowerCase();
		const matches: [string, JsonStuff][] = [];

		for (const [url, entry] of entries) {
			// Title
			const title = entry.project.title.toLowerCase();
			if (title.includes(termLower)) {
				matches.push([url, entry]);
				continue;
			}

			// Abbreviation
			const abbr = entry.project.abbr.toLowerCase();
			if (abbr.includes(termLower)) {
				matches.push([url, entry]);
				continue;
			}

			// Description
			const description = entry.project.project_desc.toLowerCase();
			if (description.includes(termLower)) {
				matches.push([url, entry]);
				continue;
			}

			// Keywords
			const keywords = entry.project.keywords.join(' ');
			if (keywords.includes(termLower)) {
				matches.push([url, entry]);
				continue;
			}

			// Places
			let places = '';
			for (const place of entry.project.places) {
				if (place.place_name.text) {
					places += place.place_name.text.toLowerCase();
					places += ' ';
				}
			}
			places = places.trim();
			if (places.includes(termLower)) {
				matches.push([url, entry]);
				continue; // Not needed at the moment, but maybe later
			}
		}

		return matches;
	}

	function sortTitles(a: JsonStuff, b: JsonStuff): 1 | -1 | 0 {
		const aTitle = a.project.title.toLowerCase();
		const bTitle = b.project.title.toLowerCase();

		if (aTitle > bTitle) {
			return 1;
		} else if (aTitle < bTitle) {
			return -1;
		} else return 0;
	}

	export function updateHash(type: string, term: string) {
		selectedTerms.update((terms) => {
			if (terms.has(term)) {
				terms.delete(term);
			} else {
				terms.add(term);
			}
			return terms;
		});

		let termsArray: string[] = [];
		selectedTerms.subscribe((terms) => {
			termsArray = Array.from(terms);
		});

		if (termsArray.length === 0) {
			window.location.hash = '';
			return;
		}

		const termsString = termsArray.join(',');
		window.location.hash = `#${type}=${termsString}`;
	}
</script>
