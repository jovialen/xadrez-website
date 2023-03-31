<script>
	import Button from './button.svelte';
	import Icon from '../icon.svelte';

	export let icon = '';
	export let origin = 'fa-solid';

	export let bg_color = "bg-blue-700 hover:bg-blue-800";
	export let text_color = "text-white";
	export let border = "";
</script>

<Button on:click {bg_color} {text_color} {border}>
	<div class="flex gap-2 {text_color}">
		<div class="place-self-center">
			<Icon {origin} {icon} color="text-inherit" size="text-base" />
		</div>
		<slot />
	</div>
</Button>
