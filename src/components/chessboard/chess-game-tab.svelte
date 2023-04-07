<script>
	import { slide } from 'svelte/transition';

	import ChatBubble from '../chat-bubble.svelte';
	import IconButton from '../button/icon-button.svelte';
	import PrimaryIconButton from '../button/primary-icon.svelte';
	import SecondaryIconButton from '../button/secondary-icon.svelte';

	export let position;
	export let orientation;
	export let message;

	function playAsBlack() {
		position.make_move("e2e4");
		orientation.set("black");
		message.set("e2e4")
	}

	function resign() {
		position.reset();
		message.set("Want to play again?");
		orientation.set("white");
	}

	function help() {
		if ($orientation[0] === position.side_to_move()) {
			message.set("Sure! I'll help!")
			
			position.search(3000).then(m => {
				position.make_move(m);
			
				message.set(`I think that ${m} is a good move for you!`);
			});
		}
	}
</script>

<div class='body w-full h-full flex flex-col gap-4'>
	{#if $message !== ""}
		<div class='min-h-fit w-full' transition:slide|local>
			<ChatBubble message={$message} user_icon="fa-laptop" />
		</div>
		<div class='divider' transition:slide|local />
	{/if}
	<div class='grow min-h-[10rem]'>
	</div>
	<div class='divider' />
	<div class='min-h-fit'>
		<div class='mx-auto w-fit flex gap-2'>
			{#key $position}
				{#if position.is_startpos()}
					<IconButton
						on:click={playAsBlack}
						icon='fa-chess'
						bg_color="bg-gray-900 hover:bg-black"
						text_color="text-white">
						Play as Black
					</IconButton>
				{/if}
				<SecondaryIconButton icon='fa-lightbulb' on:click={help}>Help me</SecondaryIconButton>
				{#if !position.is_startpos()}
					{#if position.game_state() === "Playing"}
						<SecondaryIconButton icon='fa-flag' on:click={resign}>
							Resign
						</SecondaryIconButton>
					{:else}
						<PrimaryIconButton icon='fa-chess-board' on:click={resign}>
							New Game
						</PrimaryIconButton>
					{/if}
				{/if}
			{/key}
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
