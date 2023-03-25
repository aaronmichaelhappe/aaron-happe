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
	let go = false;
	let introEnd = false;
	let navigating = false;
	let navDelaying = true;
	let textLgHlFlyEnd = false;
	let textSmSlideEnd = false;
	let userHasScrolled = false;
	let lgHlClasses =
		'translate-x-[100] text-[3rem] leading-[3rem] font-extrabold uppercase  sm:text-[3.5rem] md:text-[4.5rem] md:leading-[4.5rem] lg:text-[5.5rem] lg:leading-[5.5rem] xl:text-[7rem] xl:leading-[7rem]';
	let smHlClasses =
		'mr-2 inline-block text-[1.75rem] font-extrabold leading-[1.75rem] text-white sm:text-[2.25rem] sm:leading-[2.25rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem] xl:text-[4rem] xl:leading-[4rem]';
	let currentSection = '';
	let workEl: HTMLDivElement | null;
	let aboutEl: HTMLDivElement | null;
	let blogEl: HTMLDivElement | null;

	let example: HTMLDivElement | null;

	onMount(() => {
		const onFirstScroll = () => {
			userHasScrolled = true;
			window.removeEventListener('scroll', onFirstScroll);
		};
		window.addEventListener('scroll', onFirstScroll);

		go = true;
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
		example;
	}

	function onIntroEnd() {
		introEnd = true;
	}

	function onHeadlineFlyEnd() {
		textLgHlFlyEnd = true;
	}

	const headlines = ['mobile apps.', ' ', 'web apps.', ' ', 'web pages.'];
</script>

<div class="h-screen ">
	{#if navigating}
		<div class={`page-transition-cover fixed inset-0 z-20`}>
			<div
				bind:this={example}
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

	<div class="relative h-[85vh]">
		<div class="mx-auto max-w-[1300px]">
			{#if go}
				<div
					class="absolute inset-0 z-0 h-[85vh] bg-primaryPink"
					in:fly={{ y: '100%' }}
					on:introend={() => onIntroEnd()}
				/>
			{/if}
			<div class={`slide-fade ${go ? 'slide-fade-in' : ''}  relative z-30 px-4 pt-4 `}>
				<Header {currentSection} on:scrollto={handleScrollTo} />
			</div>

			<div class="relative p-4 ">
				<AaronHappeLogo />
				<div class="flex flex-col overflow-hidden pt-6 ">
					{#if introEnd}
						<div>
							{#if !textLgHlFlyEnd}
								<div class="mb-2 sm:mb-4">
									<span class={smHlClasses + ' invisible'}>mobile apps.</span><span
										class={smHlClasses + ' invisible'}>web apps.</span
									><span class={smHlClasses + ' invisible'}>web pages.</span>
								</div>
							{:else}
								<div class="mb-2 sm:mb-4">
									{#each headlines as line, i}
										<span
											class={smHlClasses}
											in:fly={{
												y: 100,
												delay: 250 * i,
												easing: backOut
											}}
											on:introend={() => (textSmSlideEnd = true)}
										>
											{line}
										</span>
									{/each}
								</div>
							{/if}
						</div>
						<div>
							<p
								class={lgHlClasses}
								in:fly={{
									x: '-100%',
									duration: 650,
									easing: backOut
								}}
								on:introend={() => onHeadlineFlyEnd()}
							>
								<span class="whitespace-nowrap">Code + </span>
								<span class="whitespace-nowrap">Design +</span>
							</p>
							<p
								class={lgHlClasses}
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
				<!-- <h2 class="text-white">apps. mobile. web.</h2> -->
			</div>
		</div>
	</div>
	<!-- // scroll past the section -->
	<!-- change the hash -->
	<!-- underline the link in the header -->
	<div class="section section-work mx-auto max-w-[1300px]">
		<div>
			<h4
				class={`transition ${
					fadeInText ? 'transition-in' : ''
				} p-4 text-[4rem] font-bold text-white`}
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
	</div>
</div>

<style>
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
	.line2 {
		top: calc(50% - 0.1rem);
	}
	.peer:checked ~ .hamburger-lines .line1 {
		transform: translateY(0.9rem) rotate(45deg);
	}

	.peer:checked ~ .hamburger-lines .line2 {
		opacity: 0;
	}

	.peer:checked ~ .hamburger-lines .line3 {
		transform: translateY(-0.9rem) rotate(-45deg);
	}
</style>
