<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../composables/scrollToSection';
	import { myGotoName } from './store';
	import AaronHappeLogo from '../lib/AaronHappeLogo.svelte';
	import Header from './Header.svelte';

	import LpSection from './LpSection.svelte';
	import Work from './Work.svelte';

	let startAnimation = false;
	let introEnd = false;
	let largeTextAnimationFinished = false;
	let smallTextAnimationFinished = false;
	let userHasScrolled = false;
	let largeHlClasses =
		'translate-x-[100] font-extrabold uppercase  text-[3.5rem] leading-[3.5rem] sm:text-[4.5rem] sm:leading-[4.5rem] lg:text-[5.5rem] lg:leading-[5.5rem] xl:text-[7rem] xl:leading-[7rem]';
	let smallHlClasses =
		'mr-2 inline-block text-[1.75rem] font-extrabold leading-[1.75rem] text-white sm:text-[2.25rem] sm:leading-[2.25rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem] xl:text-[4rem] xl:leading-[4rem]';
	let currentSection = '';
	let workEl: HTMLDivElement | null;
	let aboutEl: HTMLDivElement | null;
	let headerWrapperEl: HTMLDivElement | null;

	const headlines = ['mobile apps.', ' ', 'web apps.', ' ', 'web pages.'];

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
	<div class="relative h-[80vh] xs:h-[85vh]">
		<div class="mx-auto max-w-[1300px]">
			<div class="mx-auto max-w-[1300px]">
				{#if startAnimation}
					<div
						class="absolute inset-0 z-0 h-[80vh] bg-primaryPink xs:h-[85vh]"
						in:fly={{ y: '100%' }}
						on:introend={() => onIntroAnimationEnd()}
					/>
				{/if}
				<div
					bind:this={headerWrapperEl}
					class={`duration-400 relative z-30 bg-primaryPink px-4 pt-4 transition-all ease-in-out md:sticky md:top-0 ${
						startAnimation ? 'transform-none opacity-100' : '-translate-y-8 opacity-0'
					}`}
				>
					<Header {currentSection} on:scrollto={handleScrollTo} />
				</div>
			</div>
			<div class="relative p-4">
				<AaronHappeLogo />
				<div class="flex flex-col overflow-hidden pt-6 ">
					{#if introEnd}
						<div>
							{#if !largeTextAnimationFinished}
								<div class="mb-2 sm:mb-4">
									<span class={smallHlClasses + ' invisible'}>mobile apps.</span>
									<span class={smallHlClasses + ' invisible'}>web apps.</span>
									<span class={smallHlClasses + ' invisible'}>web pages.</span>
								</div>
							{:else}
								<div class="mb-2 sm:mb-4">
									{#each headlines as line, i}
										<span
											class={smallHlClasses}
											in:fly={{
												y: 100,
												delay: 250 * i,
												easing: backOut
											}}
											on:introend={() => (smallTextAnimationFinished = true)}
										>
											{line}
										</span>
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
								<span class="whitespace-nowrap">Code + </span>
								<span class="whitespace-nowrap">Design +</span>
							</p>
							<p
								class={largeHlClasses}
								in:fly={{
									x: '100%',
									duration: 650,
									easing: backOut
								}}
							>
								Quality.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div id="work" bind:this={workEl}>
		<LpSection
			on:inview={(e) => handleInView(e)}
			title="My Work"
			name="work"
			{currentSection}
			sectionEl={workEl}
		>
			<Work />
		</LpSection>
	</div>
</div>

<style lang="post-css">
	:global(a) {
		display: none;
	}

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
