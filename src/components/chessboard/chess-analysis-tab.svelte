<script>
  import { writable } from 'svelte/store';

  import Slider from '../slider.svelte';

  export let evaluation = writable(0);
</script>

<div>
  <Slider min={-20} max={20} value={$evaluation} enabled={false}>
    Evaluation
  	<span class:white-lead={$evaluation > 0} class:black-lead={$evaluation <= 0} class='px-2 rounded-lg'>
      {#if $evaluation > 0}
        +
      {:else}
        -
      {/if}
  	  {Math.abs($evaluation).toFixed(2)}
    </span>
  </Slider>
</div>

<style>
  .white-lead {
    @apply border border-gray-300;
  }

  .black-lead {
    @apply bg-gray-900 text-white;
  }
</style>
