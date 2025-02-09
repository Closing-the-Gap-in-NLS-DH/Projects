<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>


<div class="mx-auto mb-4 max-w-[76rem] px-4 text-gray-50">
	<div class="flex items-center space-x-4">

		<!-- Logo -->
		<div class="h-24 w-24">
			<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 429.9 410.2">
				<!-- Generator: Adobe Illustrator 29.2.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 116)  -->
				<defs>
					<style>
						.st0 {
							fill: #2e485d;
						}
			
						.st0, .st1 {
							stroke: #fff;
							stroke-miterlimit: 10;
							stroke-width: 7px;
						}
			
						.st1 {
							fill: #f2955a;
						}
					</style>
				</defs>
				<polygon class="st1" points="146.1 5.9 195.7 4.8 211.8 52.7 187.4 129.2 122 82.8 106.6 35.6 146.1 5.9"/>
				<polygon class="st1" points="226.6 4.6 276.6 3.5 317.3 32.1 301.9 80.7 237.3 128.5 211.8 52.7 226.6 4.6"/>
				<polygon class="st1" points="303 140.1 326.9 63.3 368 32.7 409 61.6 425.4 109.9 384.4 139.5 303 140.1"/>
				<polygon class="st1" points="147.3 158.8 122 82.8 81.9 54.1 42.2 83.9 27.8 130.3 67.2 159 147.3 158.8"/>
				<polygon class="st1" points="132.6 206.4 67.9 254.4 19.4 254.8 3.7 207.6 18.4 160.4 67.2 159 132.6 206.4"/>
				<polygon class="st1" points="294.3 204.7 359.4 156.9 410.2 156.4 426.2 203.7 411 251.7 360.7 253.2 294.3 204.7"/>
				<polygon class="st1" points="148.1 253.7 67.9 254.4 29.1 283.2 44.5 330.4 84 359.1 122.8 330.7 148.1 253.7"/>
				<polygon class="st1" points="278.7 252.5 360.7 253.2 401.6 281.1 386.3 329.2 346.1 358.5 304.7 329.5 278.7 252.5"/>
				<polygon class="st1" points="187.3 283.3 122.8 330.7 109.4 377.4 149.7 406.6 198.4 406.2 212.7 357.9 187.3 283.3"/>
				<polygon class="st1" points="229.9 405.9 212.7 357.9 238.4 281.5 304.7 329.5 320.4 377.3 280.3 406.6 229.9 405.9"/>
				<polygon class="st0" points="147.3 158.8 178.1 158.6 187.4 129.2 212.5 147.1 237.3 128.5 247.2 157.8 278 157.5 268.2 186.4 294.3 204.7 269.2 223.1 278.7 252.5 247.1 252.8 238.4 281.5 213.8 263.8 187.3 283.3 179.1 253.3 148.1 253.7 157.7 223.7 132.6 206.4 157.3 188 147.3 158.8"/>
			</svg>
		</div>

		<!-- Heading -->
		<div>
			<h1 class="mb-2.5 text-5xl">
				<a href="/Closing-The-Gap-In-Non-Latin-Script-Data/">Closing the Gap</a>
			</h1>
			<h2 class="text-2xl">in Non-Latin-Script Data</h2>
		</div>
	</div>
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
			href="{base}/visualizations/"
			class="underline-offset-2 hover:underline"
			class:underline={$page.route.id === '/visualizations'}>Visualizations</a
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
