<script>
  import { writable } from 'svelte/store';

  export let evaluation = writable(0);
</script>

<div>
  <label for="evaluation" class="block mb-2 text-sm font-medium text-gray-900">
    Evaluation
    <span class:white-lead={$evaluation > 0} class:black-lead={$evaluation <= 0} class='px-2 rounded-lg'>
      {#if $evaluation > 0}
        +
      {:else}
        -
      {/if}
      {Math.abs($evaluation).toFixed(2)}
    </span>
  </label>
  <input id="evaluation" type="range" min="-20" max="20" value={$evaluation} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" disabled>
</div>

<style>
  .white-lead {
    @apply border border-gray-300;
  }

  .black-lead {
    @apply bg-gray-900 text-white;
  }
</style>
