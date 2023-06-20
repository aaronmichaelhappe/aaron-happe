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

	import PortalndImg from '$lib/images/portland-painting.png';
	import dogsImg from '$lib/images/jasper-fred.png';

	let scrollY = 0;
	let introEnd = false;
	let largeTextAnimationFinished = false;
	let startAnimation = false;
	let userHasScrolledPlus100 = false;
	let userHasScrolled = false;

	let largeHlIDisplayClasses =
		'translate-x-[100] font-extrabold uppercase lg:text-[6.5rem] lg:leading-[6.5rem] text-[12.5vw] leading-[12.5vw]';
	let smallHlDisplayClasses =
		'mr-1 inline-block text-[2rem] font-extrabold leading-[2rem] sm:text-[5vw] sm:leading-[5vw] md:text-[4vw] md:leading-[4vw] text-white';
	let h4SectionTitleClasses = classNames(
		'section-header transition cursor-pointer pl-1 text-[2.5rem] font-bold  sm:text-[3rem]',
		{ 'transition-in': startAnimation }
	);

	$: currentSection = '';

	$: workTitleWrapperClasses = classNames(
		'bottom-0 left-0 right-0 flex w-full max-w-[1400px] items-center bg-white',
		{ fixed: !userHasScrolled, hidden: userHasScrolled }
	);

	$: workTitleWrapperClasses2 = classNames(
		'absolute bottom-0 left-0 right-0 flex w-full max-w-[1400px] items-center bg-white',
		{ invisible: !userHasScrolled, visible: userHasScrolled }
	);

	let titleWrapperClasses = classNames('flex w-full max-w-[1400px] items-center bg-white pb-2');

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
		userHasScrolledPlus100 = scrollY > 100;
		userHasScrolled = scrollY > 0;
	}

	$: headerWrapperClasses = classNames(
		'duration-400 absolute right-0 z-30 block px-4 pt-4 pb-2 transition-all ease-in-out md:top-0',
		{
			sticky: userHasScrolledPlus100,
			'transform-none opacity-100': startAnimation,
			'-translate-y-8 opacity-0': !startAnimation
		}
	);

	onMount(() => {
		startAnimation = true;
	});

	function handleInView(e: CustomEvent) {
		if (!userHasScrolledPlus100) return;
		currentSection = e.detail.name;
	}

	function handleScrollTo(event: CustomEvent) {
		let mapKey: string = event.detail;
		let map: { [key: string]: HTMLElement | null } = {
			work: workEl,
			about: aboutEl
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

<svelte:window
	bind:scrollY
	on:scroll={() => (scrollY > 100 ? (userHasScrolledPlus100 = true) : null)}
/>
<div class="navigating-overlay relative h-screen">
	<main>
		<div class="relative h-[100vh]">
			<div class="mx-auto max-w-[1400px]">
				<!-- intro background graident -->
				{#if startAnimation}
					<div
						style={`${
							userHasScrolledPlus100
								? 'background-color: #fff;'
								: 'background: linear-gradient(to top, #dd583e 30%, #e46b3f ); background-color: #dd583e;'
						}`}
						class={`absolute inset-0 z-0 h-[100vh] transition-all duration-700 ease-in-out`}
						in:fly={{ y: '100%' }}
						on:introend={() => onIntroAnimationEnd()}
					/>
				{/if}

				<div bind:this={headerWrapperEl} class={headerWrapperClasses}>
					<Header
						{currentSection}
						on:scrollto={handleScrollTo}
						userHasScrolled={userHasScrolledPlus100}
					/>
				</div>

				<div class="relative p-4">
					<div class="mb-4 sm:mb-0">
						<LogoBlock userHasScrolled={userHasScrolledPlus100} />
					</div>

					<div class="flex flex-col overflow-hidden">
						{#if introEnd}
							<div>
								{#if !largeTextAnimationFinished}
									<div class="size-placholder-text ">
										<span class={smallHlDisplayClasses + ' invisible'}
											>Slick. Accessible. Modern.</span
										>
									</div>
								{:else}
									<div>
										{#each headlines as line, i}
											<span
												style={`${userHasScrolledPlus100 ? 'color: #1A1A1A;' : 'color: white;'}`}
												class={`duration-750 transition-color ease-in-out ${smallHlDisplayClasses}`}
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
									class={largeHlIDisplayClasses}
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
									class={largeHlIDisplayClasses}
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

		<!-- <div
		class="mx-auto flex h-[30vh]  flex-col items-start justify-start pt-1 sm:h-[10vh] md:flex-row md:items-center md:justify-between"
	/> -->

		<div class={workTitleWrapperClasses}>
			<span class="inline-block pl-2 sm:pl-4">{@html downIconSvg}</span>
			<h4
				class={`${h4SectionTitleClasses}`}
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
		<div class={`${workTitleWrapperClasses2}`}>
			<span class="inline-block pl-2 sm:pl-4">{@html downIconSvg}</span>
			<h4
				bind:this={workEl}
				class={`${h4SectionTitleClasses}`}
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

		<!-- Sections -->
		<section>
			<div
				class="fixed right-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-themeGray-700 p-4"
			>
				{@html mailIconSvg}
			</div>

			<ScrollSection
				on:inview={(e) => handleInView(e)}
				name="work"
				id="work"
				{currentSection}
				sectionEl={workEl}
			>
				<Work />
			</ScrollSection>
		</section>
		<section class="about-section max-w-[1400px] px-4 pb-4 " bind:this={aboutEl}>
			<ScrollSection
				on:inview={(e) => handleInView(e)}
				name="about"
				id="about"
				{currentSection}
				sectionEl={aboutEl}
			>
				<div class={titleWrapperClasses}>
					<span class="inline-block pl-2 sm:pl-4">{@html downIconSvg}</span>
					<h4
						class={`${h4SectionTitleClasses}`}
						on:click={() => handleSectionHeaderClick(aboutEl)}
						on:keypress={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								handleSectionHeaderClick(aboutEl);
							}
						}}
						tabindex="-1"
					>
						About
					</h4>
				</div>
				<article class="mx-auto">
					<div class="mx-auto">
						<aside
							class="more mx-auto mb-4 flex max-w-[1000px] flex-col gap-4 md:flex-row  md:pb-4"
						>
							<div class="w-full md:w-1/3">
								<div class="mx-auto max-w-[450px] border-themeWarmGray-300 md:m-8  md:border-8">
									<img src={dogsImg} alt="Description 3" class="flex h-auto w-full object-cover" />
								</div>
							</div>
							<div class="w-full md:w-2/3">
								<h3 class="about-section-subheader">A little about me.</h3>
								<p>
									I live in Portland, Oregon, with my husband Nick and our two dogs, Jasper and
									Fred. I enjoy hiking, game nights with friends, and exploring local restaurants.
									Every morning, I start my day by going for a jog either at the park or along the
									riverfront, followed by meditation, before I begin work.
								</p>
								<p>
									I have always had a passion for creating things. During my younger years, I
									enjoyed building webpages. I also pursued my interests in painting, participated
									in design contests, and even played in a couple of garage bands. I am a proactive
									individual who has a passion for building, engineering and designing. Whether it's
									software development or fine arts, I am consistently engaged in a project.
								</p>
							</div>
						</aside>
						<aside class=" w-full bg-themeBlue text-center">
							<div class="mx-auto max-w-[1000px] p-4">
								<h3 class="text-white">Career Summary</h3>
								<p class="leading-7 text-white">
									10+ years of industry experience, including 5+ years of experience in modern
									JavaScript development with frontend frameworks (Web Apps, SPAs, PWAs, etc.).
									Possess 1+ year of Fullstack experience. Proficient in collaborating effectively
									within both in-person and remote teams, as well as working independently,
									consistently delivering high-quality results for e-commerce, internal company
									tools, and web applications. Additionally, have a background in art and graphic
									design, keeping abreast of recent and emerging technologies and adhering to modern
									best practices.
								</p>
							</div>
						</aside>
					</div>
				</article>
			</ScrollSection>
		</section>
	</main>
	<footer class="mt-4 bg-themeWarmGray-800 p-4 text-white">
		<p class="text-center">This Portfolio was Created wtih SvelteKit.</p>
	</footer>
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
	.about-section-subheader {
		background: linear-gradient(to top, #4573b9, #2d8fad);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
