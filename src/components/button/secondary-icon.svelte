<script>
	import SecondaryButton from './secondary.svelte';
	import Icon from '../icon.svelte';

	export let icon = '';
	export let origin = 'fa-solid';
	export let color = 'text-inherit';
</script>

<SecondaryButton on:click>
	<div class="flex gap-2">
		<div class="place-self-center">
			<Icon {origin} {icon} {color} size="text-base" />
		</div>
		<slot />
	</div>
</SecondaryButton>
