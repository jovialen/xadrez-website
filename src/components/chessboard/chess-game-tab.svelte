<script>
	import { slide } from 'svelte/transition';

	import ChatBubble from '../chat-bubble.svelte';
	import IconButton from '../button/icon-button.svelte';

	export let message = "";
</script>

<div class='body w-full h-full flex flex-col gap-4'>
	{#if message !== ""}
		<div class='min-h-fit w-full' transition:slide|local>
			<ChatBubble {message} user_icon="fa-laptop" />
		</div>
		<div class='divider' transition:slide|local />
	{/if}
	<div class='grow min-h-[10rem]'>
	</div>
	<div class='divider' />
	<div class='min-h-fit'>
		<div class='mx-auto w-fit flex gap-2'>
			<IconButton
				icon='fa-chess'
				bg_color="bg-white hover:bg-gray-100"
				text_color="text-gray-900 hover:text-blue-700"
				border="border border-gray-300">
				Play as White
			</IconButton>
			<IconButton
				icon='fa-chess'
				bg_color="bg-gray-900 hover:bg-black"
				text_color="text-white">
				Play as Black
			</IconButton>
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
