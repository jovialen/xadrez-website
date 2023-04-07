<script>
	import { writable } from 'svelte/store';

	import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessGameTab from '../../components/chessboard/chess-game-tab.svelte';
	import ChessSettingsTab from '../../components/chessboard/chess-settings-tab.svelte';
	import { title, positionStore } from '../../stores.js';

	title.page('Play');

	let position = positionStore();
	let orientation = writable("white");
	let message = writable("");
	let tabs = [
		{
			label: 'Game',
			content: ChessGameTab,
			props: { message, position, orientation },
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

		message.set(from + to);
	}

	function handleChange() {
		if ($orientation[0] !== position.side_to_move()) {
			message.set("Thinking of a move now");
		}
	}

	$: {
		console.log($position);
	}
</script>

{#key $orientation}
	<ChessboardSection position={position} orientation={$orientation} {movable} {onDrop} {tabs} on:change={handleChange} />
{/key}
