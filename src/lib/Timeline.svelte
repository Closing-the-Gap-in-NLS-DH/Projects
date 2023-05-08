<script lang="ts">
	import { onMount } from 'svelte';

	import { entries, keywordsMap, languagesMap } from '$lib/stores.svelte';

	import {
		fetchList,
		fetchEntries,
		getKeywords,
		getLanguages
	} from '$lib/utils.svelte';

	import type { JsonStuff } from '$lib/utils.svelte';

	let entriesValue: [string, JsonStuff][];
	entries.subscribe((value) => {
		entriesValue = value;
	});

	$: entriesFiltered = entriesValue.filter(
		([, entry]) => entry.project.date[0].from && entry.project.date[0].to
	);

	const currentYear = new Date().getFullYear();
	const backEighteen = currentYear - 18;
	const forwardTwelve = currentYear + 12;
	const years = Array.from({ length: forwardTwelve - backEighteen + 1 }, (_, i) =>
		String(backEighteen + i)
	);

	function truncateTitle(title: string): string {
		const maxLength = 36;

		if (title.length <= maxLength) {
			return title;
		}

		let i = maxLength;
		while (title[i] !== ' ') {
			i--;
		}
		return `${title.slice(0, i)} …`;
	}

	function fundedYear(year: number, entry: JsonStuff): boolean {
		for (const period of entry.project.date) {
			if (
				period.from &&
				period.to &&
				year >= period.from.slice(0, 4) &&
				year <= period.to.slice(0, 4)
			) {
				return true;
			}
		}

		return false;
	}

	function fixUrl(url: string): string {
		const prefix =
			'https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/';
		const suffix = url.split('/PROJECTS/')[1];
		return prefix + suffix;
	}

	onMount(async () => {
		//
		// Fetch project data if necessary
		//

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

<div class="mx-auto max-w-[76rem] px-4">
	{#if entriesFiltered.length === 0}
		<p class="text-center text-lg font-normal text-gray-50">Loading…</p>
	{:else}
		<table
			class="mx-auto w-full table-auto border-separate border-spacing-0 bg-[#b8b08d]"
		>
			<thead class="sticky top-0 bg-[#a0a191]">
				<tr class="border-b border-slate-800">
					<th class="border-b border-r border-slate-800">Project title</th>
					{#each years as year, i}
						{#if i === years.length - 1}
							<th class="border-b border-slate-800 px-1 py-1.5 text-sm"
								>’{year.slice(-2)}</th
							>
						{:else}
							<th class="border-b border-r border-slate-800 px-1 py-1.5 text-sm"
								>’{year.slice(-2)}</th
							>
						{/if}
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each entriesFiltered as [url, entry], i}
					<tr>
						{#if i === entriesFiltered.length - 1}
							<td class="border-r border-slate-800 px-2 py-0.5"
								>{truncateTitle(entry.project.title)}</td
							>

							{#each years as year, j}
								{#if fundedYear(Number(year), entry)}
									<td class="bg-slate-800" />
								{:else if j === years.length - 1}
									<td />
								{:else}
									<td class="border-r border-slate-800/25" />
								{/if}
							{/each}
						{:else}
							<td class="border-b border-r border-slate-800 px-2 py-0.5"
								><a href={fixUrl(url)} target="_blank" rel="noreferrer"
									>{truncateTitle(entry.project.title)}</a
								></td
							>

							{#each years as year, j}
								{#if fundedYear(Number(year), entry)}
									<td class="bg-slate-800" />
								{:else if j === years.length - 1}
									<td class="border-b border-slate-800/25" />
								{:else}
									<td class="border-b border-r border-slate-800/25" />
								{/if}
							{/each}
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
