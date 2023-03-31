<script>
	export let active = false;
	export let label = '';
</script>

<li on:click class:active class="tab">
	{label}
</li>

<style>
	.tab {
		@apply px-4 py-2 rounded-t-lg mb-[-1px] cursor-pointer border border-white border-b-gray-300;
	}

	.tab:hover {
		@apply border-gray-300;
	}

	.active {
		@apply border-gray-300 border-b-white;
	}

	.active:hover {
		@apply border-b-white;
	}
</style>
