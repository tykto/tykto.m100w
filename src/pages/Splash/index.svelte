<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { accentStore } from '@this/data/accentStore';
  import logoUrl from './logo.jpg';

  onMount(() => setTimeout(() => (window.location.href = get(accentStore) === null ? '/accent' : '/colours'), 5000));
</script>

<div class="flex flex-auto flex-col justify-center items-center h-full">
  <h1 class="text-5xl font-medium hidden">Magic Words</h1>
  <h1 class="text-5xl font-medium hidden">M100W</h1>
  <img class="animate-pulse" src={logoUrl} alt="magic 100 words" />
</div>
