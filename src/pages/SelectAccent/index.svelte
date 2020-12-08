<script lang="ts">
  import { accentStore } from '@app/data/accentStore';
  import flagAustraliaUrl from './australia-flag.gif';
  import flagUKUrl from './uk-flag.gif';
  import flagUSUrl from './us-flag.gif';

  const handleClick = (e) => {
    accentStore.set(e);
    window.location.href = '/colours';
  };
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col space-y-6 py-3">
    <button
      class="flex flex-col items-center bg-yellow-200 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"
      on:click={() => handleClick('australian')}>
      <img class="" src={flagAustraliaUrl} alt="Australian flag" />
      <span class="text-2xl pt-2">Australian</span>
    </button>
    <button
      class="flex flex-col items-center bg-yellow-200 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"
      on:click={() => handleClick('english')}>
      <img class="" src={flagUKUrl} alt="UK flag" />
      <span class="text-2xl pt-2">English</span>
    </button>
    <button
      class="flex flex-col items-center bg-yellow-200 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4"
      on:click={() => handleClick('unitedStates')}>
      <img class="" src={flagUSUrl} alt="US flag" />
      <span class="text-2xl pt-2">United States</span>
    </button>
  </div>
</div>
