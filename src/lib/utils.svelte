<script lang="ts" context="module">
	import { searchTerm, selectedTab, selectedTerms } from '$lib/stores.svelte';
	import keywordsRaw from '../data/KEYWORDS.json';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type JsonStuff = Record<string, any>;

	export function fetchCategories(keywordsMap: Record<string, string[]>): Record<string, string[]> {
		const usedKeys = Object.keys(keywordsMap);

		const allKeys = keywordsRaw as Record<string, string[]>;

		for (const [category, keywords] of Object.entries(allKeys)) {
			allKeys[category] = keywords.sort();

			for (const keyword of keywords) {
				if (!usedKeys.includes(keyword)) {
					allKeys[category] = allKeys[category].filter((i) => i !== keyword);
				}
			}
		}

		return allKeys;
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

	export function getKeywordsToDisable(
		keywordsMap: Record<string, string[]>,
		selectedTermsList: Set<string>,
		keywordsToDisable: string[]
	) {
		const iterableEntries = Object.entries(keywordsMap);
		let urlsOfSearchTerm: string[] = [];

		function hasDuplicates(list: any[]): boolean {
			return list.filter((item, index) => list.indexOf(item) !== index).length > 0;
		}

		function findEqualUrls(imputList1: string[], imputList2: string[]): Set<string> {
			let equalUrls: Set<string> = new Set();
			for (const element of imputList1) {
				if (imputList2.includes(element)) {
					equalUrls.add(element);
				}
			}
			return equalUrls;
		}

		for (const [keyword, urls] of iterableEntries) {
			if (selectedTermsList.size == 1) {
				if (selectedTermsList.has(keyword)) {
					urlsOfSearchTerm.push(...urls);
				}
			} else {
				for (const term of selectedTermsList) {
					if (keyword == term) {
						urlsOfSearchTerm.push(...urls);
					}
				}
				if (hasDuplicates(urlsOfSearchTerm)) {
					urlsOfSearchTerm = urlsOfSearchTerm.filter(
						(item, index) => urlsOfSearchTerm.indexOf(item) !== index
					);
				}
			}
		}

		for (const [keyword, urls] of iterableEntries) {
			const commonUrls = findEqualUrls(urlsOfSearchTerm, urls);
			if (commonUrls.size == 0) {
				keywordsToDisable.push(keyword);
			}
		}
		return keywordsToDisable;
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
