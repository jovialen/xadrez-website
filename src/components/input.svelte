<script>
	import newUniqueId from "locally-unique-id-generator";
	
	export let value = "";
	export let placeholder = "";
	export let required = false;
	export let readonly = false;
	export let disabled = false;

	let id = newUniqueId();
</script>

<label for={id} class="block mb-2 text-sm font-medium text-gray-900">
	<slot />
</label>
<input id={id}
	type="text"
	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
	bind:value={value}
	{placeholder}
	{required}
	{readonly}
	{disabled}>
