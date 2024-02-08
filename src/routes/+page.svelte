<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	import { searchTerm, selectedEntries, selectedTab, selectedTerms } from '$lib/stores.svelte';
	import entriesRaw from '../data/ENTRIES.json';

	import {
		fetchCategories,
		filterPlaces,
		getKeywords,
		getLanguages,
		handleHash,
		updateHash
	} from '$lib/utils.svelte';

	import type { JsonStuff } from '$lib/utils.svelte';

	import Card from '$lib/Card.svelte';
	import Panel from '$lib/Panel.svelte';

	const entries = entriesRaw as [string, JsonStuff][];
	const keywordsMap = getKeywords(entries);
	const keywordCats: Record<string, string[]> = fetchCategories(keywordsMap);
	const languagesMap: Record<string, string[]> = getLanguages(entries);

	let searchTermValue: string;
	searchTerm.subscribe((value) => {
		searchTermValue = value;
	});

	let selectedEntriesValue: [string, JsonStuff][];
	selectedEntries.subscribe((value) => {
		selectedEntriesValue = value;
	});

	let selectedTabValue: string;
	selectedTab.subscribe((value) => {
		selectedTabValue = value;
	});

	let selectedTermsValue: Set<string>;
	selectedTerms.subscribe((value) => {
		selectedTermsValue = value;
	});

	$: languages = Object.keys(languagesMap).sort();

	function filterEntries(
		entries: [string, JsonStuff][],
		searchTerm: string,
		selectedTab: string,
		selectedTerms: Set<string>
	) {
		if (selectedTab === 'search') {
			if (searchTerm) {
				return selectedEntriesValue;
			}

			return entries;
		}

		if (selectedTerms.size === 0) {
			return entries;
		}

		const map = selectedTab === 'keywords' ? keywordsMap : languagesMap;

		let matches: string[] = [];
		let firstIteration = true;

		for (const term of selectedTerms) {
			if (!map[term]) {
				updateHash(selectedTab, term);
				return entries;
			}

			const newMatches = map[term];

			if (firstIteration) {
				matches = newMatches;
				firstIteration = false;
				continue;
			}

			matches = matches.filter((value) => newMatches.includes(value));
		}

		return entries.filter(([url]) => matches.includes(url));
	}

	$: filtered = filterEntries(entries, searchTermValue, selectedTabValue, selectedTermsValue);

	afterNavigate(handleHash);
</script>

<svelte:window on:hashchange={handleHash} />

<svelte:head>
	<title>Closing the Gap in Non-Latin-Script Data – Projects</title>
	<meta name="twitter:title" content="Closing the Gap in Non-Latin-Script Data – Projects" />
</svelte:head>

<div class="mx-auto max-w-[76rem] px-4">
	<Panel keywordsCategorized={keywordCats} {languages} />

	<p class="mb-3.5 text-center text-lg font-normal text-gray-50">
		<code>{filtered.length}</code>
		{filtered.length === 1 ? 'item' : 'items'}
	</p>

	<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
		{#each filtered as [url, data]}
			<Card
				title={data.project.title}
				description={data.project.project_desc}
				periods={data.project.date}
				places={filterPlaces(data.project.places)}
				languages={data.project.lang}
				websiteLinks={data.project.websites}
				{url}
				lastEdited={data.record_metadata.last_edited_on || data.record_metadata.record_created_on}
				keywords={data.project.keywords}
				uuid={data.record_metadata.uuid}
			/>
		{/each}
	</div>
</div>
