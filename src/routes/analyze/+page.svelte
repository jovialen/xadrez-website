<script>
  import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessAnalysisTab from '../../components/chessboard/chess-analysis-tab.svelte';
	import * as Xadrez from '../../components/xadrez/xadrez.js';
	import { title } from '../../stores.js';

	let position = Xadrez.startpos();
	const tabs = [
		{
			label: 'Analyze',
			content: ChessAnalysisTab,
		}
	];

	title.page('Analyze');
</script>

<ChessboardSection {position} {tabs} dropOffBoard={"trash"} sparePieces={true} on:change={(e) => position = e.detail.newpos} />
