<script>
	import { writable, get } from 'svelte/store';

	import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessGameTab from '../../components/chessboard/chess-game-tab.svelte';
	import ChessSettingsTab from '../../components/chessboard/chess-settings-tab.svelte';
	import { title, positionStore } from '../../stores.js';

	title.page('Play');

	let position = positionStore();
	let orientation = writable("white");
	let message = writable("");
	let searchTime = writable(3000);
	let searchDepth = writable(20);
	let tabs = [
		{
			label: 'Game',
			content: ChessGameTab,
			props: { message, position, orientation },
		},
		{
			label: 'Settings',
			content: ChessSettingsTab,
			props: { searchTime, searchDepth },
		}
	];

	function movable(piece, o) {
		if (position.game_state() !== 'Playing') {
			return false;
		}

		if (o !== get(orientation)) {
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
			if (position.game_state() !== "Playing") {
				message.set(position.game_state());
				return;
			}
		
			message.set("Thinking of a move now");
			position.search($searchTime, $searchDepth).then(m => {
				position.make_move(m);
				message.set(`I think ${m} is the best move here!`);
			})
		}
	}

	$: {
		console.log($position);
	}
</script>

{#key $orientation}
	<ChessboardSection position={position} orientation={$orientation} {movable} {onDrop} {tabs} on:change={handleChange} />
{/key}
