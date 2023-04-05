<script>
	import Chessboard from '../chessboard/chessboard.svelte';
	import ChessSidebar from '../chessboard/chess-sidebar.svelte';

	export let analyze = false;
</script>

<section class='container mx-auto p-4 md:p-2'>
	<div class='flex flex-wrap md:flex-nowrap gap-4 justify-center'>
		<div class='w-full md:w-auto md:min-w-[50%] max-h-[80vh]'>
			<div class='h-full aspect-square mx-auto'>
				<Chessboard draggable={true} />
			</div>
		</div>
		<div class='w-full md:w-auto md:grow md:max-w-lg'>
			<ChessSidebar {analyze} />
		</div>
	</div>
</section>
