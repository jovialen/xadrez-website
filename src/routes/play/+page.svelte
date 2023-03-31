<script>
	import Chessboard from '../../components/chessboard/chessboard.svelte';
	import Analyze from '../analyze/+page.svelte';
	import Notation from '../notation/+page.svelte';
	import TabView from '../../components/tabs/tab-view.svelte';
	import { title } from '../../stores.js';

	const tabs = [
		{
			label: 'Game',
			content: Analyze,
		},
		{
			label: 'Configure',
			content: Notation,
		},
		{
			label: 'Analyze',
			content: Analyze,
		}
	];

	title.page('Play');
</script>

<div class='container mx-auto p-4 md:p-2'>
	<div class='flex flex-wrap gap-4'>
		<div class='w-full md:w-3/5'>
			<div class='aspect-square mx-auto max-h-[80vmin]'>
				<Chessboard position="start" draggable={true} />
			</div>
		</div>
		<div class='w-full md:w-auto md:grow'>
			<TabView tabs={tabs} />
		</div>
	</div>
</div>
