<script>
	import Navbar from './navbar.svelte';
	import Icon from '../icon.svelte';
	import PrimaryButton from '../button/primary.svelte';
</script>

<header class='container mx-auto bg-white flex flex-wrap justify-between px-2 sm:px-4 py-2.5'>
	<div class='place-self-center'>
		<a href='/' class='flex'>
			<Icon icon='fa-chess-knight' size='text-3xl sm:text-4xl' />
			<h1 class='ml-2 text-xl font-semibold'>Xadrez</h1>
		</a>
	</div>
	<div class='place-self-center md:order-2'>
		<PrimaryButton>
			<a href='https://github.com/jovialen/xadrez' target='_blank'>
				<Icon origin='fa-brands' icon='fa-github-alt' />
				On GitHub
			</a>
		</PrimaryButton>
	</div>
	<div class='place-self-center w-full md:w-auto md:order-1'>
		<Navbar />
	</div>
</header>
