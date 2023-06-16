<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import SmileLogo from '$lib/images/smile-logo.svg?component';
	// @ts-ignore
	import SmileLogoWhite from '$lib/images/smile-logo-white.svg?component';
	//
	import classNames from 'classnames';

	export let scale: 'full' | 'half' = 'full';
	export let logoHeights = 'h-5rem';
	export let textHeight = 'text-[2.5rem]';
	export let textLeading = 'leading-[2.5rem]';
	export let relativeUnits = 'leading-[2.5rem]';

	let fadeInText = false;

	$: logoClass = classNames(
		'relative z-10  inline-block transform whitespace-nowrap text-white ',
		textLeading,
		logoHeights,
		textHeight,
		{
			'logo-gradient scale-50 origin-top-left': scale === 'half'
		}
	);

	$: logoWrapClass = classNames('opacity-0 inline-block relative h-5rem sm:h-[6rem]', logoHeights, {
		'duration-400 opacity-100 transition-opacity ease-in-out': fadeInText
	});

	$: smileClass = 'h-7 w-7 transform sm:bottom-4 sm:h-10 sm:w-10';

	$: smileWrapClass = classNames('absolute h-7 w-7 transform  sm:h-10 sm:w-10 ', relativeUnits);

	onMount(() => {
		setTimeout(() => {
			fadeInText = true;
		});
	});
</script>

<div class={logoWrapClass}>
	<h1 class={logoClass}>Aaron Happe</h1>

	<div class={smileWrapClass}>
		{#if scale === 'half'}
			<SmileLogo class={`${smileClass} origin-top-left scale-50`} />
		{:else}
			<SmileLogoWhite class={smileClass} />
		{/if}
	</div>
</div>

<style>
	.logo-gradient {
		background: linear-gradient(to top, #e46b3f, #dd583e);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
