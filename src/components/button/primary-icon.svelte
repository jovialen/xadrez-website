<script>
	import PrimaryButton from './primary.svelte';
	import Icon from '../icon.svelte';

	export let icon = '';
	export let origin = 'fa-solid';
</script>

<PrimaryButton on:click>
	<div class='place-self-center'>
		<Icon {origin} {icon} color='text-white' size='text-base mr-2' />
	</div>
	<slot />
</PrimaryButton>
