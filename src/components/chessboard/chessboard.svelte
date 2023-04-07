<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	import { Chessboard, objToFen } from '@discape/chessboardjs';
	import { startpos } from '../xadrez/xadrez.js';
	import newUniqueId from 'locally-unique-id-generator';

	import './extra.css';
	import '../../../node_modules/@discape/chessboardjs/dist/build/chessboard.min.css';

	export let position = writable(startpos());
	export let draggable = false;
	export let orientation = "white";
	export let sparePieces = false;
	export let dropOffBoard = 'snapback';
	export let movable = (piece, orientation) => { return true };
	export let onDrop = (from, to) => {};

	const dispatch = createEventDispatcher();

	let board = undefined;
	let id = newUniqueId();

	function handleResize() {
		board.resize();
	}
	
	onMount(() => {
		board = Chessboard(id, {
			position: $position,
			draggable,
			sparePieces,
			orientation,
			onDragStart: (_, piece, __, orientation) => movable(piece, orientation),
			onDrop,
			dropOffBoard,
			onSnapEnd: () => {
				dispatch('snapend');
				board.position($position);
			},
			onChange: (oldpos, newpos) => {
				dispatch('change', {
					oldpos: objToFen(oldpos),
					newpos: objToFen(newpos)
				});
			}
		});
	});

	$: {
		if (board) {
			board.position($position);
		}
	}
</script>

<svelte:window on:resize={handleResize} />

<div {id} class={sparePieces ? 'h-4/5 aspect-square mx-auto' : 'h-full'} />
