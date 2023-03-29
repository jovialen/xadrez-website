<script>
	export let href = '/';
</script>

<a
	{href}
	class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
>
	<slot />
</a>
