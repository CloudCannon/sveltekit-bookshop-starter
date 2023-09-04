<script>
  import { onDestroy, onMount } from "svelte";
  import {
    onCloudCannonChanges,
    stopCloudCannonChanges,
  } from "@cloudcannon/svelte-connector";
  import {
    Bookshop,
    trackBookshopLiveData,
  } from "@bookshop/sveltekit-bookshop";

  export let data;
  $: pageDetails = data.data;

  onMount(async () => {
    onCloudCannonChanges(
      (newProps) => (pageDetails = trackBookshopLiveData(newProps))
    );
  });

  onDestroy(async () => {
    stopCloudCannonChanges();
  });
</script>

<div>
  <Bookshop shared="page" content_blocks={pageDetails.content_blocks} />
</div>
