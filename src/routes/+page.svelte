<script>
	import SecondaryIconButton from '../components/button/secondary-icon.svelte';
	import Hero from '../components/hero.svelte';
</script>

<section>
	<Hero>
		<div class="text-white text-center space-y-4">
			<h1 class="text-6xl">XADREZ</h1>
			<p>A slightly better chess player than its creator.</p>
		</div>
	</Hero>
</section>

<section class="my-2">
	<div class="container mx-auto flex justify-center gap-2 items-center">
		<a href="/play"><SecondaryIconButton icon="fa-chess">Challange me</SecondaryIconButton></a>
		or
		<a href="/analyze"><SecondaryIconButton icon="fa-brain">See how I think</SecondaryIconButton></a
		>
	</div>
</section>
