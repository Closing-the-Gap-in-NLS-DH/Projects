<script lang="ts">
	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';

	let entityType: 'project' | 'organization' = 'project';
	$: typeUpper = entityType[0].toUpperCase() + entityType.slice(1);
	let creator = '';
	let title = '';
	let acronym = '';
	let websites = '';
	let desc = '';
	let locName = '';
	let locUrl = '';
	let locLat = '';
	let locLng = '';
	let outputLangs = '';
	let contactName = '';
	let contactWebsite = '';
	let sourceLangs = '';
	let keywords = '';

	let template: Record<string, unknown>;

	function handleForm() {
		if (
			!creator ||
			!title ||
			!websites ||
			!desc ||
			!locName ||
			!locUrl ||
			!locLat ||
			!locLng ||
			!outputLangs ||
			!contactName ||
			!contactWebsite ||
			!sourceLangs ||
			!keywords
		) {
			console.log('missing fields');
			return;
		}

		generateRecord();
	}

	function generateRecord() {
		if (!template) {
			return;
		}

		const meta = template.record_metadata as Record<string, string>;
		meta.uuid = uuidv4();
		const today = new Date().toISOString().split('T')[0];
		meta.record_created_on = today;
		meta.record_created_by = creator.trim();
		meta.last_edited_on = today;

		const project = template.project as Record<string, unknown>;
		project.type = entityType;
		project.title = title.trim();
		if (acronym.trim()) {
			project.abbr = acronym.trim();
		}
		project.websites = websites.split('\n').reduce((acc, elem) => {
			if (elem.trim()) {
				acc.push(elem.trim());
			}
			return acc;
		}, [] as string[]);
		project.project_desc = desc.trim();

		const places = project.places as Record<string, unknown>[];
		places[0] = {
			place_name: {
				text: locName.trim(),
				ref: [locUrl.trim()]
			},
			coordinates: {
				lat: locLat.trim(),
				lng: locLng.trim()
			}
		};

		project.lang = outputLangs.split('\n').reduce((acc, elem) => {
			if (elem.trim()) {
				acc.push(elem.trim());
			}
			return acc;
		}, [] as string[]);

		const contacts = project.contacts as Record<string, unknown>[];
		contacts[0] = {
			pers_name: { text: contactName, ref: [] },
			role: 0,
			websites: [contactWebsite]
		};

		const researchData = project.research_data as Record<string, unknown>;
		researchData.lang = sourceLangs.split('\n').reduce((acc, elem) => {
			if (elem.trim()) {
				acc.push(elem.trim());
			}
			return acc;
		}, [] as string[]);

		project.keywords = keywords.split('\n').reduce((acc, elem) => {
			if (elem.trim()) {
				acc.push(elem.trim());
			}
			return acc;
		}, [] as string[]);

		console.log(template);
	}

	onMount(async () => {
		const res = await fetch(
			'https://raw.githubusercontent.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/master/TEMPLATES/project.json'
		);
		template = await res.json();
	});
</script>

<svelte:head>
	<title>Closing the Gap in Non-Latin-Script Data – Contribute</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4">
	<div class="space-y-4 rounded-lg bg-[#b8b08d] p-4 text-lg">
		<h2 class="text-center text-2xl">Contribute</h2>

		<p>
			This form is still under development, so bugs are likely to occur. If anything
			doesn’t work as expected, please open an issue on
			<a
				class="font-medium hover:underline"
				href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/issues"
				target="_blank"
				rel="noreferrer">GitHub</a
			>. Please make sure to provide as much information as possible for better
			reproducibility. We will continue to iterate on this form to include additional
			features, such as validation on entry, automatically acquired coordinates, and an
			option to load and edit existing JSON files.
		</p>

		<p><em>To be implemented…</em></p>

		<div>
			<label class="block">
				<span class="block font-normal">Record contributor name</span>
				<input
					bind:value={creator}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">Entity type</span>
				<select
					bind:value={entityType}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				>
					<option value="project">Project</option>
					<option value="organization">Organization</option>
				</select>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{typeUpper} title</span>
				<input
					bind:value={title}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{typeUpper} acronym</span>
				<input
					bind:value={acronym}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal">{typeUpper} website URL(s)</span>
				<span class="block text-base"><em>Enter one per line</em></span>
				<textarea
					bind:value={websites}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-1.5 block">
				<span class="-mb-0.5 block font-normal">{typeUpper} description</span>
				<span class="block text-base"
					><em>Please keep it brief (max. 750 char.)</em></span
				>
				<textarea
					bind:value={desc}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-1.5 block">
				<span class="block font-normal">{typeUpper} location – name</span>
				<input
					bind:value={locName}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal"
					>{typeUpper} location –
					<a
						href="https://www.geonames.org/"
						target="_blank"
						rel="noreferrer"
						class="font-medium hover:underline">GeoNames</a
					> URL</span
				>
				<input
					bind:value={locUrl}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{typeUpper} location – latitude</span>
				<input
					bind:value={locLat}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{typeUpper} location – longitude</span>
				<input
					bind:value={locLng}
					type="text"
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal"
					>{typeUpper} <em>output</em> language(s)</span
				>
				<span class="block text-base"
					><em
						>Enter <a
							class="font-normal hover:underline"
							href="https://iso639-3.sil.org/code_tables/639/data"
							target="_blank"
							rel="noreferrer">ISO 639-3 codes</a
						>&#8202;, one per line</em
					></span
				>
				<textarea
					bind:value={outputLangs}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-1.5 block">
				<span class="block font-normal">{typeUpper} contact – name</span>
				<input
					type="text"
					bind:value={contactName}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{typeUpper} contact – website URL</span>
				<input
					type="text"
					bind:value={contactWebsite}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal"
					>{typeUpper} <em>source</em> language(s)</span
				>
				<span class="block text-base"
					><em
						>Enter <a
							class="font-normal hover:underline"
							href="https://iso639-3.sil.org/code_tables/639/data"
							target="_blank"
							rel="noreferrer">ISO 639-3 codes</a
						>&#8202;, one per line</em
					></span
				>
				<textarea
					bind:value={sourceLangs}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<label class="mt-1.5 block">
				<span class="-mb-0.5 block font-normal">{typeUpper} keywords</span>
				<span class="block text-base"
					><em
						>Choose from <a
							class="font-normal hover:underline"
							href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/KEYWORDS/KEYWORDS.json"
							target="_blank"
							rel="noreferrer">this list</a
						>&#8202;&#8202;; enter one per line</em
					></span
				>
				<textarea
					bind:value={keywords}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				/>
			</label>

			<button
				class="mt-4 rounded bg-[#2e4a61] px-3 py-1.5 font-normal text-gray-100"
				on:click={handleForm}>Download</button
			>
		</div>
	</div>
</div>
