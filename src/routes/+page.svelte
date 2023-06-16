<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	//
	import { scrollToSection } from '$lib/helpers/scrollToSection';
	//
	import LogoBlock from './(Sections)/LogoBlock.svelte';
	import Header from './(Sections)/Header.svelte';
	import ScrollSection from './(ScrollSections)/ScrollSection.svelte';
	import Work from './(ScrollSections)/Work.svelte';
	//
	import * as feather from 'feather-icons';
	import classNames from 'classnames';

	const headlines = ['Slick.', '', 'Accessible.', ' ', 'Modern.'];

	let scrollY = 0;
	let userHasScrolled = false;
	let introEnd = false;
	let largeTextAnimationFinished = false;
	let startAnimation = false;

	let currentSection = '';
	let largeHlClasses =
		'translate-x-[100] font-extrabold uppercase lg:text-[7.5rem] lg:leading-[7.5rem] text-[12.5vw] leading-[12.5vw]';
	let smallHlClasses =
		'mr-1 inline-block text-[2rem] font-extrabold leading-[2rem] sm:text-[5vw] sm:leading-[5vw] md:text-[4vw] md:leading-[4vw] text-white';

	let downIconSvg = feather.icons['chevrons-down'].toSvg({
		stroke: '#f7a440',
		width: 28,
		height: 28
	});
	let mailIconSvg = feather.icons['mail'].toSvg({ stroke: '#fff', width: 36, height: 36 });

	let workEl: HTMLElement | null;
	let aboutEl: HTMLElement | null;
	let headerWrapperEl: HTMLElement | null;

	$: {
		scrollY = window.scrollY;
		userHasScrolled = scrollY > 100;
	}

	$: headerWrapperClasses = classNames(
		'duration-400 absolute right-0 z-30 block px-4 pt-4 pb-2 transition-all ease-in-out md:top-0',
		{
			sticky: userHasScrolled,
			'transform-none opacity-100': startAnimation,
			'-translate-y-8 opacity-0': !startAnimation
		}
	);

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

	function handleSectionHeaderClick(headerElement: HTMLElement | null) {
		scrollToSection(headerElement as HTMLElement);
	}
	function onIntroAnimationEnd() {
		introEnd = true;
	}

	function onLargeTextAnimationEnd() {
		largeTextAnimationFinished = true;
	}
</script>

<svelte:window bind:scrollY on:scroll={() => (scrollY > 100 ? (userHasScrolled = true) : null)} />

<div class="navigating-overlay h-screen">
	<div class="relative h-[90vh]">
		<div class="mx-auto max-w-[1500px]">
			<!-- intro background graident -->
			{#if startAnimation}
				<div
					style={`${
						userHasScrolled
							? 'background-color: #fff;'
							: 'background: linear-gradient(to top, #dd583e 30%, #e46b3f ); background-color: #dd583e;'
					}`}
					class={`absolute inset-0 z-0 h-[90vh] transition-all duration-700 ease-in-out`}
					in:fly={{ y: '100%' }}
					on:introend={() => onIntroAnimationEnd()}
				/>
			{/if}

			<div bind:this={headerWrapperEl} class={headerWrapperClasses}>
				<Header {currentSection} on:scrollto={handleScrollTo} {userHasScrolled} />
			</div>

			<div class="relative p-4">
				<div class="mb-[2rem] sm:mb-0">
					<LogoBlock {userHasScrolled} />
				</div>

				<div class="flex flex-col overflow-hidden">
					{#if introEnd}
						<div>
							{#if !largeTextAnimationFinished}
								<div class="size-placholder-text ">
									<span class={smallHlClasses + ' invisible'}>Slick. Accessible. Modern.</span>
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
											}}>{line}</span
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
								<span class="whitespace-nowrap">Web Design &</span>
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
								Development
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<!-- Sections -->
	<div bind:this={workEl} class="h-[10vh]">
		<div
			id="work"
			class="mx-auto flex h-[10vh] w-full max-w-[1500px] items-center justify-between pt-1 "
		>
			<div class="flex items-center">
				<span class="inline-block pl-2 sm:pl-4">{@html downIconSvg}</span>
				<h4
					class={`section-header transition ${
						startAnimation ? 'transition-in' : ''
					} cursor-pointer pl-1 text-[2rem] font-bold text-white  sm:text-left sm:text-[3rem]`}
					on:click={() => handleSectionHeaderClick(workEl)}
					on:keypress={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							handleSectionHeaderClick(workEl);
						}
					}}
					tabindex="-1"
				>
					Work
				</h4>
			</div>
		</div>
		<div
			class="fixed right-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-themeGray-700 p-4"
		>
			{@html mailIconSvg}
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
	@media (min-width: 768px) {
		.sticky {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 50;
			background-color: white;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		}
	}
	.section-header {
		background: linear-gradient(to right, #f7cc2c, #f7a440);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
