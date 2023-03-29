<script>
	import NavItem from './nav-item.svelte';
</script>

<nav class='items-center justify-between md:flex'>
	<ul class='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
		<li><NavItem href='/'>Home</NavItem></li>
		<li><NavItem href='/play'>Play</NavItem></li>
		<li><NavItem href='/analyze'>Analyze</NavItem></li>
		<li><NavItem href='/notation'>Notation</NavItem></li>
	</ul>
</nav>
