<!-- <div class="p-4">
	<div class="relative">
		<input type="checkbox" class="peer hidden" id="hamburger-checkbox" />
		<label
			for="hamburger-checkbox"
			class="hamburger-lines block h-8 w-10 cursor-pointer peer-checked:rotate-180 peer-checked:transform"
		>
			<span
				class="line line1 absolute top-0 block h-[.2rem] w-10 bg-white transition-transform duration-300 ease-in-out"
			/>
			<span
				class="line line2 absolute block h-[.2rem] w-10 bg-white transition-opacity duration-300 ease-in-out"
			/>
			<span
				class="line line3 absolute bottom-0 block h-[.2rem] w-10 bg-white transition-transform duration-300 ease-in-out"
			/>
		</label>
	</div>
</div> -->
<script lang="ts">
	import AnimatedUnderlinedLink from '../lib/AnimatedUnderlinedLink/AnimatedUnderlinedLink.svelte';
	import { createEventDispatcher } from 'svelte';

	// elements for each section
	export let currentSection = '';

	let workEl: any;
	let aboutEl: any;
	let blogEl: any;

	$: stuckItem = currentSection;

	const dispatch = createEventDispatcher();

	function handleScrollTo(event: CustomEvent, index: number) {
		stuckItem = event.detail.to;
		dispatch('scrollto', event.detail.to);
	}
</script>

<nav>
	<ul class="flex justify-end text-lg">
		<div>
			<AnimatedUnderlinedLink
				bind:this={workEl}
				name="Work"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				stuck={stuckItem === 'work'}
				on:animatedlinkclicked={(e) => handleScrollTo(e, 0)}
			/>
		</div>
		<div class="ml-8">
			<AnimatedUnderlinedLink
				bind:this={aboutEl}
				name="About"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				stuck={stuckItem === 'about'}
				on:scrollto={(e) => handleScrollTo(e, 1)}
			/>
		</div>
		<div class="ml-8">
			<AnimatedUnderlinedLink
				bind:this={blogEl}
				name="Blog"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				stuck={stuckItem === 'blog'}
				on:scrollto={(e) => handleScrollTo(e, 2)}
			/>
		</div>
	</ul>
</nav>

<style>
	.line2 {
		top: calc(50% - 0.1rem);
	}
	.peer:checked ~ .hamburger-lines .line1 {
		transform: translateY(0.85rem) rotate(45deg);
	}

	.peer:checked ~ .hamburger-lines .line2 {
		opacity: 0;
	}

	.peer:checked ~ .hamburger-lines .line3 {
		transform: translateY(-0.9rem) rotate(-45deg);
	}
</style>
