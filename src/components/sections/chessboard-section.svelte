<script>
	import Chessboard from '../chessboard/chessboard.svelte';
	import ChessSidebar from '../chessboard/chess-sidebar.svelte';

	export let analyze = false;
</script>

<section class='container mx-auto p-4 md:p-2'>
	<div class='flex flex-wrap md:flex-nowrap gap-4'>
		<div class='w-full md:w-auto md:min-w-[50%]'>
			<div class='w-full mx-auto'>
				<Chessboard position="start" draggable={true} />
			</div>
		</div>
		<div class='w-full md:w-auto md:grow md:max-w-lg'>
			<ChessSidebar {analyze} />
		</div>
	</div>
</section>
