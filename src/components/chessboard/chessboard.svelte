<script>
	import { onMount } from 'svelte';

	import { Chessboard } from '@discape/chessboardjs';
	import '../../../node_modules/@discape/chessboardjs/dist/build/chessboard.min.css';
	import { chess } from '../../stores.js';

	import newUniqueId from 'locally-unique-id-generator';

	import './extra.css';

	export let draggable = false;

	let board = undefined;
	let id = newUniqueId();

	onMount(() => {
		board = Chessboard(id, {
			$chess,
			draggable,
			onDragStart: (_, piece) => {
				if (chess.game_state() !== "Playing") {
					return false;
				}

				let side_to_move = chess.side_to_move();
				if ((side_to_move === 'w' && piece.search(/^b/) !== -1) ||
					  (side_to_move === 'b' && piece.search(/^w/) !== -1)) {
					return false;
				}
			},
			onDrop: (from, to) => {
				if (from === to) {
					return;
				}
			
				if (!chess.make_move(from, to)) {
					return 'snapback';
				}
			},
			onChange: (oldpos, newpos) => {
				let moves = chess.legal_moves();
				console.log(moves);
			}
		});
	});

	$: {
		if (board !== undefined) {
			console.log("Updating position")
			board.position($chess);
		}
	}
	
	function handleResize() {
		board.resize();
	}
</script>

<svelte:window on:resize={handleResize} />

<div {id} />
