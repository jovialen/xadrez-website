<script>
	import newUniqueId from 'locally-unique-id-generator';

	let id = newUniqueId();
	
	export let min = 0;
	export let max = 10;
	export let value = 0;
	export let enabled = true;
</script>

<label for={id} class="block mb-2 text-sm font-medium text-gray-900">
	<slot />
</label>
<input
	id={id}
	type="range"
	{min} {max}
	bind:value={value}
	class="w-full h-2 bg-gray-200 rounded-lg appearance-none"
	class:cursor-pointer={enabled}
	disabled={!enabled}>

