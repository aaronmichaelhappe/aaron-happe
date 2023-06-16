<script lang="ts">
	//
	import * as feather from 'feather-icons';
	//
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	//
	import BzeesImg from '$lib/images/bzees.png';
	import PfImg1 from '$lib/images/promptfoolery-prv1.jpg';
	import PfImg2 from '$lib/images/promptfoolery-prv2.jpg';
	import PfImg1Md from '$lib/images/promptfoolery-prv1-md.jpg';
	import PfImg2Md from '$lib/images/promptfoolery-prv2-md.jpg';
	import PfImg1Sm from '$lib/images/promptfoolery-prv1-sm.jpg';
	import PfImg2Sm from '$lib/images/promptfoolery-prv2-sm.jpg';

	let downIconSvg = feather.icons['chevrons-down'].toSvg({
		stroke: '#ea7e3f',
		width: 28,
		height: 28
	});
	let upIconSvg = feather.icons['chevrons-up'].toSvg({
		stroke: '#ea7e3f',
		width: 28,
		height: 28
	});
</script>

<div class="w-full flex-none pb-6 text-white">
	<section>
		<div
			class="box-border flex flex-col rounded transition-all duration-200 md:flex-row md:gap-2 md:p-1 "
		>
			<div
				class="relative w-full transform transition-all duration-200 hover:-translate-y-[.1rem] md:w-1/2"
			>
				<div class="absolute flex h-full  w-1/2 bg-themeWarmGray-100" />
				<div class="z-5 relative w-full max-w-[600px] border-themeGray-900 md:m-8 md:border-8">
					<img
						srcset="{PfImg2Sm} 630w, {PfImg2Md} 765w, {PfImg2} 900w"
						sizes="(max-width: 640px) 100vw, (min-width:641px) 50vw"
						src={PfImg2}
						alt="Description 3"
						class="h-auto w-full object-cover "
					/>
				</div>
			</div>
			<div
				class="lg:1/2 w-full transform transition-all duration-200 hover:-translate-y-[.1rem] md:w-2/3"
			>
				<div class="max-w-1/2 flex flex-col items-end justify-end">
					<h3
						class="section-header col-span-1 m-auto mt-8 w-3/4 text-left uppercase leading-[3rem] text-themeOrange"
					>
						Promptfoolery
					</h3>
					<p class="m-auto w-3/4 text-lg leading-8 text-black">
						As the exclusive Full-Stack Developer for this web game and application, I was solely
						responsible for its development and design. The technical implementation was
						accomplished using Sveltekit, Typescript, Firebase, and Tailwind. In addition, I
						personally designed all the visual elements, including the landing page, logo, and all
						aspects of the graphic/web design, using tools such as Figma and Illustrator. In
						addition to the technical development, I also collaborated in conceptualizing the idea,
						establishing game mechanics, and generating prompts and images with the games
						co-creator.
					</p>
					<p class="pt-4 text-lg leading-8">
						Check out the landing page: <a class="text-themeBlue" href="www.promptfoolery.com"
							>promptfoolery.com</a
						>
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.section-header {
		background: linear-gradient(to right, #f7cc2c, #f7a440);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
