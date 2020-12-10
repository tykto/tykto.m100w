<!-- based on: https://github.com/borntofrappe/svelte-tutorial/blob/master/Concentration/src/Card.svelte -->
<script>
  import { createEventDispatcher, onDestroy } from 'svelte';
  export let cardClass = '';
  export let backClass = '';
  export let frontClass = '';
  export let text = '';
  export let disabled = false;

  export const flip = () => flipCard();

  const handleClick = () => {
    if (!disabledInternal && !disabled) {
      disabledInternal = true;
      flipCard();
    }
  };

  const flipCard = () => {
    faceDown = !faceDown;
    timeoutHandle = setTimeout(() => {
      dispatch('flip', { faceDown: faceDown });
      dispatch(faceDown ? 'flipToBack' : 'flipToFront');
      disabledInternal = false;
    }, 1000);
  };

  let timeoutHandle = null;
  let disabledInternal = false;
  let faceDown = true;
  const dispatch = createEventDispatcher();

  onDestroy(() => clearTimeout(timeoutHandle));
</script>

<style>
  .t-card {
    cursor: pointer;
    transition: transform 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform-style: preserve-3d;
  }

  .t-face-down,
  .t-back {
    transform: rotateY(180deg);
  }

  .t-face-up,
  .t-front {
    transform: rotateY(0deg);
  }

  .t-face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    backface-visibility: hidden;
  }
</style>

<div class="t-card {cardClass}" class:t-face-down={faceDown} class:t-face-up={!faceDown}>
  <div class="t-face t-front {frontClass}" on:click={handleClick}>
    <h1>{text}</h1>
  </div>
  <div class="t-face t-back {backClass}" on:click={handleClick} />
</div>
