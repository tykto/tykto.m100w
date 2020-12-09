<script lang="ts">
  import * as colour from '@app/constants/colourEnum';
  import { colourStore } from '@app/data/colourStore';
  import Button from './Button';

  const handleClick = ({ detail }: any) => {
    colourStore.set(detail);
    window.location.href = '/colours/games';
  };
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col w-4/5 space-y-6 py-3">
    <Button colourClass="bg-yellow-400" colourValue={colour.golden} on:click={handleClick}>Golden</Button>
    <Button colourClass="bg-red-600" colourValue={colour.red} on:click={handleClick}>Red</Button>
    <Button colourClass="bg-blue-600" colourValue={colour.blue} on:click={handleClick}>Blue</Button>
    <Button colourClass="bg-orange-500" colourValue={colour.orange} on:click={handleClick}>Orange</Button>
    <Button colourClass="bg-green-600" colourValue={colour.green} on:click={handleClick}>Green</Button>
    <Button colourClass="bg-indigo-700" colourValue={colour.indigo} on:click={handleClick}>Indigo</Button>
    <Button colourClass="bg-purple-700" colourValue={colour.violet} on:click={handleClick}>Violet</Button>
  </div>
</div>
