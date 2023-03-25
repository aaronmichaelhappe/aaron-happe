<script>
	import SmileLogo from '../images/smile-logo.svg?component';
	let logoWidth = 10;
	let logoHeight = 10;
	let fadeInText = false;
	import { onMount } from 'svelte';
	// $: logoClass =
	onMount(() => {
		setTimeout(() => {
			fadeInText = true;
		});
	});
</script>

<div class={`fade ${fadeInText ? 'fade-in' : ''} relative inline-block`}>
	<h1 class="inline-block whitespace-nowrap text-[2.5rem] sm:text-[3rem]">Aaron Happe</h1>
	<div class="relative top-[-.5rem] sm:top-0">
		<SmileLogo class={`absolute -bottom-4 left-1/4 h-7 w-7 sm:h-10 sm:w-10`} />
	</div>
</div>

<style>
	.fade {
		opacity: 0;
	}
	.fade.fade-in {
		opacity: 100;
		transition: opacity 0.4s ease-in-out;
		transition-duration: 0.4s;
	}
</style>
