<script>
	import Chessboard from '../chessboard/chessboard.svelte';
	import ChessSidebar from '../chessboard/chess-sidebar.svelte';

	export let analyze = false;
</script>

<section class="container mx-auto p-4 md:p-2">
	<div class="flex flex-wrap gap-4">
		<div class="w-full md:w-3/5">
			<div class="aspect-square mx-auto max-h-[80vmin]">
				<Chessboard position="start" draggable={true} />
			</div>
		</div>
		<div class="w-full md:w-auto md:grow">
			<ChessSidebar {analyze} />
		</div>
	</div>
</section>
