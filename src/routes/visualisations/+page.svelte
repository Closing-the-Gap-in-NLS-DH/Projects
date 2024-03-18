<script lang="ts">
	import { onMount } from 'svelte';

	import { default as vegaEmbed } from 'vega-embed';
	import type { VisualizationSpec } from 'vega-embed';

	import { createData } from './datamanagement';

	const {projects, siblingDependencies, parentChildDependencies, cooperationDependencies} = createData()
	//import projects from './projects.json';
	//import parent_child_dependencies from './parent_child_dependencies.json';
	//import sibling_dependencies from './sibling_dependencies.json';
	//import cooperation_dependencies from './cooperation_dependencies.json';

	const spec: VisualizationSpec = {
		$schema: 'https://vega.github.io/schema/vega/v5.json',
		description:
			'A network diagram of software dependencies, with edges grouped via hierarchical edge bundling.',
		width: 1000,
		height: 1000,
		autosize: 'none',

		signals: [
			{ name: 'tension', value: 0.85 },
			{ name: 'radius', value: 280 },
			{ name: 'extent', value: 360 },
			{ name: 'rotate', value: 0 },
			{ name: 'textSize', value: 8 },
			{ name: 'textOffset', value: 8 },
			{ name: 'layout', value: 'cluster' },
			{ name: 'colorSib', value: 'firebrick' },
			{ name: 'colorPar', value: 'forestgreen' },
			{ name: 'colorChil', value: 'orange' },
			{ name: 'colorCoop', value: 'darkorchid' },
			{ name: 'originX', update: 'width / 2' },
			{ name: 'originY', update: 'height / 2' },
			{
				name: 'active',
				value: null,
				on: [
					{ events: 'text:mouseover', update: 'datum.id' },
					{ events: 'mouseover[!event.item]', update: 'null' }
				]
			},
			{ name: 'innerRadius', value: 281 },
			{ name: 'outerRadius', value: 287 }
		],

		data: [
			{
				name: 'tree',
				values: projects,
				transform: [
					{
						type: 'stratify',
						key: 'id',
						parentKey: 'parent'
					},
					{
						type: 'tree',
						method: { signal: 'layout' },
						size: [1, 1],
						as: ['alpha', 'beta', 'depth', 'children']
					},
					{
						type: 'formula',
						expr: '(rotate + extent * datum.alpha + 270) % 360',
						as: 'angle'
					},
					{
						type: 'formula',
						expr: 'inrange(datum.angle, [90, 270])',
						as: 'leftside'
					},
					{
						type: 'formula',
						expr: 'originX + radius * datum.beta * cos(PI * datum.angle / 180)',
						as: 'x'
					},
					{
						type: 'formula',
						expr: 'originY + radius * datum.beta * sin(PI * datum.angle / 180)',
						as: 'y'
					},
					{
						type: 'formula',
						expr: '2*PI*datum.alpha',
						as: 'rangle'
					}
				]
			},
			{
				name: 'leaves',
				source: 'tree',
				transform: [
					{
						type: 'filter',
						expr: '!datum.children'
					}
				]
			},
			{
				name: 'sib_dependencies',
				values: siblingDependencies,
				transform: [
					{
						type: 'formula',
						expr: "treePath('tree', datum.source, datum.target)",
						as: 'treepath',
						initonly: true
					}
				]
			},
			{
				name: 'sib_selected',
				source: 'sib_dependencies',
				transform: [
					{
						type: 'filter',
						expr: 'datum.source === active || datum.target === active'
					}
				]
			},
			{
				name: 'par_dependencies',
				values: parentChildDependencies,
				transform: [
					{
						type: 'formula',
						expr: "treePath('tree', datum.source, datum.target)",
						as: 'treepath',
						initonly: true
					}
				]
			},
			{
				name: 'par_selected',
				source: 'par_dependencies',
				transform: [
					{
						type: 'filter',
						expr: 'datum.source === active || datum.target === active'
					}
				]
			},
			{
				name: 'coop_dependencies',
				values: cooperationDependencies,
				transform: [
					{
						type: 'formula',
						expr: "treePath('tree', datum.source, datum.target)",
						as: 'treepath',
						initonly: true
					}
				]
			},
			{
				name: 'coop_selected',
				source: 'coop_dependencies',
				transform: [
					{
						type: 'filter',
						expr: 'datum.source === active || datum.target === active'
					}
				]
			}
		],

		marks: [
			{
				type: 'arc',
				from: { data: 'leaves' },
				encode: {
					enter: {
						fill: { scale: 'cat_color', field: 'parentname' },
						fillOpacity: { value: 0.6 },
						padAngle: { value: 0 },
						x: { signal: 'originX' },
						y: { signal: 'originY' },
						href: { field: 'parenturl' }
					},
					update: {
						startAngle: { signal: 'datum.rangle-0.075' },
						endAngle: { signal: 'datum.rangle+0.075' },
						innerRadius: { signal: 'innerRadius' },
						outerRadius: { signal: 'outerRadius' },
						cornerRadius: { value: 0 },
						tooltip: { field: 'parentname' }
					},
					hover: { cursor: { value: 'pointer' } }
				}
			},
			{
				type: 'text',
				from: { data: 'leaves' },
				encode: {
					enter: {
						text: { field: 'name' },
						baseline: { value: 'middle' },
						href:{ field: 'url' }
					},
					update: {
						x: { field: 'x' },
						y: { field: 'y' },
						dx: { signal: 'textOffset * (datum.leftside ? -1 : 1)' },
						angle: { signal: 'datum.leftside ? datum.angle - 180 : datum.angle' },
						align: { signal: "datum.leftside ? 'right' : 'left'" },
						fontSize: { signal: 'textSize' },
						fontWeight: [
							{ test: "indata('sib_selected', 'source', datum.id)", value: 'bold' },
							{ test: "indata('sib_selected', 'target', datum.id)", value: 'bold' },
							{ test: "indata('par_selected', 'source', datum.id)", value: 'bold' },
							{ test: "indata('par_selected', 'target', datum.id)", value: 'bold' },
							{ test: "indata('coop_selected', 'source', datum.id)", value: 'bold' },
							{ test: "indata('coop_selected', 'target', datum.id)", value: 'bold' },
							{ value: null }
						],
						fill: [
							{ test: 'datum.id === active', value: 'black' },
							{ test: "indata('sib_selected', 'source', datum.id)", signal: 'colorSib' },
							{ test: "indata('sib_selected', 'target', datum.id)", signal: 'colorSib' },
							{ test: "indata('par_selected', 'source', datum.id)", signal: 'colorPar' },
							{ test: "indata('par_selected', 'target', datum.id)", signal: 'colorChil' },
							{ test: "indata('coop_selected', 'source', datum.id)", signal: 'colorCoop' },
							{ test: "indata('coop_selected', 'target', datum.id)", signal: 'colorCoop' },
							{ value: 'black' }
						]
					},
					hover: { cursor: { value: 'pointer' } }
				}
			},
			{
				type: 'group',
				from: {
					facet: {
						name: 'path',
						data: 'sib_dependencies',
						field: 'treepath'
					}
				},
				marks: [
					{
						type: 'line',
						interactive: false,
						from: { data: 'path' },
						encode: {
							enter: {
								interpolate: { value: 'bundle' },
								strokeWidth: { value: 1.5 }
							},
							update: {
								stroke: [
									{ test: 'parent.source === active', signal: 'colorSib' },
									{ test: 'parent.target === active', signal: 'colorSib' },
									{ value: 'steelblue' }
								],
								strokeOpacity: [
									{ test: 'parent.source === active || parent.target === active', value: 1 },
									{ value: 0.2 }
								],
								tension: { signal: 'tension' },
								x: { field: 'x' },
								y: { field: 'y' }
							}
						}
					}
				]
			},
			{
				type: 'group',
				from: {
					facet: {
						name: 'path',
						data: 'par_dependencies',
						field: 'treepath'
					}
				},
				marks: [
					{
						type: 'line',
						interactive: false,
						from: { data: 'path' },
						encode: {
							enter: {
								interpolate: { value: 'bundle' },
								strokeWidth: { value: 1.5 }
							},
							update: {
								stroke: [
									{ test: 'parent.source === active', signal: 'colorChil' },
									{ test: 'parent.target === active', signal: 'colorPar' },
									{ value: 'steelblue' }
								],
								strokeOpacity: [
									{ test: 'parent.source === active || parent.target === active', value: 1 },
									{ value: 0.2 }
								],
								tension: { signal: 'tension' },
								x: { field: 'x' },
								y: { field: 'y' }
							}
						}
					}
				]
			},
			{
				type: 'group',
				from: {
					facet: {
						name: 'path',
						data: 'coop_dependencies',
						field: 'treepath'
					}
				},
				marks: [
					{
						type: 'line',
						interactive: false,
						from: { data: 'path' },
						encode: {
							enter: {
								interpolate: { value: 'bundle' },
								strokeWidth: { value: 1.5 }
							},
							update: {
								stroke: [
									{ test: 'parent.source === active', signal: 'colorCoop' },
									{ test: 'parent.target === active', signal: 'colorCoop' },
									{ value: 'steelblue' }
								],
								strokeOpacity: [
									{ test: 'parent.source === active || parent.target === active', value: 1 },
									{ value: 0.2 }
								],
								tension: { signal: 'tension' },
								x: { field: 'x' },
								y: { field: 'y' }
							}
						}
					}
				]
			}
		],

		scales: [
			{
				name: 'color',
				type: 'ordinal',
				domain: ['sibling', 'parent', 'child', 'cooperation'],
				range: [
					{ signal: 'colorSib' },
					{ signal: 'colorPar' },
					{ signal: 'colorChil' },
					{ signal: 'colorCoop' }
				]
			},
			{
				name: 'cat_color',
				type: 'ordinal',
				domain: { data: 'leaves', field: 'parentname' },
				range: { scheme: 'set1' }
			},
			{
				name: 'opacity',
				type: 'linear',
				range: [0.6, 0.6]
			}
		],

		legends: [
			{
				stroke: 'color',
				orient: 'bottom-left',
				title: 'Relations',
				titleFontSize: 16,
				labelFontSize: 14,
				symbolType: 'stroke',
				symbolStrokeWidth: 3
			},
			{
				stroke: 'cat_color',
				orient: 'bottom-right',
				title: 'Categories',
				titleFontSize: 16,
				labelFontSize: 14,
				symbolType: 'circle',
				fill: 'cat_color',
				columns: 2
			}
		]
	};

	onMount(() => {
		vegaEmbed('#vega', spec, {});
	});
</script>

<div class="flex justify-center px-4">
	<div id="vega" class="rounded-lg bg-gray-50 p-4"></div>
</div>
