<script lang="ts">
	import {
		entries,
		searchTerm,
		selectedEntries,
		selectedTab,
		selectedTerm
	} from '$lib/stores.svelte';

	import { langNames } from '$lib/lang_names.svelte';

	import { searchEntries, resetHash, setHash } from '$lib/utils.svelte';
	import type { JsonStuff } from '$lib/utils.svelte';

	export let keywords: string[];
	export let languages: string[];

	let entriesValue: [string, JsonStuff][] = [];
	let searchTermValue: string;

	let selectedTabValue: string;
	let selectedTermValue: string;

	entries.subscribe((value) => {
		entriesValue = value;
	});

	searchTerm.subscribe((value) => {
		searchTermValue = value;
	});

	selectedTab.subscribe((value) => {
		selectedTabValue = value;
	});

	selectedTerm.subscribe((value) => {
		selectedTermValue = value;
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let timeout: any = null;

	function handleSearch() {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			searchTerm.set(searchTermValue);
			const matchingEntries = searchEntries(entriesValue, searchTermValue);
			selectedEntries.set(matchingEntries);
		}, 500);
	}

	function validate(keywords: string[], langs: string[], selection: string) {
		if (selectedTabValue === 'keywords') {
			return keywords.includes(selection);
		}

		if (selectedTabValue === 'languages') {
			return langs.includes(selection);
		}

		return false;
	}

	$: validSelection = validate(keywords, languages, selectedTermValue);
</script>

<div class="mb-3.5 rounded-lg bg-[#b8b08d] p-4">
	<div class="mb-4 border-b border-b-slate-800">
		<ul class="flex gap-2 text-lg font-normal">
			<li
				on:click={() => {
					selectedTab.set('search');
					resetHash();
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab.set('search');
						resetHash();
					}
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-[#f29559]"
				class:bg-[#f29559]={selectedTabValue === 'search'}
				class:border-slate-800={selectedTabValue === 'search'}
				class:border-[#b8b08d]={selectedTabValue !== 'search'}
			>
				Search
			</li>

			<li
				on:click={() => {
					selectedTab.set('keywords');
					resetHash();
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab.set('keywords');
						resetHash();
					}
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-[#f29559]"
				class:bg-[#f29559]={selectedTabValue === 'keywords'}
				class:border-slate-800={selectedTabValue === 'keywords'}
				class:border-[#b8b08d]={selectedTabValue !== 'keywords'}
			>
				Keywords
			</li>

			<li
				on:click={() => {
					selectedTab.set('languages');
					resetHash();
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						selectedTab.set('languages');
						resetHash();
					}
				}}
				class="cursor-pointer rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-[#f29559]"
				class:bg-[#f29559]={selectedTabValue === 'languages'}
				class:border-slate-800={selectedTabValue === 'languages'}
				class:border-[#b8b08d]={selectedTabValue !== 'languages'}
			>
				Languages
			</li>
		</ul>
	</div>

	{#if selectedTabValue !== 'search' && validSelection}
		<p class="-mt-1 mb-3.5 font-normal text-red-900 underline">
			<span
				on:click={() => {
					resetHash();
				}}
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						resetHash();
					}
				}}
				class="cursor-pointer">Clear selection</span
			>
		</p>
	{/if}

	{#if selectedTabValue === 'languages'}
		<div class="flex flex-wrap gap-2.5 text-sm">
			{#each languages as language}
				<code
					on:click={() => {
						setHash('language', language);
					}}
					on:keydown={(e) => {
						if (e.key === 'Enter') {
							setHash('language', language);
						}
					}}
					class="cursor-pointer rounded-md border px-2 py-0.5 hover:border-[#2e4a61] hover:bg-[#2e4a61] hover:text-gray-50"
					class:bg-[#2e4a61]={selectedTermValue === language}
					class:border-[#2e4a61]={selectedTermValue === language}
					class:border-slate-800={selectedTermValue !== language}
					class:text-gray-50={selectedTermValue === language}
					title={langNames[language] || language}>{language}</code
				>
			{/each}
		</div>
	{:else if selectedTabValue === 'keywords'}
		<div class="flex flex-wrap gap-2.5 text-sm">
			{#each keywords as keyword}
				<code
					on:click={() => {
						setHash('keyword', keyword);
					}}
					on:keydown={(e) => {
						if (e.key === 'Enter') {
							setHash('keyword', keyword);
						}
					}}
					class="cursor-pointer rounded-md border px-2 py-0.5 hover:border-[#2e4a61] hover:bg-[#2e4a61] hover:text-gray-50"
					class:bg-[#2e4a61]={selectedTermValue === keyword}
					class:border-[#2e4a61]={selectedTermValue === keyword}
					class:border-slate-800={selectedTermValue !== keyword}
					class:text-gray-50={selectedTermValue === keyword}>{keyword}</code
				>
			{/each}
		</div>
	{:else}
		<div class="flex gap-2 font-normal">
			<input
				autocorrect="off"
				autocapitalize="none"
				class="w-56 rounded border border-[#2e4a61] bg-gray-100 px-2 py-1"
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
