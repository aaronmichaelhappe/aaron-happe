<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import SmileLogo from '$lib/images/smile-logo.svg?component';
	// @ts-ignore
	import SmileLogoWhite from '$lib/images/smile-logo-white.svg?component';
	let fadeInText = false;

	export let scale: 'full' | 'half' = 'full';
	export let position = 'relative';

	$: logoClass = `relative z-20 inline-block transform whitespace-nowrap text-[2.5rem] leading-[6rem] text-white sm:mb-[3rem] sm:text-[3rem] sm:leading-[3rem] ${
		scale === 'half' ? 'scale-50' : ''
	}`;

	onMount(() => {
		setTimeout(() => {
			fadeInText = true;
		});
	});
</script>

<div
	class={`opacity-0 ${
		fadeInText ? 'duration-400 opacity-100 transition-opacity ease-in-out' : ''
	} inline-block ${position === 'relative' ? 'relative ' : 'fixed left-0 top-[.5rem]'}`}
>
	<h1 class={`${scale === 'half' ? 'logo-class' : ''} ${logoClass}`}>Aaron Happe</h1>

	<div
		class="relative top-[-.75rem] sm:top-[-.1rem] ${scale === 'half'
			? 'top-[-.5rem] sm:top-[-1.1rem]'
			: ''} "
	>
		{#if scale === 'half'}
			<SmileLogo
				class={` absolute -bottom-1 left-1/4 h-7 w-7 scale-50  transform sm:bottom-4 sm:h-10 sm:w-10
				 `}
			/>
		{:else}
			<SmileLogoWhite
				class="absolute -bottom-3 left-1/4 h-7 w-7 transform  sm:bottom-4 sm:h-10 sm:w-10 "
			/>
		{/if}
	</div>
</div>

<style>
	.logo-class {
		background: linear-gradient(to top, #e46b3f, #dd583e);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
