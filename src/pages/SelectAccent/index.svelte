<script lang="ts">
  import { goto } from '@sapper/app';
  import * as accent from '@this/constants/accentEnum';
  import { accentStore } from '@this/data/accentStore';
  import Button from './Button';
  import flagAustraliaUrl from './assets/flag-australia.gif';
  import flagEnglandUrl from './assets/flag-england.gif';
  import flagUSUrl from './assets/flag-us.gif';

  const handleClick = ({ detail }: any) => {
    accentStore.set(detail);
    goto('/colours');
  };
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col w-4/5 space-y-2">
    <Button accentValue={accent.australian} imageUrl={flagAustraliaUrl} imageAltText="Australian flag" on:click={handleClick}>Australian</Button>
    <Button accentValue={accent.english} imageUrl={flagEnglandUrl} imageAltText="UK flag" on:click={handleClick}>English</Button>
    <Button accentValue={accent.unitedStates} imageUrl={flagUSUrl} imageAltText="US flag" on:click={handleClick}>United States</Button>
  </div>
</div>
