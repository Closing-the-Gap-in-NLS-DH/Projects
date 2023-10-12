<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	import {
		entries,
		keywordsCats,
		keywordsMap,
		languagesMap,
		searchTerm,
		selectedEntries,
		selectedTab,
		selectedTerms
	} from '$lib/stores.svelte';

	import {
		fetchCategories,
		fetchEntries,
		fetchList,
		filterPlaces,
		getKeywords,
		getLanguages,
		handleHash,
		updateHash
	} from '$lib/utils.svelte';

	import type { JsonStuff } from '$lib/utils.svelte';

	import Card from '$lib/Card.svelte';
	import Panel from '$lib/Panel.svelte';

	let entriesValue: [string, JsonStuff][];
	let keywordsCatsValue: Record<string, string[]>;
	let keywordsMapValue: Record<string, string[]>;
	let languagesMapValue: Record<string, string[]>;

	let searchTermValue: string;
	let selectedEntriesValue: [string, JsonStuff][];

	let selectedTabValue: string;
	let selectedTermsValue: Set<string>;

	entries.subscribe((value) => {
		entriesValue = value;
	});

	keywordsCats.subscribe((value) => {
		keywordsCatsValue = value;
	});

	keywordsMap.subscribe((value) => {
		keywordsMapValue = value;
	});

	languagesMap.subscribe((value) => {
		languagesMapValue = value;
	});

	searchTerm.subscribe((value) => {
		searchTermValue = value;
	});

	selectedEntries.subscribe((value) => {
		selectedEntriesValue = value;
	});

	selectedTab.subscribe((value) => {
		selectedTabValue = value;
	});

	selectedTerms.subscribe((value) => {
		selectedTermsValue = value;
	});

	$: languages = Object.keys(languagesMapValue).sort();

	function filterEntries(
		entries: [string, JsonStuff][],
		searchTerm: string,
		selectedTab: string,
		selectedTerms: Set<string>
	) {
		if (selectedTab === 'search') {
			if (searchTerm) {
				return selectedEntriesValue;
			} else {
				return entries;
			}
		}

		if (selectedTerms.size === 0) {
			return entries;
		}

		const map = selectedTab === 'keywords' ? keywordsMapValue : languagesMapValue;

		// Race condition: map might not be populated yet
		// Function will run again
		if (Object.keys(map).length === 0) {
			return entries;
		}

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

	$: filtered = filterEntries(entriesValue, searchTermValue, selectedTabValue, selectedTermsValue);

	afterNavigate(handleHash);

	onMount(async () => {
		const [count, listData] = await fetchList();

		if (entriesValue.length !== count) {
			const freshEntries = await fetchEntries(listData);
			const freshKeywords = getKeywords(freshEntries);
			const freshKeywordCats = await fetchCategories(freshKeywords);
			const freshLanguages = getLanguages(freshEntries);

			entries.set(freshEntries);
			keywordsMap.set(freshKeywords);
			keywordsCats.set(freshKeywordCats);
			languagesMap.set(freshLanguages);
		}
	});
</script>

<svelte:window on:hashchange={handleHash} />

<svelte:head>
	<title>Closing the Gap in Non-Latin-Script Data – Projects</title>
	<meta name="twitter:title" content="Closing the Gap in Non-Latin-Script Data – Projects" />
</svelte:head>

<div class="mx-auto max-w-[76rem] px-4">
	<Panel keywordsCategorized={keywordsCatsValue} {languages} />

	<p class="mb-3.5 text-center text-lg font-normal text-gray-50">
		{#if entriesValue.length === 0}
			Loading…
		{:else}
			<code>{filtered.length}</code>
			{filtered.length === 1 ? 'item' : 'items'}
		{/if}
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
