<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	const { fade } = crossfade;

	let currentHover = null;

	const shoes = [
		{
			id: 'shoe1',
			title: 'Air Infused',
			subtitle: 'Bzees shoes are made with molded, low density, EVA soles...'
		},
		{
			id: 'shoe2',
			title: 'DYNAMIC STRETCH UPPERS',
			subtitle: 'Every Bzees shoe is designed with a dynamic fitting stretch upper material...'
		},
		{
			id: 'shoe3',
			title: 'FREE-FOAM™ FOOTBEDS',
			subtitle: 'Free Foam is a specially blended micro-cellular polymer foam...'
		},
		{
			id: 'shoe4',
			title: 'Machine Washable',
			subtitle: 'Every Bzees shoe has been designed using wash-friendly materials...'
		}
	];
</script>

<div class="ani-sect tech-wrap">
	<!-- {#each shoes as shoe, i (shoe.id)}
		<div
			class="col"
			on:mouseenter={() => (currentHover = i)}
			on:mouseleave={() => (currentHover = null)}
		>
			{#if currentHover === i}
				<div class="svg-shoe">
					<img
						src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/111481/${shoe.id}-01.svg`}
						alt={shoe.title}
						animate:flip
					/>
				</div>
			{/if}
			<h3>{shoe.title}</h3>
			{#if currentHover === i}
				<div class="text-hov" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
					<div class="v-center">
						<h4>{shoe.title}</h4>
						<p>{shoe.subtitle}</p>
					</div>
				</div>
			{/if}
		</div>
	{/each} -->
</div>
