<script lang="ts">
	//
	import * as feather from 'feather-icons';
	//
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	//
	import BlackstoneImg from '$lib/images/blackstone.png';
	import TrendShopImg from '$lib/images/trend-shop.jpg';
	import PromptFooleryImg from '$lib/images/promptfoolery-prv2.jpg';
	import PromptFooleryImgMd from '$lib/images/promptfoolery-prv2-md.jpg';
	import PromptFooleryImgSm from '$lib/images/promptfoolery-prv2-sm.jpg';

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

<div class="w-full flex-none pb-4 text-white">
	<!-- Promptfoolery -->

	<article class=" my-4 flex flex-col px-4 lg:flex-row">
		<div class="relative w-full lg:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-100 md:flex lg:top-0 lg:left-0 lg:h-full"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-300 md:m-8 md:border-8">
					<a href="https://www.promptfoolery.com/">
						<img
							srcset="{PromptFooleryImgSm} 630w, {PromptFooleryImgMd} 765w, {PromptFooleryImg} 900w"
							sizes="(max-width: 640px) 100vw, (min-width:641px) 75vw"
							src={PromptFooleryImg}
							alt="Promptfoolery Game View"
							class="flex h-auto w-full object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full lg:w-1/2">
			<div class="flex flex-col items-end justify-end p-4 lg:p-0">
				<h3
					class="article-header col-span-1 m-auto mt-0 w-3/4  text-center uppercase leading-[3rem] text-themeBlue lg:mt-8 lg:text-left"
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
						class="w-full font-bold text-themeGray-900 underline"
						href="https://github.com/aaronmichaelhappe/promptfoolery">Git</a
					>
				</p>
			</div>
		</div>
	</article>

	<!-- Caleres -->

	<article class=" my-4 flex flex-col bg-themeWarmGray-200 py-4 lg:flex-row">
		<div class="w-full lg:w-1/2">
			<div class="flex flex-col items-end justify-end p-4 lg:p-0">
				<h3
					class="article-header col-span-1 m-auto mt-0 w-3/4 text-center uppercase leading-[3rem] text-themeBlue lg:mt-8 lg:text-left"
				>
					Brand Landing Pages
				</h3>
				<p class="m-auto w-full text-lg leading-8 text-black md:w-3/4">
					I have developed custom brand landing pages for notable brands such as <a
						class="w-full font-bold text-themeGray-900 underline"
						href="https://www.famousfootwear.com"
						>Famous Footwear
					</a>(including renowned brands Famous brands Nike, Converse and Skechers),
					<a
						class="w-full font-bold text-themeGray-900 underline"
						href="https://www.naturalizer.com/"
						>Naturalizer
					</a>,
					<a
						class="w-full font-bold text-themeGray-900 underline"
						href="https://www.drschollsshoes.com/"
						>Dr Scholl's Shoes
					</a> and more. Collaborating closely with designers, I created interactive brand experiences
					that increased conversion rates and drove sales. My exceptional work on a Converse Landing
					Page was recognized with a company-wide award.
				</p>
			</div>
		</div>
		<div class="relative w-full lg:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-100 md:flex lg:top-0 lg:left-0 lg:h-full"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-300 md:m-8 md:border-8">
					<a href="https://www.famousfootwear.com">
						<img
							src={TrendShopImg}
							alt="Famous Footwear Trend Shop"
							class="flex h-auto w-full object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
	</article>
	<!-- Web Apps -->
	<article class="border-themGray-50 my-4 flex flex-col border-b-2 px-4 pb-8 lg:flex-row">
		<div class="relative w-full lg:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-100 md:flex lg:top-0 lg:left-0 lg:h-full"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-300 md:m-8 md:border-8">
					<a href="https://www.promptfoolery.com/">
						<img
							src={BlackstoneImg}
							alt="Promptfoolery Game View"
							class="flex h-auto w-full object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full lg:w-1/2">
			<div class="flex flex-col items-end justify-end p-4 lg:p-0">
				<h3
					class="article-header col-span-1 m-auto mt-0 w-3/4  text-center uppercase leading-[3rem] text-themeBlue lg:mt-8 lg:text-left"
				>
					Web Apps
				</h3>
				<p class="m-auto w-full text-lg leading-8 text-black md:w-3/4">
					I have had the privilege of being involved in various teams focused on developing web
					applications. My experiences range from creating internal company tools for Blackstone
					Publishing and Flood Team Metro Saint Louis to developing Progressive Web Apps for The
					Flood Team Metro Saint Louis and SPAs for Power Admin and Blackstone Audio. While my
					primary role has been as a Frontend Engineer in these projects, I have also had been
					involved as a web designer and Fullstack developer.
				</p>
			</div>
		</div>
	</article>
</div>
