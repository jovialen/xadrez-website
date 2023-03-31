<script>
	import Tab from './tab.svelte';

	let activeTab = 0;

	function selectTab(index) {
		return () => {
			activeTab = index;
		};
	}

	export let tabs = [];
</script>

<div class="h-full flex flex-col">
	<ul class="flex pl-0 mb-0 border-b border-gray-300">
		{#each tabs as tab, i}
			<Tab label={tab.label} active={activeTab === i} on:click={selectTab(i)} />
		{/each}
	</ul>
	<div class="rounded-b-lg border border-gray-300 border-t-0 p-4 grow">
		<svelte:component this={tabs[activeTab].content} />
	</div>
</div>
