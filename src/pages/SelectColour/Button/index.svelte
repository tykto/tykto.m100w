<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let colourValue = null;
  export let colourClass = 'bg-white';

  const dispatch = createEventDispatcher();
</script>

<button
  class="flex flex-col items-center {colourClass} shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"
  on:click={() => dispatch('click', colourValue)}>
  <span class="text-2xl pt-2"><slot /></span>
</button>
