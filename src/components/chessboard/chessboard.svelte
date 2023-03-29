<script>
	import { onMount } from 'svelte';

	import { Chessboard } from '@discape/chessboardjs';
	import '../../../node_modules/@discape/chessboardjs/dist/build/chessboard.min.css';

	import newUniqueId from 'locally-unique-id-generator';

	export let fen;

	let id = newUniqueId();
	let board;

	onMount(() => {
		board = Chessboard(id, {
			position: fen,
			draggable: false
		});
	});

	function handleResize() {
		board.resize();
	}
</script>

<svelte:window on:resize={handleResize} />

<div {id} />
