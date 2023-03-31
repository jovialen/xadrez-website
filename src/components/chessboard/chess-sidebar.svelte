<script>
	import TabView from '../tabs/tab-view.svelte';
	import Notation from '../../routes/notation/+page.svelte';

	export let analyze = false;

	const all_tabs = [
		{
			label: 'Settings',
			content: Notation
		},
		{
			label: 'Analyze',
			content: Notation
		}
	];

	let tabs = [];
	tabs.push({
		label: 'Game',
		content: Notation
	});
	tabs.push({
		label: 'Settings',
		content: Notation
	});

	if (analyze) {
		tabs.push({
			label: 'Analyze',
			content: Notation
		});
	}
</script>

<TabView {tabs} />
