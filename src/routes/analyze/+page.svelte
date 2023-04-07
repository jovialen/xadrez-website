<script>
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	
  import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessAnalysisTab from '../../components/chessboard/chess-analysis-tab.svelte';
	import * as Xadrez from '../../components/xadrez/xadrez.js';
	import { title } from '../../stores.js';

	let position = writable(Xadrez.startpos());
	let tabs = [
		{
			label: 'Analyze',
			content: ChessAnalysisTab,
			props: {
				evaluation: tweened(Xadrez.evaluate($position), { duration: 200, easing: cubicOut }),
			}
		}
	];

	function onChange(e) {
		position.set(`${e.detail.newpos} w - - 0 1`);
		tabs[0].props.evaluation.set(Xadrez.evaluate($position));
	}

	title.page('Analyze');
</script>

<ChessboardSection {position} {tabs} dropOffBoard={"trash"} sparePieces={true} on:change={onChange} />
