<script>
  import Item from './item.svelte';
</script>

<div class="flex flex-col h-full">
  <div class="flex px-2 py-2">
    <h1>Pick the Word</h1>
  </div>
  <div class="flex flex-col justify-evenly items-center flex-grow bg-yellow-500">
    <div class="grid grid-cols-2 gap-4 w-full px-3 ">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <button class="flex justify-center w-4/5 bg-gray-200 shadow hover:shadow-lg focus:outline-none py-4"> <span class="text-xl font-bold">GO</span> </button>
  </div>
  <div class="flex justify-between px-2 py-2">
    <div class="font-bold py-2 px-4"><span class="text-2xl pt-2">5</span></div>
    <div class="flex justify-center items-center px-3 space-x-2"><span class="font-medium">1</span> <span>of</span> <span class="font-medium">12</span></div>
  </div>
</div>
