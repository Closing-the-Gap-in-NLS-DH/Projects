<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import type { JsonStuff } from '$lib/utils.svelte';

	export const entries: Writable<[string, JsonStuff][]> = writable([]);
	export const keywordsMap: Writable<Record<string, string[]>> = writable({});
	export const languagesMap: Writable<Record<string, string[]>> = writable({});

	export const searchTerm: Writable<string> = writable('');
	export const selectedTab: Writable<string> = writable('search');
	export const selectedTerm: Writable<string> = writable('');

	export const selectedEntries: Writable<[string, JsonStuff][]> = writable([]);
</script>
