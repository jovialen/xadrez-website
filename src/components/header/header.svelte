<script>
	import { slide } from 'svelte/transition';

	import Navbar from './navbar.svelte';
	import Icon from '../icon.svelte';
	import IntLink from '../internal-link.svelte';
	import PrimaryIconButton from '../button/primary-icon.svelte';
	import SecondaryIconButton from '../button/secondary-icon.svelte';
	import { clickOutside } from '../../click-outside.js';

	let show_navbar = false;
	let transitioning = false;

	function toggleNavbar() {
		if (!transitioning) {
			show_navbar = !show_navbar;
		}
	}

	function hideNavbar() {
		show_navbar = false;
	}

	function handleClickOutside() {
		if (!transitioning) {
			hideNavbar();
		}
	}
</script>

<header
	class="container mx-auto bg-white flex flex-wrap justify-between px-2 sm:px-4 py-2.5 relative"
>
	<div class="place-self-center">
		<IntLink href="/" class="flex">
			<Icon icon="fa-chess-knight" size="text-3xl sm:text-4xl" color="text-blue-700" />
			<h1 class="ml-2 text-xl font-semibold">Xadrez</h1>
		</IntLink>
	</div>
	<div class="place-self-center flex md:order-2">
		<a href="https://github.com/jovialen/xadrez" target="_blank">
			<PrimaryIconButton origin="fa-brands" icon="fa-github-alt">On GitHub</PrimaryIconButton>
		</a>
		<div class="md:hidden ml-2">
			<SecondaryIconButton icon="fa-bars-staggered" on:click={toggleNavbar} />
		</div>
	</div>
	{#key show_navbar}
		<div
			class="place-self-center w-full md:w-auto md:order-1 md:block"
			class:hidden={!show_navbar}
			transition:slide
			on:introstart={() => (transitioning = true)}
			on:outrostart={() => (transitioning = true)}
			on:introend={() => (transitioning = false)}
			on:outroend={() => (transitioning = false)}
			on:click={hideNavbar}
			use:clickOutside={handleClickOutside}
		>
			<Navbar />
		</div>
	{/key}
</header>
