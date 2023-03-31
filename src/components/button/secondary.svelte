<script>
	import Button from './button.svelte';
</script>

<Button
	on:click
	text_color="text-gray-900 hover:text-blue-700"
	bg_color="bg-white hover:bg-gray-100"
	border="border border-gray-200"
>
	<slot />
</Button>
