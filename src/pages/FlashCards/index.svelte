<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Card from '@this/components/Card';
  import { backgroundStore } from '@this/data/backgroundStore';
  import { borderStore } from '@this/data/borderStore';
  import { makeController } from './utility/makeController';
  import { countdownStore, disabledStore, intervalHandleStore, progressStore, timeoutHandleStore, wordStore } from './data/game';

  const handleFlipToBack = () => controller.prepareRound();
  const handleFlipToFront = () => controller.startRound();

  let cardCtl: any;
  $: backgroundClass = $backgroundStore;
  $: borderClass = $borderStore;
  $: countdown = $countdownStore;
  $: disabled = $disabledStore;
  $: progress = $progressStore;
  $: word = $wordStore;
  const controller = makeController(() => cardCtl.flip());

  onMount(() => controller.startGame());
  onDestroy(() => clearTimeout($timeoutHandleStore));
  onDestroy(() => clearInterval($intervalHandleStore));
</script>

<div class="flex flex-col h-full">
  <div class="flex px-2 py-2">
    <h1>Flash Cards</h1>
  </div>
  <div class="flex justify-center items-center h-full {backgroundClass}">
    <Card
      bind:this={cardCtl}
      class="flex justify-center items-center h-1/2 w-3/4 sm:w-2/5 xl:w-1/3 2xl:w-1/5"
      backClass="rounded bg-white"
      frontClass="bg-white flex justify-center items-center text-5xl font-bold rounded"
      text={word}
      {disabled}
      on:flipToFront={handleFlipToFront}
      on:flipToBack={handleFlipToBack} />
  </div>
  <div class="flex justify-between px-2 py-2">
    <div class="font-bold py-2 px-4"><span class="text-2xl pt-2">{countdown}</span></div>
    <div class="flex justify-center items-center px-3 space-x-2">
      <span class="font-medium">{progress.current}</span>
      <span>of</span>
      <span class="font-medium">{progress.count}</span>
    </div>
  </div>
</div>
