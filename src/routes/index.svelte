<!--<script lang="ts" ✂prettier:content✂="CiAgaW1wb3J0IFNwbGFzaFBhZ2UgZnJvbSAnQHRoaXMvcGFnZXMvU3BsYXNoJzsK">{}</script><SplashPage /> -->
<script lang="ts" context="module">
  import { get } from 'svelte/store';
  import { accentStore } from '@this/data/accentStore';

  export async function preload() {
    console.log(get(accentStore));
    if ((process as any).browser) {
      window.location.href = get(accentStore) === null ? '/accent' : '/colours';
    }
  }
</script>


