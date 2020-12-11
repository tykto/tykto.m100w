<script lang="ts">
  import Button from './Button';
  import { background } from '@this/constants/theme';
  import { colourStore } from '@this/data/colourStore';

  const games = [
    { label: 'Flash Cards', url: '/colours/games/flash-cards' },
    { label: 'Pick the Word', url: '/colours/games/pick-the-word' },
  ];

  const backgroundClass = background[$colourStore];
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col w-4/5 space-y-6 py-3">
    {#each games as { label, url }}
      <Button class={backgroundClass} {url}>{label}</Button>
    {/each}
  </div>
</div>
