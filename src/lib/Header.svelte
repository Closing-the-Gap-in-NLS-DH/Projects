<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<div class="mx-auto mb-4 max-w-[76rem] px-4 text-gray-50">
	<h1 class="mb-2.5 text-5xl">
		<a href="/Closing-The-Gap-In-Non-Latin-Script-Data/">Closing the Gap</a>
	</h1>
	<h2 class="text-2xl">in Non-Latin-Script Data</h2>
</div>

<div class="mb-4 bg-ctgorange py-3">
	<div class="mx-auto flex max-w-[76rem] flex-wrap gap-x-4 gap-y-2 px-4 text-xl font-normal">
		<a
			href="{base}/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/'}>Projects</a
		>
		<a
			href="{base}/map/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/map'}>Map</a
		>
		<a
			href="{base}/timeline/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/timeline'}>Timeline</a
		>
		<a
			href="{base}/visualisations/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/visualisations'}>Relations</a
		>
		<a
			href="{base}/contribute/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/contribute'}>Contribute</a
		>
		<a
			href="{base}/about/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/about'}>About</a
		>
	</div>
</div>
