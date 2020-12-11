<script lang="ts">
  import Button from './Button';
  import { backgroundStore } from '@this/data/backgroundStore';

  const games = [
    { label: 'Flash Cards', url: '/colours/games/flash-cards' },
    { label: 'Pick the Word', url: '/colours/games/pick-the-word' },
  ];

  $: backgroundClass = $backgroundStore;
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col w-4/5 space-y-2 py-3">
    {#each games as { label, url }}
      <Button class={backgroundClass} {url}>{label}</Button>
    {/each}
  </div>
</div>
