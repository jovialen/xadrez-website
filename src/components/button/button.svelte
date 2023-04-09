<script>
	export let bg_color = 'bg-blue-700 hover:bg-blue-800';
	export let text_color = 'text-white';
	export let border = '';
</script>

<button
	class="{bg_color} {text_color} {border} flex focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
	on:click
>
	<slot />
</button>
