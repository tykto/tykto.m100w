<script lang="ts">
  let rootClass = '';
  export { rootClass as class };
  export let url = '/';
</script>

<a href={url} class="{rootClass} flex flex-col items-center shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4">
  <span class="text-2xl pt-2"><slot /></span>
</a>
