<script>
	import { base } from '$app/paths';

	export let src = '/images/tiles.png';
</script>

<div
	id="hero"
	class="w-full flex flex-col justify-center h-80"
	style="background-image: url({base}{src})"
>
	<slot />
</div>

<style>
	#hero {
		background-size: 200px 200px;
		background-position: center;

		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
	}

	#hero:hover {
		background-size: 205px 205px;
	}
</style>
