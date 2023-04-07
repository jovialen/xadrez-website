<script>
	import '../tailwind.css';

	import { title } from '../stores.js';
	import Header from '../components/header/header.svelte';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<div class="flex flex-col min-h-full">
	<Header />
	<slot />
</div>

<style>
	:global(html, body) {
		height: 100vh;
	}
</style>
