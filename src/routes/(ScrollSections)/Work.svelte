<script lang="ts">
	//
	import * as feather from 'feather-icons';
	//
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	//
	import BzeesImg from '$lib/images/jasper-fred.png';
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
	<!-- Promptfoolery -->

	<article class=" flex flex-col pb-4 lg:flex-row">
		<div class="relative w-full lg:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-100 md:flex lg:top-0 lg:left-0 lg:h-full"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-300 md:m-8 md:border-8">
					<img
						srcset="{PfImg2Sm} 630w, {PfImg2Md} 765w, {PfImg2} 900w"
						sizes="(max-width: 640px) 100vw, (min-width:641px) 75vw"
						src={PfImg2}
						alt="Description 3"
						class="flex h-auto w-full object-cover"
					/>
				</div>
			</div>
		</div>
		<div class="w-full lg:w-1/2">
			<div class="flex flex-col items-end justify-end p-4 lg:p-0">
				<h3
					class="article-header col-span-1 m-auto mt-0 w-3/4 text-center uppercase leading-[3rem] text-themeBlue lg:mt-8 lg:text-left"
				>
					Promptfoolery
				</h3>
				<p class="m-auto w-full text-lg leading-8 text-black md:w-3/4">
					As the exclusive Full-Stack Developer for this web game and application, I was solely
					responsible for its development and design. The technical implementation was accomplished
					using Sveltekit, Typescript, Firebase, and Tailwind. In addition, I personally designed
					all the visual elements, including the landing page, logo, and all aspects of the
					graphic/web design, using tools such as Figma and Illustrator. In addition to the
					technical development, I also collaborated in conceptualizing the idea, establishing game
					mechanics, and generating prompts and images with the games co-creator.
				</p>
				<p class="m-auto w-full pt-4 text-lg leading-8 text-black md:w-3/4">
					Game coming soon. In the meantime check out the projects <a
						class="w-full text-themeBlue"
						href="https://github.com/aaronmichaelhappe/promptfoolery">Git</a
					>
				</p>
			</div>
		</div>
	</article>

	<!-- Internal tools -->

	<!-- Caleres -->
	<!-- Web Apps -->
</div>
