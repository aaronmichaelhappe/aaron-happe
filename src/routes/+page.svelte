<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../composables/scrollToSection';
	import { myGotoName } from './store';
	import AaronHappeLogo from '../lib/AaronHappeLogo.svelte';
	import Header from './Header.svelte';

	import ScrollSection from './ScrollSection.svelte';
	import Work from './Work.svelte';

	let startAnimation = false;
	let introEnd = false;
	let largeTextAnimationFinished = false;
	let smallTextAnimationFinished = false;
	let userHasScrolled = false;
	// let largeHlClasses =
	// 	'translate-x-[100] font-extrabold uppercase  text-[3.5rem] leading-[3.5rem] sm:text-[6rem] sm:leading-[6rem] md:text-[7rem] md:leading-[7rem] lg:text-[9rem] lg:leading-[9rem]';
	let largeHlClasses =
		'translate-x-[100] font-extrabold uppercase lg:text-[7.5rem] lg:leading-[7.5rem] text-[12.5vw] leading-[12.5vw]';
	let smallHlClasses =
		'mr-1 inline-block text-[2rem] font-extrabold leading-[2rem] sm:text-[5vw] sm:leading-[5vw] md:text-[4vw] md:leading-[4vw] text-white';

	let currentSection = '';
	let workEl: HTMLDivElement | null;
	let aboutEl: HTMLDivElement | null;
	let headerWrapperEl: HTMLDivElement | null;

	const headlines = ['Slick.', '', 'Modern.', ' ', 'Stylish.'];

	onMount(() => {
		startAnimation = true;
	});

	function handleInView(e: CustomEvent) {
		if (!userHasScrolled) return;
		currentSection = e.detail.view;
	}

	function handleScrollTo(event: CustomEvent) {
		let mapKey: string = event.detail;
		let map: { [key: string]: HTMLElement | null } = {
			work: workEl
		};
		scrollToSection(map[mapKey]);
	}

	function onIntroAnimationEnd() {
		introEnd = true;
	}

	function onLargeTextAnimationEnd() {
		largeTextAnimationFinished = true;
	}
</script>

<svelte:window on:scroll={() => (userHasScrolled = true)} />

<div class="navigating-overlay h-screen">
	<div class="relative h-[90vh]">
		<div class="mx-auto max-w-[1500px]">
			<div class="mx-auto max-w-[1500px]">
				{#if startAnimation}
					<div
						style={`${
							userHasScrolled
								? 'background-color: #eeeeee;'
								: 'background: linear-gradient(to top, #dd583e 30%, #e46b3f ); background-color: #dd583e;'
						}`}
						class={`absolute inset-0 z-0 h-[90vh] transition-all duration-700 ease-in-out`}
						in:fly={{ y: '100%' }}
						on:introend={() => onIntroAnimationEnd()}
					/>
				{/if}
				<div
					bind:this={headerWrapperEl}
					class={`duration-400 relative z-30 px-4 pt-4 transition-all ease-in-out md:sticky md:top-0 ${
						startAnimation ? 'transform-none opacity-100' : '-translate-y-8 opacity-0'
					}`}
				>
					<Header {currentSection} on:scrollto={handleScrollTo} />
				</div>
			</div>
			<div class="relative p-4">
				<AaronHappeLogo />
				<div class="flex flex-col overflow-hidden">
					{#if introEnd}
						<div>
							{#if !largeTextAnimationFinished}
								<div class="size-placholder-text ">
									<span class={smallHlClasses + ' invisible'}>web & mobile experiences.</span>
								</div>
							{:else}
								<div>
									{#each headlines as line, i}
										<span
											style={`${userHasScrolled ? 'color: #1A1A1A;' : 'color: white;'}`}
											class={`duration-750 transition-color ease-in-out ${smallHlClasses}`}
											in:fly={{
												y: 100,
												delay: 250 * i,
												easing: backOut
											}}
											on:introend={() => (smallTextAnimationFinished = true)}>{line}</span
										>
									{/each}
								</div>
							{/if}
						</div>
						<div>
							<p
								class={largeHlClasses}
								in:fly={{
									x: '-100%',
									duration: 650,
									easing: backOut
								}}
								on:introend={() => onLargeTextAnimationEnd()}
							>
								<span class="whitespace-nowrap">Web & Mobile</span>
								<!-- <span class="whitespace-nowrap">For the modern</span> -->
							</p>
							<p
								class={largeHlClasses}
								in:fly={{
									x: '100%',
									duration: 650,
									easing: backOut
								}}
							>
								Experiences
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div bind:this={workEl} class="h-[10vh]">
		<div id="work" class="mx-auto h-[10vh] max-w-[1500px] pt-1">
			<h4
				class={`transition ${
					startAnimation ? 'transition-in' : ''
				}  px-2 text-[2rem] font-bold text-white sm:px-4 sm:text-left sm:text-[3rem]`}
			>
				Work
			</h4>
		</div>
		<ScrollSection
			on:inview={(e) => handleInView(e)}
			name="work"
			{currentSection}
			sectionEl={workEl}
		>
			<Work />
		</ScrollSection>
	</div>
</div>

<style lang="post-css">
	/* :global(a) {
		display: none;
	} */

	.slide-fade {
		opacity: 0;
		transform: translateY(8rem);
		transition: all 0.4s ease-in-out;
	}
	.slide-fade.slide-fade-in {
		opacity: 100;
		transform: translateY(0);
	}
</style>
