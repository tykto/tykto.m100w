<script lang="ts">
  import lowerCase from 'lodash/lowerCase';
  import { onDestroy, onMount } from 'svelte';
  import Card from '@this/components/Card';
  import { groupedWords } from '@this/constants/groupedWords';
  import { background, border } from '@this/constants/theme';
  import { CardDeck } from '@this/logic/CardDeck';
  import { colourStore as colour } from '@this/data/colourStore';
  import { accentStore as accent } from '@this/data/accentStore';

  const handleFlip = ({ detail }) => (disabled = !detail.faceDown);

  const handleFlipToBack = () => startRound();

  const handleFlipToFront = () => {
    countdown = timeLimitSeconds;
    intervalHandle = setInterval(() => tick(), 1000);
    timeoutHandle = setTimeout(() => finishRound(), 1000 * timeLimitSeconds);
  };

  const finishRound = () => {
    countdown = 0;
    clearInterval(intervalHandle);
    const sound = new Audio(`audio/${$accent}/${lowerCase(word)}.mp3`);
    sound.onended = () => cardCtl.flip();
    sound.play();
  };

  const startGame = () => {
    tickMp3 = new Audio('audio/tick.mp3');
    deck = new CardDeck(words);
    startRound();
  };

  const startRound = () => {
    countdown = timeLimitSeconds;
    word = deck.getNextCard();
    progress = deck.getProgress();
  };

  const tick = () => {
    countdown--;
    if (countdown > 0) {
      tickMp3.play();
    }
  };

  let cardCtl: any;
  let countdown = 0;
  let deck: CardDeck;
  let disabled: boolean = false;
  let progress: any = {};
  let intervalHandle: any = null;
  let tickMp3: any = null;
  let timeoutHandle: any = null;
  let word: string = '';
  const timeLimitSeconds = 5;
  const words = groupedWords[$colour];
  $: borderClass = border[$colour];
  $: backgroundClass = background[$colour];

  onMount(() => startGame());
  onDestroy(() => clearTimeout(timeoutHandle));
  onDestroy(() => clearInterval(intervalHandle));
</script>

<div class="flex flex-col h-full">
  <div class="flex px-2 py-2">
    <h1>Flash Cards</h1>
  </div>
  <div class="flex justify-center items-center h-full">
    <Card
      bind:this={cardCtl}
      class="flex justify-center items-center h-1/2 w-3/4 sm:w-2/5 xl:w-1/3 2xl:w-1/5"
      backClass="rounded border-solid border-20 {backgroundClass} {borderClass}"
      frontClass="bg-white flex justify-center items-center text-5xl font-bold rounded border-solid border-20 {borderClass}"
      text={word}
      {disabled}
      on:flip={handleFlip}
      on:flipToFront={handleFlipToFront}
      on:flipToBack={handleFlipToBack} />
  </div>
  <div class="flex justify-between px-2 py-2">
    <div class="font-bold py-2 px-4"><span class="text-2xl pt-2">{countdown}</span></div>
    <div class="flex justify-center items-center px-3 space-x-2">
      <span class="font-medium">{progress.card}</span>
      <span>of</span>
      <span class="font-medium">{progress.cardCount}</span>
    </div>
  </div>
</div>
