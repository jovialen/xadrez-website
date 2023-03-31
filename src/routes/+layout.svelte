<script>
	import '../tailwind.css';

	import { title } from '../stores.js';
	import Header from '../components/header/header.svelte';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<Header />
<slot />

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
