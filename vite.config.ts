import { sveltekit } from '@sveltejs/kit/vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		wasm(),
		topLevelAwait({
			promiseExportName: '__tla',
			promiseImportName: (i) => `__tla_${i}`
		})
	]
});
