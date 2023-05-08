<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Map } from 'leaflet';

	import { entries, keywordsMap, languagesMap } from '$lib/stores.svelte';

	import {
		fetchList,
		filterPlaces,
		fetchEntries,
		getKeywords,
		getLanguages
	} from '$lib/utils.svelte';

	import type { JsonStuff } from '$lib/utils.svelte';

	interface ProjectLink {
		title: string;
		url: string;
	}

	interface PlaceData {
		lat: number;
		lng: number;
		projects: ProjectLink[];
	}

	let mapElement: HTMLElement;
	let map: Map;

	let entriesValue: [string, JsonStuff][];
	entries.subscribe((value) => {
		entriesValue = value;
	});

	const jsonUrlPrefix =
		'https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/';

	const placesMap: Record<string, PlaceData> = {};

	onMount(async () => {
		//
		// Start by loading the Leaflet map
		//

		const L = await import('leaflet');

		// Map is initially centered on Göttingen
		map = L.map(mapElement).setView([51.53443, 9.93228], 5);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

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

		//
		// Generate map of places to projects
		//

		for (const [url, data] of entriesValue) {
			const places = filterPlaces(data.project.places);
			const jsonUrl = `${jsonUrlPrefix}${url.split('/PROJECTS/')[1]}`;

			for (const place of places) {
				const key =
					place.place_name.text +
					place.coordinates.lat.split('.')[0] +
					place.coordinates.lng.split('.')[0];

				if (placesMap[key]) {
					placesMap[key].projects.push({
						title: data.project.title,
						url: jsonUrl
					});
				} else {
					const initial: PlaceData = {
						lat: place.coordinates.lat,
						lng: place.coordinates.lng,
						projects: [{ title: data.project.title, url: jsonUrl }]
					};

					placesMap[key] = initial;
				}
			}
		}

		//
		// Add markers to the map
		//

		for (const [, data] of Object.entries(placesMap)) {
			const joined = data.projects
				.map(
					(project) =>
						`<a
							href=${project.url}
							target="_blank"
							rel="noreferrer"
							class="font-fira">${project.title}</a
						>`
				)
				.join('<hr class="my-1.5" />');

			const svgIcon = L.divIcon({
				html: `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48">
					<path
						d="m1 16 15 30 15-30a8 8 0 0 0-30 0Z"
						stroke-width="2"
						stroke="#06F"
						fill="#06F"
						fill-opacity=".4"
					/>
					<circle cx="16" cy="16" r="10" fill="#FFF" stroke="#06F" />
					<text
						text-anchor="middle"
						x="16"
						y="20"
						fill="rgba(0, 0, 0,1)">${data.projects.length}</text
					>
				</svg>
				`,
				className: 'font-fira text-[13px]',
				iconSize: [32, 48],
				iconAnchor: [16, 48]
			});

			L.marker([data.lat, data.lng], { icon: svgIcon }).addTo(map).bindPopup(joined, {
				maxHeight: 250,
				maxWidth: 250
			});
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div class="mx-auto max-w-6xl px-4">
	<div bind:this={mapElement} class="h-[34rem] rounded-md font-normal" />
</div>

<style>
	@import 'leaflet/dist/leaflet.css';
</style>
