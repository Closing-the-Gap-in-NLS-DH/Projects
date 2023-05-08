<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mx-auto mb-4 max-w-[76rem] px-4 text-gray-50">
	<h1 class="mb-2.5 text-5xl"><a href="/">Closing the Gap</a></h1>
	<h2 class="text-2xl">in Non-Latin-Script Data</h2>
</div>

<div class="mb-4 bg-[#f29559] py-3">
	<div class="mx-auto flex max-w-[76rem] space-x-4 px-4 text-xl font-normal">
		<a
			href="/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/'}>Projects</a
		>
		<a
			href="/map"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/map'}>Map</a
		>
		<a
			href="/timeline"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/timeline'}>Timeline</a
		>
		<a
			href="/contribute"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/contribute'}>Contribute</a
		>
		<a
			href="/about"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/about'}>About</a
		>
	</div>
</div>
