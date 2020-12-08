<script type="ts">
  import * as accent from '@app/constants/accentEnum';
  import { accentStore } from '@app/data/accentStore';
  import Button from './Button';
  import flagAustraliaUrl from './assets/flag-australia.gif';
  import flagEnglandUrl from './assets/flag-england.gif';
  import flagUSUrl from './assets/flag-us.gif';

  const handleClick = ({ detail }: any) => {
    accentStore.set(detail);
    window.location.href = '/colours';
  };
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <div class="flex flex-col space-y-6 py-3">
    <Button accentValue={accent.australian} imageUrl={flagAustraliaUrl} imageAltText="Australian flag" on:click={handleClick}>Australian</Button>
    <Button accentValue={accent.english} imageUrl={flagEnglandUrl} imageAltText="UK flag" on:click={handleClick}>English</Button>
    <Button accentValue={accent.unitedStates} imageUrl={flagUSUrl} imageAltText="US flag" on:click={handleClick}>United States</Button>
  </div>
</div>
