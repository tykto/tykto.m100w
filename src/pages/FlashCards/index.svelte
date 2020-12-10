<script>
  import { onDestroy, onMount } from 'svelte';
  import Card from '@app/components/Card';
  import { FlashCards } from './Game';

  const handleFlipToFront = () => (state.timeoutHandle = setTimeout(() => finishRound(), 5000));
  const handleFlipToBack = () => startRound();
  const handleFlip = ({ detail }) => (state.disabled = !detail.faceDown);

  const startRound = () => {
    state.card = flashCards.getNextCard();
    state.progress = flashCards.getProgress();
    console.log(state.progress);
  };

  const finishRound = () => {
    const sound = new Audio(state.card.audioUrl);
    sound.onended = () => cardCtl.flip();
    sound.play();
  };

  let cardCtl;
  const flashCards = new FlashCards();
  const state = { timeoutHandle: null, card: {}, progress: {}, disabled: false };

  onMount(() => startRound());
  onDestroy(() => clearTimeout(state.timeoutHandle));
</script>

<style>
</style>

<div class="flex flex-col h-full">
  <div class="flex px-2 py-2">
    <h1>Flash Cards</h1>
  </div>
  <div class="flex justify-center items-center h-full">
    <Card
      bind:this={cardCtl}
      cardClass="flex justify-center items-center h-1/2 w-3/4 sm:w-2/5 xl:w-1/3 2xl:w-1/5 rounded border-solid border-20 border-gray-800 bg-gray-200"
      backClass="bg-gray-300"
      frontClass="bg-white flex justify-center items-center text-5xl font-bold"
      text={state.card.text}
      disabled={state.disabled}
      on:flip={handleFlip}
      on:flipToFront={handleFlipToFront}
      on:flipToBack={handleFlipToBack} />
  </div>
  <div class="flex justify-between px-2 py-2">
    <div class="font-bold py-2 px-4"><span class="text-2xl pt-2">5</span></div>
    <div class="flex justify-center items-center px-3 space-x-2">
      <span class="font-medium">{state.progress.card}</span>
      <span>of</span>
      <span class="font-medium">{state.progress.cardCount}</span>
    </div>
  </div>
</div>
