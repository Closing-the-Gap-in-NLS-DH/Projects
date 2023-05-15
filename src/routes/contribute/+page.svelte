<script lang="ts">
	let entityType: 'Project' | 'Organization' = 'Project';
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
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">Entity type</span>
				<select
					bind:value={entityType}
					class="w-full rounded border border-[#2e4a61] bg-gray-100"
				>
					<option>Project</option>
					<option>Organization</option>
				</select>
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{entityType} title</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{entityType} acronym</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal">{entityType} website URL(s)</span>
				<span class="block text-base"
					><em>Enter as many as you like, one per line</em></span
				>
				<textarea rows="3" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-1.5 block">
				<span class="-mb-0.5 block font-normal">{entityType} description</span>
				<span class="block text-base"
					><em>Please keep it brief (max. 750 char.)</em></span
				>
				<textarea rows="3" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-1.5 block">
				<span class="block font-normal">{entityType} location – name</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{entityType} location – GeoNames URL</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal"
					>{entityType} <em>output</em> language(s)</span
				>
				<span class="block text-base"
					><em
						>Enter <a
							class="font-normal hover:underline"
							href="https://iso639-3.sil.org/code_tables/639/data"
							target="_blank"
							rel="noreferrer">ISO 639-3 codes</a
						>, one per line</em
					></span
				>
				<textarea rows="3" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-1.5 block">
				<span class="block font-normal">{entityType} contact – name</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="block font-normal">{entityType} contact – website URL</span>
				<input type="text" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-3 block">
				<span class="-mb-0.5 block font-normal"
					>{entityType} <em>source</em> language(s)</span
				>
				<span class="block text-base"
					><em
						>Enter <a
							class="font-normal hover:underline"
							href="https://iso639-3.sil.org/code_tables/639/data"
							target="_blank"
							rel="noreferrer">ISO 639-3 codes</a
						>, one per line</em
					></span
				>
				<textarea rows="3" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>

			<label class="mt-1.5 block">
				<span class="-mb-0.5 block font-normal">{entityType} keywords</span>
				<span class="block text-base"
					><em
						>Choose from <a
							class="font-normal hover:underline"
							href="https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/KEYWORDS/KEYWORDS.json"
							target="_blank"
							rel="noreferrer">this list</a
						>, one per line</em
					></span
				>
				<textarea rows="3" class="w-full rounded border border-[#2e4a61] bg-gray-100" />
			</label>
		</div>
	</div>
</div>
