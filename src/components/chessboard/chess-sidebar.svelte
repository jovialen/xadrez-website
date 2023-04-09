<script>
	import TabView from '../tabs/tab-view.svelte';
	import ChessGameTab from './chess-game-tab.svelte';
	import ChessSettingsTab from './chess-settings-tab.svelte';
	import ChessAnalysisTab from './chess-analysis-tab.svelte';

	export let analyze = false;

	let tabs = [];
	tabs.push({
		label: 'Game',
		content: ChessGameTab
	});
	tabs.push({
		label: 'Settings',
		content: ChessSettingsTab
	});

	if (analyze) {
		tabs.push({
			label: 'Analyze',
			content: ChessAnalysisTab
		});
	}
</script>

<TabView {tabs} />
