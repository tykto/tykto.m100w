<script lang="ts" context="module">
  import { goto } from '@sapper/app';
  import { get } from 'svelte/store';
  import { accentStore } from '@this/data/accentStore';

  export async function preload() {
    if ((process as any).browser) {
      goto(get(accentStore) === null ? '/accent' : '/colours', { replaceState: true });
    }
  }
</script>
