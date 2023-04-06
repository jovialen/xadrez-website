<script>
	import { writable } from 'svelte/store';

	import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessGameTab from '../../components/chessboard/chess-game-tab.svelte';
	import ChessSettingsTab from '../../components/chessboard/chess-settings-tab.svelte';
	import { title, positionStore } from '../../stores.js';

	title.page('Play');

	let position = positionStore();
	let tabs = [
		{
			label: 'Game',
			content: ChessGameTab,
			props: { message: '' },
		},
		{
			label: 'Settings',
			content: ChessSettingsTab,
		}
	];

	function movable(piece, orientation) {
		if (position.game_state() !== 'Playing') {
			return false;
		}

		let turn = position.side_to_move();
		if ((turn === 'w' && piece.search(/^b/) !== -1) ||
		    (turn === 'b' && piece.search(/^w/) !== -1)) {
			return false;
		}
	}

	function onDrop(from, to) {
		if (from === to) {
			return;
		}

		if (!position.make_move(from, to)) {
			return 'snapback';
		}

		tabs[0].props.message = from + to;
	}

	$: {
		console.log($position);
	}
</script>

<ChessboardSection position={$position} {movable} {onDrop} {tabs} />
