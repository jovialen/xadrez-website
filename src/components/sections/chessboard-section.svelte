<script>
	import { writable } from 'svelte/store';

	import Chessboard from '../chessboard/chessboard.svelte';
	import TabView from '../tabs/tab-view.svelte';
	import { startpos } from '../xadrez/xadrez.js';

	export let position = writable(startpos());
	export let orientation = 'white';
	export let movable = (piece, orientation) => {
		return true;
	};
	export let onDrop = (from, to) => {};
	export let sparePieces = false;
	export let dropOffBoard = 'snapback';
	export let tabs = [];
</script>

<section class="container mx-auto p-4 md:p-2">
	<div class="flex flex-wrap md:flex-nowrap gap-4 justify-center">
		<div class="w-full md:w-auto md:min-w-[50%] max-h-[80vh]">
			<div class="h-full aspect-square mx-auto">
				<Chessboard
					{position}
					{orientation}
					{movable}
					{onDrop}
					{dropOffBoard}
					{sparePieces}
					draggable={true}
					on:snapend
					on:change
				/>
			</div>
		</div>
		<div class="w-full md:w-auto md:grow md:max-w-lg">
			<TabView {tabs} />
		</div>
	</div>
</section>
