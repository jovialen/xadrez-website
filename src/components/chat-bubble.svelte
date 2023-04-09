<script>
	import Icon from './icon.svelte';

	export let user_icon = 'fa-user';
	export let message = '';
</script>

<div class="flex gap-2 w-full">
	<div
		class="mt-auto aspect-square h-8 bg-blue-600 p-1 rounded-lg flex justify-center items-center"
	>
		<Icon icon={user_icon} size="text-xl" color="text-white" />
	</div>
	<div class="max-w-full p-1 px-4 border border-gray-300 rounded-lg rounded-bl-none">
		<span>{message}</span>
	</div>
</div>
