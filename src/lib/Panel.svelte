<script lang="ts">
	import { searchTerm, selectedEntries, selectedTab, selectedTerms } from '$lib/stores.svelte';
	import { langNames } from '$lib/lang-names.svelte';
	import entriesRaw from '../data/ENTRIES.json';

	import {
		searchEntries,
		resetHash,
		updateHash,
		getKeywords,
		getInvalidKeywords
	} from '$lib/utils.svelte';
	import type { JsonStuff } from '$lib/utils.svelte';

	export let keywordsCategorized: Record<string, string[]>;
	export let languages: string[];

	const entries = entriesRaw as [string, JsonStuff][];
	const keywordsMap = getKeywords(entries);
	let keywordsToDisable: string[] = [];

	let searchTermValue: string;

	let selectedTabValue: string;
	let selectedTermsValue: Set<string>;

	searchTerm.subscribe((value) => {
		searchTermValue = value;
	});

	selectedTab.subscribe((value) => {
		selectedTabValue = value;
	});

	selectedTerms.subscribe((value) => {
		selectedTermsValue = value;
	});

	let debounce: number;

	function handleSearch() {
		clearTimeout(debounce);

		debounce = setTimeout(() => {
			searchTerm.set(searchTermValue);
			const matchingEntries = searchEntries(entries, searchTermValue);
			selectedEntries.set(matchingEntries);
		}, 500);
	}

	function validate(
		keywords: Record<string, string[]>,
		langs: string[],
		selections: Set<string>,
		tab: string
	) {
		if (tab === 'search') {
			return false;
		}

		const keywordsFlat = Object.values(keywords).flat();
		const established = tab === 'keywords' ? keywordsFlat : langs;

		// Race condition: langs, at least, could still be empty
		// Function will run again
		if (established.length === 0) {
			return false;
		}

		for (const selection of selections) {
			if (!established.includes(selection)) {
				selectedTerms.update((value) => {
					value.delete(selection);
					return value;
				});
			}
		}

		if (selections.size === 0) {
			return false;
		} else {
			return true;
		}
	}

	$: validSelection = validate(
		keywordsCategorized,
		languages,
		selectedTermsValue,
		selectedTabValue
	);
</script>

<div class="mb-3.5 rounded-lg bg-ctgtan p-4">
	<div class="mb-4 border-b border-b-slate-800">
		<div class="flex gap-2 text-lg font-normal">
			<button
				on:click={() => {
					selectedTab.set('search');
					resetHash();
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange"
				class:bg-ctgorange={selectedTabValue === 'search'}
				class:border-slate-800={selectedTabValue === 'search'}
				class:border-ctgtan={selectedTabValue !== 'search'}
			>
				Search
			</button>

			<button
				on:click={() => {
					selectedTab.set('keywords');
					resetHash();
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange"
				class:bg-ctgorange={selectedTabValue === 'keywords'}
				class:border-slate-800={selectedTabValue === 'keywords'}
				class:border-ctgtan={selectedTabValue !== 'keywords'}
			>
				Keywords
			</button>

			<button
				on:click={() => {
					selectedTab.set('languages');
					resetHash();
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange"
				class:bg-ctgorange={selectedTabValue === 'languages'}
				class:border-slate-800={selectedTabValue === 'languages'}
				class:border-ctgtan={selectedTabValue !== 'languages'}
			>
				Languages
			</button>
		</div>
	</div>

	{#if selectedTabValue !== 'search' && validSelection}
		<p class="-mt-1 mb-3.5">
			<button
				on:click={() => {
					resetHash();
					keywordsToDisable = [];
				}}
				class="cursor-pointer font-normal text-red-900 underline">Clear selection</button
			>
		</p>
	{/if}

	{#if selectedTabValue === 'languages'}
		<div class="flex flex-wrap gap-2.5 text-sm">
			{#each languages as language}
				<button
					on:click={() => {
						updateHash('languages', language);
					}}
					class="cursor-pointer rounded-md border px-2 py-0.5 font-mono hover:border-ctgblue hover:bg-ctgblue hover:text-gray-50"
					class:bg-ctgblue={selectedTermsValue.has(language)}
					class:border-ctgblue={selectedTermsValue.has(language)}
					class:border-slate-800={!selectedTermsValue.has(language)}
					class:text-gray-50={selectedTermsValue.has(language)}
					title={langNames[language] || language}
				>
					{language}
				</button>
			{/each}
		</div>

		<p class="-mb-1.5 mt-2.5">
			<em>Hover on a language code to see the full name</em>
		</p>
	{:else if selectedTabValue === 'keywords'}
		{#each Object.keys(keywordsCategorized) as category, i}
			<div class="lg:flex">
				<div class="mb-4 text-sm lg:mb-0 lg:w-1/5 xl:w-1/6">
					<code><em>{category}</em></code>
				</div>

				<div class="flex flex-wrap gap-2.5 text-sm lg:w-4/5 xl:w-5/6">
					{#each keywordsCategorized[category] as keyword}
						<button
							on:click={() => {
								updateHash('keywords', keyword);
								keywordsToDisable = getInvalidKeywords(
									keywordsMap,
									selectedTermsValue,
									keywordsToDisable
								);
							}}
							class="cursor-pointer rounded-md border px-2 py-0.5 font-mono"
							class:bg-ctgblue={selectedTermsValue.has(keyword)}
							class:border-ctgblue={selectedTermsValue.has(keyword)}
							class:border-slate-800={!selectedTermsValue.has(keyword)}
							class:cursor-not-allowed={keywordsToDisable.includes(keyword)}
							class:hover:bg-ctgblue={!keywordsToDisable.includes(keyword)}
							class:hover:border-ctgblue={!keywordsToDisable.includes(keyword)}
							class:hover:text-gray-50={!keywordsToDisable.includes(keyword)}
							class:opacity-50={keywordsToDisable.includes(keyword)}
							class:text-gray-50={selectedTermsValue.has(keyword)}
							disabled={!selectedTermsValue.has(keyword) && keywordsToDisable.includes(keyword)}
						>
							{#if keyword === 'corpus_output' || keyword === 'corpus_resource'}
								corpus
							{:else}
								{keyword}
							{/if}
						</button>
					{/each}
				</div>
			</div>

			{#if i < Object.keys(keywordsCategorized).length - 1}
				<hr class="my-4 border-slate-800" />
			{/if}
		{/each}
	{:else}
		<div class="flex gap-2 font-normal">
			<input
				type="text"
				autocorrect="off"
				autocapitalize="none"
				class="w-56 rounded border border-ctgblue bg-gray-100 px-2 py-1"
				bind:value={searchTermValue}
				on:keydown={() => {
					handleSearch();
				}}
			/>

			{#if searchTermValue}
				<button
					on:click={() => {
						searchTerm.set('');
					}}
					class="rounded bg-red-900 px-2 text-gray-100">Clear</button
				>
			{/if}
		</div>
	{/if}
</div>
