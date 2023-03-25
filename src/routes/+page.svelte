<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../composables/scrollToSection';
	import AaronHappeLogo from '../lib/AaronHappeLogo.svelte';
	import Header from './Header.svelte';
	import Work from './Work.svelte';

	let fadeInText = false;
	let startAnimation = false;
	let introEnd = false;
	let navigating = false;
	let navDelaying = true;
	let largeTextAnimationFinished = false;
	let smallTextAnimationFinished = false;
	let userHasScrolled = false;
	let largeHlClasses =
		'translate-x-[100] font-extrabold uppercase  text-[3.5rem] leading-[3.5rem] sm:text-[4.5rem] sm:leading-[4.5rem] lg:text-[5.5rem] lg:leading-[5.5rem] xl:text-[7rem] xl:leading-[7rem]';
	let smallHlClasses =
		'mr-2 inline-block text-[1.75rem] font-extrabold leading-[1.75rem] text-white sm:text-[2.25rem] sm:leading-[2.25rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem] xl:text-[4rem] xl:leading-[4rem]';
	let currentSection = '';
	let workVisible = false;
	let workEl: HTMLDivElement | null;
	let aboutEl: HTMLDivElement | null;
	// let blogEl: HTMLDivElement | null;
	let headerWrapperEl: HTMLDivElement | null;

	const headlines = ['mobile apps.', ' ', 'web apps.', ' ', 'web pages.'];

	onMount(() => {
		const onFirstScroll = () => {
			userHasScrolled = true;
			window.removeEventListener('scroll', onFirstScroll);
		};
		window.addEventListener('scroll', onFirstScroll);
		startAnimation = true;
		setTimeout(() => {
			fadeInText = true;
		}, 180);
	});

	function handleInView(view: string) {
		if (userHasScrolled) {
			currentSection = view;
		}
		history.pushState({}, '', `#${currentSection}`);
	}

	function handleScrollTo(event: CustomEvent) {
		let mapKey: string = (currentSection = event.detail);
		let map: { [key: string]: HTMLElement | null } = {
			work: workEl
		};
		history.pushState({}, '', `#${currentSection}`);

		scrollToSection(map[mapKey]);
	}

	function handleProjectNavigate(event: CustomEvent) {
		navigating = true;
		setTimeout(() => {
			navDelaying = false;
		}, 200);
	}

	function onIntroAnimationEnd() {
		introEnd = true;
	}

	function onLargeTextAnimationEnd() {
		largeTextAnimationFinished = true;
	}
</script>

<div class="navigating-overlay h-screen">
	{#if navigating}
		<div class={`page-transition-cover fixed inset-0 z-20`}>
			<div
				class={`custom-page-transition top-left absolute top-0 right-1/2 left-0 ${
					navDelaying ? 'bottom-full' : ' bottom-0'
				} z-30 bg-primaryBlue`}
			/>
			<div
				class={`custom-page-transition bottom-right absolute right-0 bottom-0 left-1/2  ${
					navDelaying ? 'top-full' : 'top-0'
				} z-30 bg-primaryBlue`}
			/>
		</div>
	{/if}

	<div class="relative h-[80vh] xs:h-[85vh] ">
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
				class={`slide-fade bg-primaryPink md:sticky md:top-0 ${
					startAnimation ? 'slide-fade-in' : ''
				}  relative z-30 px-4 pt-4 `}
			>
				<Header {currentSection} on:scrollto={handleScrollTo} />
			</div>

			<div class="relative p-4">
				<AaronHappeLogo />
				<div class="flex flex-col overflow-hidden pt-6 ">
					{#if introEnd}
						<div>
							{#if !largeTextAnimationFinished}
								<div class="mb-2 sm:mb-4">
									<span class={smallHlClasses + ' invisible'}>mobile apps.</span><span
										class={smallHlClasses + ' invisible'}>web apps.</span
									><span class={smallHlClasses + ' invisible'}>web pages.</span>
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
	<section class="section-work mx-auto max-w-[1300px]">
		<div>
			<h4
				class={`transition ${
					fadeInText ? 'transition-in' : ''
				} p-4 text-[3rem] font-bold text-white sm:text-[4rem]`}
			>
				My Work.
			</h4>
		</div>

		<div
			use:inview={{ threshold: 0.2 }}
			on:inview_change={() => handleInView('work')}
			bind:this={workEl}
			id="work"
		>
			<div class={`transition ${currentSection === 'work' ? 'transition-in' : ''}`}>
				<Work on:projectnavigate={(e) => handleProjectNavigate(e)} />
			</div>
		</div>
	</section>
	<section>
		<div>
			<h4
				class={`transition ${
					fadeInText ? 'transition-in' : ''
				} p-4 text-[3rem] font-bold text-white sm:text-[4rem]`}
			>
				About.
			</h4>
		</div>
		<div
			use:inview={{ threshold: 0.2 }}
			on:inview_change={() => handleInView('work')}
			bind:this={aboutEl}
			id="about"
		>
			<div class={`transition ${currentSection === 'about' ? 'transition-in' : ''}`} />
		</div>
	</section>
</div>

<style lang="post-css">
	:global(a) {
		display: none;
	}
	.custom-page-transition {
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
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
