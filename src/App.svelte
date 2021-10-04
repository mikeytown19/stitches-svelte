<script>
import Button from './components/Button/Button.svelte'

import { onMount } from 'svelte';


let photos = [];

onMount(async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
	photos = await res.json();
});

</script>

<main>
	<h1>Photo album</h1>
	<Button>Click here</Button>
	<div>
		This is a div
	</div>

	<div class="photos">
		{#each photos as photo}
			<figure>
				<img src={photo.thumbnailUrl} alt={photo.title}>
				<figcaption>{photo.title}</figcaption>
			</figure>
		{:else}
			<!-- this block renders when photos.length === 0 -->
			<p>loading...</p>
		{/each}
	</div>

</main>


<style>
	.results {

		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
		grid-gap: 8px;
		background-color: var(--colors-tomato4);
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>