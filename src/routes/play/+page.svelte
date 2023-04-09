<script>
	import { writable, get } from 'svelte/store';

	import ChessboardSection from '../../components/sections/chessboard-section.svelte';
	import ChessGameTab from '../../components/chessboard/chess-game-tab.svelte';
	import ChessSettingsTab from '../../components/chessboard/chess-settings-tab.svelte';
	import { persist, createLocalStorage } from "@macfja/svelte-persistent-store";
	import { title, positionStore } from '../../stores.js';

	title.page('Play');

	let position = persist(positionStore(), createLocalStorage(), "savegame_fen");
	let orientation = persist(writable("white"), createLocalStorage(), "savegame_orientation");
	let message = persist(writable(""), createLocalStorage(), "savegame_message");
	let searchTime = persist(writable(3000), createLocalStorage(), "savegame_searchTime");
	let searchDepth = persist(writable(20), createLocalStorage(), "savegame_searchDepth");
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
		
		if ($orientation[0] !== position.side_to_move()) {
			message.set("Thinking of a move now");
			position.search($searchTime, $searchDepth).then(m => {
				position.make_move(m);
				message.set(`I think ${m} is the best move here!`);
			})
		}
	}

	function handleChange() {
		if (position.game_state() !== "Playing") {
			
			if (position.game_state() === "Checkmate" && $orientation[0] !== position.side_to_move()) {
				message.set("Congratulations! You win, and I accept my loss. Can I get a rematch?");
			} else {
				message.set(position.game_state() + "!");
			}
			return;
		}
	}

	$: {
		console.log($position);
	}
</script>

{#key $orientation}
	<ChessboardSection position={position} orientation={$orientation} {movable} {onDrop} {tabs} on:change={handleChange} />
{/key}
