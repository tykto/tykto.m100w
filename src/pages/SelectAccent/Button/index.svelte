<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let imageUrl = null;
  export let imageAltText = '';
  export let accentValue = null;

  const dispatch = createEventDispatcher();
</script>

<button
  class="flex flex-col items-center bg-yellow-200 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-5"
  on:click={() => dispatch('click', accentValue)}>
  <img src={imageUrl} alt={imageAltText} />
  <span class="text-2xl"><slot /></span>
</button>
