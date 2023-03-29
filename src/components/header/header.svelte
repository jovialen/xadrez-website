<script>
	import Navbar from './navbar.svelte';
	import Icon from '../icon.svelte';
	import PrimaryIconButton from '../button/primary-icon.svelte';
</script>

<header class='container mx-auto bg-white flex flex-wrap justify-between px-2 sm:px-4 py-2.5'>
	<div class='place-self-center'>
		<a href='/' class='flex'>
			<Icon icon='fa-chess-knight' size='text-3xl sm:text-4xl' color='text-blue-700' />
			<h1 class='ml-2 text-xl font-semibold'>Xadrez</h1>
		</a>
	</div>
	<div class='place-self-center md:order-2'>
		<a href='https://github.com/jovialen/xadrez' target='_blank'>
			<PrimaryIconButton origin='fa-brands' icon='fa-github-alt'>
				On GitHub
			</PrimaryIconButton>
		</a>
	</div>
	<div class='place-self-center w-full md:w-auto md:order-1'>
		<Navbar />
	</div>
</header>
