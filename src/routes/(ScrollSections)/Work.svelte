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

<div class="w-full flex-none pb-2 text-white">
	<!-- Promptfoolery -->

	<article class="my-4 mt-0 flex flex-col p-4 py-2 pt-0 md:flex-row">
		<div class="relative w-full md:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 bg-themeWarmGray-100 md:top-0 md:left-0 md:flex md:h-full lg:w-3/4"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-400 md:m-8 md:border-8">
					<a href="https://github.com/aaronmichaelhappe/">
						<img
							srcset="{PromptFooleryImgSm} 630w, {PromptFooleryImgMd} 765w, {PromptFooleryImg} 900w"
							sizes="(max-width: 640px) 100vw, (min-width:641px) 75vw"
							src={PromptFooleryImg}
							alt="Promptfoolery Game View"
							class="flex h-auto w-full border-2 border-themeWarmGray-400 object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<div class="flex flex-col items-end justify-end">
				<h3
					class="article-header col-span-1 mt-0 self-start pt-2 leading-[3rem] md:mt-8 md:pt-0 lg:m-auto lg:w-3/4"
				>
					Promptfoolery
				</h3>
				<p class="m-auto w-full leading-7 text-black lg:w-3/4">
					As the exclusive Full stackk Developer for this web game and application, I was solely
					responsible for its development and design. The technical implementation was accomplished
					using Sveltekit, Typescript, Firebase, and Tailwind. In addition, I personally designed
					all the visual elements, including the landing page, logo, and all aspects of the
					graphic/web design, using tools such as Figma and Illustrator. In addition to the
					technical development, I also collaborated in conceptualizing the idea, establishing game
					mechanics, and generating prompts and images with the games co-creator.
				</p>
				<p class="m-auto w-full pt-4 leading-7 text-black lg:w-3/4">
					Game coming soon. In the meantime check out the projects <a
						class="w-full font-bold text-themeGray-900 underline"
						href="https://github.com/aaronmichaelhappe/">Git</a
					>
				</p>
			</div>
		</div>
	</article>

	<!-- Caleres -->
	<article class=" my-4 flex flex-col bg-themeGray-100 p-4 py-2 md:flex-row">
		<div class="order-2 w-full md:order-1 md:w-1/2">
			<div class="flex flex-col items-end justify-end">
				<h3
					class="article-header col-span-1 mt-0 self-start pt-2 leading-[3rem] md:mt-8 md:pt-0 lg:m-auto lg:w-3/4"
				>
					Brand Landing Pages
				</h3>
				<p class="m-auto w-full leading-7 text-black lg:w-3/4">
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
		<div class="relative order-1 w-full md:order-2 md:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-200 md:top-0 md:left-0 md:flex md:h-full"
				/>
				<div class="relative max-w-[600px] border-themeWarmGray-400 md:m-8 md:border-8">
					<a href="https://www.famousfootwear.com">
						<img
							src={TrendShopImg}
							alt="Famous Footwear Trend Shop"
							class="flex h-auto w-full border-2 border-themeWarmGray-400 object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
	</article>
	<!-- Web Apps -->
	<article class="my-4 flex flex-col border-b-2 p-4 pb-8 md:flex-row">
		<div class="relative w-full md:w-1/2">
			<div class="z-5 relative flex w-full items-center justify-center ">
				<div
					class="absolute left-[12.5%] top-1/2 hidden h-1/2 w-3/4 bg-themeWarmGray-100 md:top-0 md:left-0 md:flex md:h-full"
				/>
				<div class="max-w-[600px]border-themeWarmGray-400 relative md:m-8 md:border-8">
					<a href="#">
						<img
							src={BlackstoneImg}
							alt="Promptfoolery Game View"
							class="flex h-auto w-full border-2 border-themeWarmGray-400 object-cover"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<div class="flex flex-col items-end justify-end">
				<h3
					class="article-header col-span-1 mt-0 self-start pt-2 leading-[3rem] md:mt-8 md:pt-0 lg:m-auto lg:w-3/4"
				>
					Web Apps
				</h3>
				<p class="m-auto w-full leading-7 text-black lg:w-3/4">
					I have had the privilege of being involved in various teams focused on developing web
					applications. My experiences range from creating internal company tools for Blackstone
					Publishing and The Flood Team Metro Saint Louis to developing Progressive Web Apps for The
					Flood Team Metro Saint Louis and SPAs for Power Admin and Blackstone Publishing. While my
					primary role has been as a Frontend Engineer in these projects, I have also had been
					involved as a web designer and Fullstack developer.
				</p>
			</div>
		</div>
	</article>
</div>

<style>
	h3.article-header {
		background: linear-gradient(to top, #4573b9, #2d8fad);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
