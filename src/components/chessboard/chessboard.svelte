<script>
	import { onMount } from 'svelte';

	import { Chessboard } from '@discape/chessboardjs';
	import '../../../node_modules/@discape/chessboardjs/dist/build/chessboard.min.css';

	import newUniqueId from 'locally-unique-id-generator';

	import './extra.css';

	export let position = 'start';
	export let draggable = false;

	let board;
	let id = newUniqueId();

	onMount(() => {
		board = Chessboard(id, {
			position,
			draggable
		});
	});

	function handleResize() {
		board.resize();
	}
</script>

<svelte:window on:resize={handleResize} />

<div {id} />
