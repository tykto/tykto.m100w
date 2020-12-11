<script lang="ts" context="module">
  import { get } from 'svelte/store';
  import { accentStore } from '@this/data/accentStore';

  export async function preload() {
    if ((process as any).browser) {
      window.location.href = get(accentStore) === null ? '/accent' : '/colours';
    }
  }
</script>
