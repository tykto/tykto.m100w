<script lang="ts">
  import { accentStore } from '@app/data/accentStore';
  import Button from './Button';
  import flagAustraliaUrl from './australia-flag.gif';
  import flagUKUrl from './uk-flag.gif';
  import flagUSUrl from './us-flag.gif';

  const handleClick = (e) => {
    accentStore.set(e.detail);
    window.location.href = '/colours';
  };
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col space-y-6 py-3">
    <Button accentValue="australian" imageUrl={flagAustraliaUrl} imageAltText="Australian flag" on:click={handleClick}>Australian</Button>
    <Button accentValue="english" imageUrl={flagUKUrl} imageAltText="UK flag" on:click={handleClick}>English</Button>
    <Button accentValue="unitedStates" imageUrl={flagUSUrl} imageAltText="US flag" on:click={handleClick}>United States</Button>
  </div>
</div>
