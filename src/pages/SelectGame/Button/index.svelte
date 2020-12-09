<script lang="ts">
  export let url = '/';
</script>

<a href={url} class="flex flex-col items-center bg-gray-100 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-4 px-4">
  <span class="text-2xl pt-2"><slot /></span>
</a>
