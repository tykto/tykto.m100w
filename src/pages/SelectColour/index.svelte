<script lang="ts">
  import { goto } from '@sapper/app';
  import * as colour from '@this/constants/colourEnum';
  import { background, labels } from '@this/constants/theme';
  import { colourStore } from '@this/data/colourStore';
  import Button from './Button';

  const handleClick = ({ detail }: any) => {
    colourStore.set(detail);
    goto('/colours/games');
  };

  const colours = [colour.golden, colour.red, colour.blue, colour.orange, colour.green, colour.indigo, colour.violet];
</script>

<div class="flex flex-1 flex-col justify-center items-center h-full">
  <div class="flex flex-col w-4/5 space-y-2">
    {#each colours as value}
      <Button colourClass={background[value]} colourValue={value} on:click={handleClick}>{labels[value]}</Button>
    {/each}
  </div>
</div>
