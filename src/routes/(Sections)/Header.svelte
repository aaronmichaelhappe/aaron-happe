<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	//
	import * as feather from 'feather-icons';
	//
	import classNames from 'classnames';
	//
	import AnimatedUnderlinedLink from '$lib/AnimatedUnderlinedLink/AnimatedUnderlinedLink.svelte';
	//
	import HeaderLogoBlock from './HeaderLogoBlock.svelte';

	export let currentSection = '';
	export let userHasScrolled = false;

	let workEl: any;
	let aboutEl: any;
	let blogEl: any;
	let checkbox: HTMLInputElement;
	let menuOpen = false;
	let isMdOrAbove = false;
	let transformClass = '';
	let stuckItem = currentSection || '';

	const dispatch = createEventDispatcher();

	let menuIncludes = ['work', 'about', 'blog'];

	let mobileMenuClasses = '';

	const gitIconSvg = feather.icons['github'].toSvg({
		stroke: '#000',
		width: 28,
		height: 28
	});

	const linkedIconSvg = feather.icons['linkedin'].toSvg({
		stroke: '#000',
		width: 28,
		height: 28
	});

	$: {
		if (!isMdOrAbove) {
			let transformClass = !menuOpen ? 'transform-none' : '-translate-x-[100%]';
			mobileMenuClasses = classNames(
				transformClass,
				'md:flex fixed shadow border-l border-gray-200 left-[100%] right-[150%] w-[90%] top-0 h-[100vh] bg-themeGray-100 transition-transform duration-300 ease-in-out'
			);
		}
		if (isMdOrAbove) {
			mobileMenuClasses = '';
		}
	}

	$: labelCheckbox = classNames('hamburger-lines block h-[1.3rem] w-8 cursor-pointer', {
		'transform rotate-180': menuOpen
	});

	function assignScreenSizeCondition(closeMenu: boolean = false) {
		isMdOrAbove = window.matchMedia('(min-width: 768px)').matches;
		if (closeMenu) menuOpen = false;
	}

	onMount(() => {
		assignScreenSizeCondition();
		if (isMdOrAbove) {
			mobileMenuClasses = '';
		}
	});

	window.addEventListener('resize', () => assignScreenSizeCondition(true));

	function handleScrollTo(event: CustomEvent) {
		stuckItem = event.detail.to;
		dispatch('scrollto', event.detail.to);
		toggleMenu();
	}

	function toggleMenu() {
		if (checkbox) {
			checkbox.checked = !checkbox.checked;
			menuOpen = checkbox.checked ? false : true;
		}
	}
</script>

<!-- hamburger menu icon -->
<div
	class="pointer-events-none relative z-20 flex justify-end p-2 md:hidden"
	on:click={toggleMenu}
	on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}
>
	<div class="pointer-events-auto fixed">
		<input
			type="checkbox"
			bind:this={checkbox}
			checked
			class="peer hidden"
			id="hamburger-checkbox"
		/>
		<label for="hamburger-checkbox" class={`${labelCheckbox}`}>
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
	{#if userHasScrolled}
		<div class={`${userHasScrolled ? 'hidden md:flex' : 'hidden'}`}>
			<div class="absolute">
				<HeaderLogoBlock />
			</div>
		</div>
	{/if}

	<ul class="flex flex-col pl-4 pt-4 text-lg md:flex-row md:justify-end md:pt-0 md:pl-0">
		<div class="cursor-pointer pb-4">
			<AnimatedUnderlinedLink
				bind:this={workEl}
				name="Work"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				on:animatedlinkclicked={(e) => handleScrollTo(e)}
				on:unstickallsiblings={() => (stuckItem = 'work')}
			/>
		</div>
		<div class="cursor-pointer pb-4 md:ml-4 lg:ml-8">
			<AnimatedUnderlinedLink
				bind:this={aboutEl}
				name="About"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				on:animatedlinkclicked={(e) => handleScrollTo(e)}
				on:unstickallsiblings={() => (stuckItem = 'about')}
			/>
			<!-- <AnimatedUnderlinedLink
			bind:this={aboutEl}
			name="About"
			lineColor="primaryPink"
			customAClasses="pt-3"
			customNameClasses="uppercase h-auto font-bold "
			customLineClasses="h-[.16rem] inline-block"
			stuckItem={'about'}
			stuck={stuckItem === 'about'}
			on:animatedlinkclicked={(e) => handleScrollTo(e)}
			on:unstickallsiblings={() => (stuckItem = 'about')}
		/> -->
		</div>
		<div class="cursor-pointer pb-4 md:ml-4 lg:ml-8">
			<AnimatedUnderlinedLink
				bind:this={blogEl}
				name="Blog"
				lineColor="primaryPink"
				customAClasses="pt-3"
				customNameClasses="uppercase h-auto font-bold "
				customLineClasses="h-[.16rem] inline-block"
				stuck={stuckItem === 'work'}
				on:unstickallsiblings={() => (stuckItem = 'blog')}
			/>
		</div>
		<a class="pb-4 md:ml-4 md:pb-0 lg:ml-8" href="https://github.com/aaronmichaelhappe/"
			>{@html gitIconSvg}</a
		>
		<a class="md:ml-4" href="https://www.linkedin.com/in/aaron-happe-4741176a/"
			>{@html linkedIconSvg}</a
		>
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
