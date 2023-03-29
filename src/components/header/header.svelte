<script>
	import Navbar from './navbar.svelte';
	import PrimaryButton from '../button/primary.svelte';
</script>

<header class='container mx-auto bg-white flex flex-wrap justify-between px-2 sm:px-4 py-2.5'>
	<div class='place-self-center'>
		<a href='/'>
			<h1 class='text-xl font-semibold'>Xadrez</h1>
		</a>
	</div>
	<div class='place-self-center'>
		<PrimaryButton>
			<a href='https://github.com/jovialen/xadrez' target='_blank'>
				On GitHub
			</a>
		</PrimaryButton>
	</div>
	<div class='place-self-center'>
		<Navbar />
	</div>
</header>
