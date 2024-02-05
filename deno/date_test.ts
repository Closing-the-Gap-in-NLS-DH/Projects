import { assertLess } from 'https://deno.land/std@0.214.0/assert/mod.ts';

Deno.test('data freshness', async () => {
	const generated = await Deno.readTextFile('./src/data/generated.txt');
	const generatedDate = new Date(generated).getTime();
	const now = new Date().getTime();
	const diff = now - generatedDate;
	assertLess(diff, 1000 * 60 * 60 * 24 * 7); // 7 days
});
