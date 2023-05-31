<script lang="ts">
	import { onMount } from 'svelte';
	import AnimatedUnderlinedLink from '../lib/AnimatedUnderlinedLink/AnimatedUnderlinedLink.svelte';
	import { createEventDispatcher } from 'svelte';

	export let currentSection = '';

	let workEl: any;
	let aboutEl: any;
	let blogEl: any;
	let checkbox: HTMLInputElement;
	let menuOpen = false;

	let mobileMenuClasses = '';

	function updateMenuClasses() {
		const isMdOrAbove = window.matchMedia('(min-width: 768px)').matches;
		mobileMenuClasses = isMdOrAbove
			? ''
			: ` fixed shadow border-l border-gray-200 left-[100%] right-[150%] w-1/2 top-0 h-[100vh] bg-themeGray-100 transition-transform duration-300 ease-in-out ${
					menuOpen ? 'transform-none' : '-translate-x-[100%]'
			  } md:flex`;
	}

	onMount(() => {
		menuOpen = checkbox.checked;
		updateMenuClasses();
	});

	window.addEventListener('resize', updateMenuClasses);

	$: stuckItem = currentSection;

	const dispatch = createEventDispatcher();

	function handleScrollTo(event: CustomEvent, index: number) {
		stuckItem = event.detail.to;
		dispatch('scrollto', event.detail.to);
	}

	function toggleMenu() {
		if (checkbox) {
			checkbox.checked = !checkbox.checked;
			menuOpen = checkbox.checked;
			updateMenuClasses();
		}
	}
</script>

<!-- hamburger menu icon -->
<div
	class="pointer-events-none relative z-20 flex justify-end p-2 md:hidden"
	on:click={toggleMenu}
	on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
>
	<div class="pointer-events-auto relative ">
		<input
			type="checkbox"
			bind:this={checkbox}
			checked
			class="peer hidden"
			id="hamburger-checkbox"
		/>
		<label
			for="hamburger-checkbox"
			class="hamburger-lines block h-[1.25rem] w-8 cursor-pointer peer-checked:rotate-180 peer-checked:transform"
		>
			<span
				class="line line1 absolute top-0 block h-[.15rem] w-8 bg-themeGray-900 transition-transform duration-300 ease-in-out"
			/>
			<span
				class="line line2 absolute block h-[.15rem] w-8 bg-themeGray-900 opacity-0 transition-opacity duration-300 ease-in-out"
				style="top: calc(50% - 0.1rem);"
			/>
			<span
				class="line line3 absolute bottom-0 block h-[.15rem] w-8 bg-themeGray-900 transition-transform duration-300 ease-in-out"
			/>
		</label>
	</div>
</div>

<nav class={`${mobileMenuClasses} bg-none`}>
	<ul class="flex flex-col pl-4 pt-4 text-lg md:flex-row md:justify-end md:pt-0 md:pl-0">
		<div class="cursor-pointer pb-4">
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
		<div class="cursor-pointer pb-4 md:ml-8">
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
		<div class="cursor-pointer pb-4 md:ml-8">
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
	.line1 {
		transform: translateY(0.55rem) rotate(45deg);
	}
	.line3 {
		transform: translateY(-0.6rem) rotate(-45deg);
	}
	.peer:checked ~ .hamburger-lines .line1 {
		transform: none;
	}
	.peer:checked ~ .hamburger-lines .line2 {
		opacity: 1;
	}
	.peer:checked ~ .hamburger-lines .line3 {
		transform: none;
	}
</style>
