<script>
	import Icon from '../icon.svelte';
	import PrimaryIconButton from '../button/primary-icon.svelte';
</script>

<div class='w-full h-full flex flex-col gap-4'>
	<div class='min-h-fit w-full'>
		<div class='flex gap-2 w-full'>
			<div class='mt-auto aspect-square h-8 bg-blue-600 p-1 rounded-lg flex justify-center items-center'>
				<Icon icon='fa-laptop' size="text-xl" color="text-white" />
			</div>
			<div class='max-w-full p-1 px-4 border border-gray-300 rounded-lg rounded-bl-none'>
				<p>Are you ready for some chess? I know I am! Just make the first move!</p>
			</div>
		</div>
	</div>
	<div class='divider' />
	<div class='grow min-h-[10rem]'>
	</div>
	<div class='divider' />
	<div class='min-h-fit'>
		<div class='mx-auto w-fit'>
			<PrimaryIconButton icon='fa-chess'>Start a new Game</PrimaryIconButton>
		</div>
	</div>
</div>

<style>
	.divider {
		width: 100%;
		height: 1px;
		@apply bg-gray-300;
	}
</style>
