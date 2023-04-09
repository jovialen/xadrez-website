<script>
	import { writable } from 'svelte/store';

	import Slider from '../slider.svelte';

	export let searchTime = writable(3000);
	export let searchDepth = writable(20);

	let searchTimeSlider = $searchTime;
	let searchDepthSlider = $searchDepth;

	$: {
		searchTime.set(searchTimeSlider);
		searchDepth.set(searchDepthSlider);
	}
</script>

<Slider min={1000} max={10000} bind:value={searchTimeSlider}>
	Max search time: <span>{($searchTime / 1000).toFixed(2)} seconds</span>
</Slider>

<Slider min={1} max={30} bind:value={searchDepthSlider}>
	Max search depth: <span>{$searchDepth} moves</span>
</Slider>
