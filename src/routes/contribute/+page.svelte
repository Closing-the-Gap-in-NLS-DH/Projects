<script lang="ts">
	import template from '../../data/TEMPLATES/project.json';

	// Form state
	let entityType: 'project' | 'organization' = 'project';
	$: typeUpper = entityType[0].toUpperCase() + entityType.slice(1);
	let creator = '';
	let title = '';
	let acronym = ''; // The only optional field
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

	$: validInput = !!(
		creator &&
		title &&
		websites &&
		desc &&
		locName &&
		locUrl &&
		locLat &&
		locLng &&
		outputLangs &&
		contactName &&
		contactWebsite &&
		sourceLangs &&
		keywords
	);

	async function getLatLng(url: string) {
		const matches = url.match(/\d+/);
		if (!matches) {
			return;
		}
		const geonamesId = matches[0];

		const apiPrefix = 'https://secure.geonames.org/getJSON?username=closing_the_gap&geonameId=';
		const res = await fetch(apiPrefix + geonamesId);
		const data = await res.json();

		locLat = data.lat;
		locLng = data.lng;
	}

	let debounce: number;

	function handleGeonames() {
		clearTimeout(debounce);
		debounce = setTimeout(() => {
			getLatLng(locUrl);
		}, 500);
	}

	function handleForm() {
		if (!template) {
			console.error('JSON template not loaded');
			return;
		}

		const [fileName, output] = generateRecord();

		const blob = new Blob([JSON.stringify(output, null, 2)], {
			type: 'application/json'
		});

		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	function generateRecord(): [string, Record<string, unknown>] {
		const generated: Record<string, unknown> = JSON.parse(JSON.stringify(template));

		const meta = generated.record_metadata as Record<string, string>;
		const uuid = crypto.randomUUID();
		meta.uuid = uuid;
		const today = new Date().toISOString().split('T')[0];
		meta.record_created_on = today;
		meta.record_created_by = creator.trim();
		meta.last_edited_on = today;

		const project = generated.project as Record<string, unknown>;
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
				lat: locLat,
				lng: locLng
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

		return [uuid, generated];
	}
</script>

<svelte:head>
	<title>Closing the Gap in Non-Latin-Script Data – Contribute</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4">
	<div class="space-y-4 rounded-lg bg-ctgtan p-4 pb-6 text-lg">
		<h2 class="text-center text-2xl">Contribute Data</h2>

		<p>
			This form is still under development, so bugs are likely to occur! If anything doesn’t work as
			expected, please
			<a
				href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/issues"
				target="_blank"
				rel="noreferrer"
				class="font-medium hover:underline">open an issue on GitHub</a
			>—and make sure to provide as much information as possible for better reproducibility. We will
			continue to iterate on this form to include additional features, such as validation on entry,
			automatically acquired coordinates, and an option to load and edit existing JSON files.
		</p>

		<p>
			<em>For the time being</em>, you can use the form to create a basic entry for our database of
			DH projects (and organizations) involving non-Latin-script languages.
			<em>All fields are required unless otherwise noted.</em> Once you have filled in this
			information, the “Download” button at the bottom will become active. You can then click it to
			download a JSON file that contains the relevant information and is compliant with our schema.
			Finally, in order to contribute the new record to our database, you can either
			<a
				href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/issues"
				target="_blank"
				rel="noreferrer"
				class="font-medium hover:underline">open an issue at our GitHub repository</a
			>
			and attach the JSON file, or send it to us
			<a href="mailto:ctg@geschkult.fu-berlin.de" class="font-medium hover:underline">via email</a>.
		</p>

		<p>
			If you are comfortable editing JSON directly, then you can add further information to the
			record before submitting it to us. This web form is—in its current state, at least—intended to
			provide an easy way of generating a schema-compliant JSON file with a <em>basic subset</em> of
			the information in which we are interested.
		</p>

		<hr class="border-ctgblue" />

		<div>
			<div class="flex flex-wrap justify-between gap-x-4 gap-y-3 sm:flex-nowrap">
				<label class="w-full">
					<span class="font-normal">Record contributor name</span>
					<input
						bind:value={creator}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>

				<label class="w-full">
					<span class="font-normal">Record type</span>
					<select bind:value={entityType} class="w-full rounded border border-ctgblue bg-gray-100">
						<option value="project">Project</option>
						<option value="organization">Organization</option>
					</select>
				</label>
			</div>

			<div class="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-3 sm:flex-nowrap">
				<label class="w-full">
					<span class="font-normal">{typeUpper} title</span>
					<input
						bind:value={title}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>

				<label class="w-full">
					<span class="font-normal">{typeUpper} acronym (<em>optional</em>)</span>
					<input
						bind:value={acronym}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>
			</div>

			<label class="mt-3 block">
				<span class="font-normal">{typeUpper} website URL(s)</span>
				<span class="-mt-1 block text-base"><em>Enter one per line</em></span>
				<textarea bind:value={websites} class="w-full rounded border border-ctgblue bg-gray-100" />
			</label>

			<label class="mt-1.5 block">
				<span class="font-normal">{typeUpper} description</span>
				<span class="-mt-1 block text-base"><em>Please keep it brief (max. 750 char.)</em></span>
				<textarea bind:value={desc} class="w-full rounded border border-ctgblue bg-gray-100" />
			</label>

			<div class="mt-1.5 flex flex-wrap justify-between gap-x-4 gap-y-3 sm:flex-nowrap">
				<label class="w-full">
					<span class="font-normal">{typeUpper} location – name</span>
					<input
						bind:value={locName}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>

				<label class="w-full">
					<span class="font-normal"
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
						class="w-full rounded border border-ctgblue bg-gray-100"
						on:input={() => handleGeonames()}
					/>
				</label>
			</div>

			<div class="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-3 sm:flex-nowrap">
				<label class="w-full">
					<span class="font-normal">{typeUpper} location – latitude</span>
					<input
						bind:value={locLat}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
						readonly
					/>
				</label>

				<label class="w-full">
					<span class="font-normal">{typeUpper} location – longitude</span>
					<input
						bind:value={locLng}
						type="text"
						class="w-full rounded border border-ctgblue bg-gray-100"
						readonly
					/>
				</label>
			</div>

			<label class="mt-3 block">
				<span class="font-normal">{typeUpper} <em>output</em> language(s)</span>
				<span class="-mt-1 block text-base"
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
					class="w-full rounded border border-ctgblue bg-gray-100"
				/>
			</label>

			<div class="mt-1.5 flex flex-wrap justify-between gap-x-4 gap-y-3 sm:flex-nowrap">
				<label class="w-full">
					<span class="font-normal">{typeUpper} contact – name</span>
					<input
						type="text"
						bind:value={contactName}
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>

				<label class="w-full">
					<span class="font-normal">{typeUpper} contact – website URL</span>
					<input
						type="text"
						bind:value={contactWebsite}
						class="w-full rounded border border-ctgblue bg-gray-100"
					/>
				</label>
			</div>

			<label class="mt-3 block">
				<span class="font-normal">{typeUpper} <em>source</em> language(s)</span>
				<span class="-mt-1 block text-base"
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
					class="w-full rounded border border-ctgblue bg-gray-100"
				/>
			</label>

			<label class="mt-1.5 block">
				<span class="font-normal">{typeUpper} keywords</span>
				<span class="-mt-1 block text-base"
					><em
						>Choose from <a
							class="font-normal hover:underline"
							href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/KEYWORDS/KEYWORDS.json"
							target="_blank"
							rel="noreferrer">this list</a
						>&#8202;&#8202;; enter one per line</em
					></span
				>
				<textarea bind:value={keywords} class="w-full rounded border border-ctgblue bg-gray-100" />
			</label>

			<hr class="mt-4 border-ctgblue" />

			<div class="mt-5 flex items-center gap-x-3">
				<button
					on:click={handleForm}
					disabled={!validInput}
					class="rounded bg-ctgblue px-3 py-1.5 font-normal text-gray-100"
					class:bg-red-900={!validInput}>Download</button
				>

				{#if !validInput}
					<span class="font-normal"><em>Form incomplete</em></span>
				{/if}
			</div>
		</div>
	</div>
</div>
