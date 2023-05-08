<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	import {
		entries,
		keywordsMap,
		languagesMap,
		searchTerm,
		selectedEntries,
		selectedTab,
		selectedTerm
	} from '$lib/stores.svelte';

	import {
		fetchEntries,
		fetchList,
		filterPlaces,
		getKeywords,
		getLanguages,
		handleHash
	} from '$lib/utils.svelte';

	import type { JsonStuff } from '$lib/utils.svelte';

	import Card from '$lib/Card.svelte';
	import Panel from '$lib/Panel.svelte';

	let entriesValue: [string, JsonStuff][];
	let keywordsMapValue: Record<string, string[]>;
	let languagesMapValue: Record<string, string[]>;

	let searchTermValue: string;
	let selectedEntriesValue: [string, JsonStuff][];

	let selectedTabValue: string;
	let selectedTermValue: string;

	entries.subscribe((value) => {
		entriesValue = value;
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

	selectedTerm.subscribe((value) => {
		selectedTermValue = value;
	});

	$: keywords = Object.keys(keywordsMapValue).sort();
	$: languages = Object.keys(languagesMapValue).sort();

	function filterEntries(
		entries: [string, JsonStuff][],
		searchTerm: string,
		selectedTab: string,
		selectedTerm: string
	) {
		if (selectedTab === 'search' && searchTerm) {
			return selectedEntriesValue;
		}

		if (selectedTerm) {
			if (selectedTab === 'keywords' && keywordsMapValue[selectedTerm]) {
				const matches = keywordsMapValue[selectedTerm];
				return entries.filter(([url]) => matches.includes(url));
			}

			if (selectedTab === 'languages' && languagesMapValue[selectedTerm]) {
				const matches = languagesMapValue[selectedTerm];
				return entries.filter(([url]) => matches.includes(url));
			}
		}

		return entries;
	}

	$: filtered = filterEntries(
		entriesValue,
		searchTermValue,
		selectedTabValue,
		selectedTermValue
	);

	afterNavigate(handleHash);

	onMount(async () => {
		const [count, listData] = await fetchList();

		if (entriesValue.length !== count) {
			const freshEntries = await fetchEntries(listData);
			const freshKeywords = getKeywords(freshEntries);
			const freshLanguages = getLanguages(freshEntries);

			entries.set(freshEntries);
			keywordsMap.set(freshKeywords);
			languagesMap.set(freshLanguages);
		}
	});
</script>

<svelte:window on:hashchange={handleHash} />

<svelte:head>
	<title>Closing the Gap in Non-Latin-Script Data – Projects</title>
	<meta
		name="twitter:title"
		content="Closing the Gap in Non-Latin-Script Data – Projects"
	/>
</svelte:head>

<div class="mx-auto max-w-[76rem] px-4">
	<Panel {keywords} {languages} />

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
				lastEdited={data.record_metadata.last_edited_on ||
					data.record_metadata.record_created_on}
				keywords={data.project.keywords}
			/>
		{/each}
	</div>
</div>
