<script lang="ts">
	import BzeesImg from '../images/bzees.png';
	import PfImg1 from '../images/promptfoolery-prv1.jpg';
	import PfImg2 from '../images/promptfoolery-prv2.jpg';
	import PfImg1Md from '../images/promptfoolery-prv1-md.jpg';
	import PfImg2Md from '../images/promptfoolery-prv2-md.jpg';
	import PfImg1Sm from '../images/promptfoolery-prv1-sm.jpg';
	import PfImg2Sm from '../images/promptfoolery-prv2-sm.jpg';
</script>

<div class="w-full flex-none pb-6 text-white">
	<div
		class="box-border flex flex-col rounded transition-all duration-200 sm:flex-row sm:gap-2 sm:p-1 "
	>
		<div
			class="w-full transform cursor-pointer border-4 border-themeGray-900 transition-all duration-200 hover:-translate-y-[.1rem] sm:w-1/2"
		>
			<img
				srcset="{PfImg1Sm} 630w, {PfImg1Md} 765w, {PfImg1} 900w"
				sizes="(max-width: 640px) 100vw, (min-width:641px) 50vw"
				src={PfImg1}
				alt="Description 3"
				class="h-auto w-full object-cover "
			/>
		</div>
		<div
			class="w-full transform cursor-pointer  border-4 border-themeGray-900 transition-all duration-200 hover:-translate-y-[.1rem] sm:w-1/2 "
		>
			<img
				srcset="{PfImg2Sm} 630w, {PfImg2Md} 765w, {PfImg2} 900w"
				sizes="(max-width: 640px) 100vw, (min-width:641px) 50vw"
				src={PfImg2}
				alt="Description 3"
				class="h-auto w-full object-cover"
			/>
		</div>
	</div>
	<div class="items-center p-4 lg:grid lg:grid-cols-3">
		<h3 class="col-span-1 text-center uppercase leading-[2rem]">Promptfoolery.</h3>
		<p class="text col-span-2 leading-7">
			Sole Fullstack developer for this web game and application. I created this with Sveltekit,
			Typescript, Firebase and Tailwind. I designed the visual elements(landing page, logo, all the
			graphic/web design) with Figma and Illustrator. I co-created the idea, mechanics, and
			prompts/images.
		</p>
		<p class="hidden" />
	</div>

	<div class="mb-4 bg-themeGray-900 p-6">
		<div
			class="box-border flex flex-col rounded transition-all duration-200 sm:flex-row sm:gap-2 sm:p-1 "
		>
			<div
				class="w-full transform cursor-pointer  border-4 border-themeGray-800 transition-all duration-200 hover:-translate-y-[.1rem] sm:w-1/2 "
			>
				<img
					srcset="{PfImg1Sm} 630w, {PfImg1Md} 765w, {PfImg1} 900w"
					sizes="(max-width: 640px) 100vw, (min-width:641px) 50vw"
					src={PfImg1}
					alt="Description 3"
					class="h-auto w-full object-cover "
				/>
			</div>
			<div
				class="w-full transform cursor-pointer  border-4 border-themeGray-800 transition-all duration-200 hover:-translate-y-[.1rem] sm:w-1/2 "
			>
				<img
					srcset="{PfImg2Sm} 630w, {PfImg2Md} 765w, {PfImg2} 900w"
					sizes="(max-width: 640px) 100vw, (min-width:641px) 50vw"
					src={PfImg2}
					alt="Description 3"
					class="h-auto w-full object-cover"
				/>
			</div>
		</div>
		<div class="items-center p-4 lg:grid lg:grid-cols-3">
			<h3 class="col-span-1 text-center uppercase leading-[2rem]">Promptfoolery.</h3>
			<p class="text col-span-2 leading-7">
				Sole Fullstack developer for this web game and application. I created this with Sveltekit,
				Typescript, Firebase and Tailwind. I designed the visual elements(landing page, logo, all
				the graphic/web design) with Figma and Illustrator. I co-created the idea, mechanics, and
				prompts/images.
			</p>
			<p class="hidden" />
		</div>
	</div>
</div>
