<script context="module">
	async function loadPage(url, { fetch }) {
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: await res.json(),
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	}

	export async function load({ fetch }) {
		return await loadPage("/index.json", { fetch });
	}
</script>

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

	export let pageDetails;

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
