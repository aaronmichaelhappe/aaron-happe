<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../composables/scrollToSection';
	import AaronHappeLogo from '../lib/AaronHappeLogo.svelte';
	import Header from './Header.svelte';
	import Work from './Work.svelte';

	function handleInView(view: string) {}

	type ScrollToSections = {
		work: HTMLDivElement | null;
	};

	type SectionType = {
		detail: keyof ScrollToSections;
	};

	let fadeInText = false;
	// 1.125rem - 1.75rem;
	let go = false;
	let introEnd = false;
	let textLgHlFlyEnd = false;
	let textSmSlideEnd = false;
	let lgHlClasses =
		'translate-x-[100] text-[3rem] leading-[3rem] font-extrabold uppercase  sm:text-[3.5rem] md:text-[4.5rem] md:leading-[4.5rem] lg:text-[5.5rem] lg:leading-[5.5rem] xl:text-[7rem] xl:leading-[7rem]';
	let smHlClasses =
		'mr-2 inline-block text-[1.75rem] font-extrabold leading-[1.75rem] text-white sm:text-[2.25rem] sm:leading-[2.25rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3rem] lg:leading-[3rem] xl:text-[4rem] xl:leading-[4rem]';

	let work: HTMLDivElement | null;

	function handleScrollTo(event: CustomEvent) {
		const section: SectionType = event.detail;
		let map = {
			work: work
		};

		scrollToSection(map.work);
	}

	function onIntroEnd() {
		introEnd = true;
	}

	function onHeadlineFlyEnd() {
		textLgHlFlyEnd = true;
	}

	const headlines = ['mobile apps.', ' ', 'web apps.', ' ', 'web pages.'];

	onMount(() => {
		go = true;
		setTimeout(() => {
			fadeInText = true;
		}, 180);
	});
</script>

<div class="h-screen ">
	<div class="relative h-[85vh] ">
		<div class="mx-auto max-w-[1300px]">
			{#if go}
				<div
					class="absolute inset-0 z-0 h-[85vh] bg-primaryPink"
					in:fly={{ y: '100%' }}
					on:introend={() => onIntroEnd()}
				/>
			{/if}
			<div class="relative z-30 px-4 pt-4">
				<Header on:scrollto={handleScrollTo} />
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
			<h3 class={`fade ${fadeInText ? 'fade-in' : ''} p-4 font-bold text-white`}>My Work.</h3>
		</div>

		<div use:inview on:inview_change={() => handleInView('work')} bind:this={work} id="work">
			<Work />
		</div>
	</div>
</div>

<style>
	:global(a) {
		display: none;
	}
	.fade {
		opacity: 0;
	}
	.fade.fade-in {
		opacity: 100;
		transition: opacity 0.4s ease-in-out;
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
