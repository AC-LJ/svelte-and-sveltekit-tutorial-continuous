<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";
	import ButtonIceCream from "$atoms/ButtonIceCream.svelte";
	import Ex30RiffScoop from "$atoms/Ex30RiffScoop.svelte";
	import Ex30RiffCone from "$atoms/Ex30RiffCone.svelte";

	// variables
	let flavours: string[] = [];
	let runningYOffset = 131;
	let offsetCopy = runningYOffset;
	let selections: {}[] = [];
	let isToppled = false;
	let isClearing = false;

	// functions
	function addScoop(event: PointerEvent) {
		if (!isToppled && !isClearing) {
			let choice: number | undefined;
			if (event.target) {
				choice = parseInt((event.target as HTMLElement).id.slice(-1));
			}
			selections = [
				...selections,
				{
					scoopType: choice,
					yAdjustment: runningYOffset,
					xAdjustment:
						choice === 0
							? -1 + Math.floor(Math.random() * 6 - 3)
							: -2 + Math.floor(Math.random() * 6 - 3),
					rotation:
						choice === 0
							? -30 + Math.floor(Math.random() * 30 - 15)
							: 0 + Math.floor(Math.random() * 30 - 15),
				},
			];
			runningYOffset -= 30;
			if (selections.length === 12) topple();
		}
	}

	function topple() {
		isToppled = true;
		function randomHorizontal() {
			return Math.ceil(Math.random() * 20);
		}

		function* shiftAndRollGen() {
			const scatterPattern = [
				-50, -240, 60, 90, 120, 200, 250, -10, -140, 150, -200, -320,
			];
			const rotationPattern = [
				-102, -110, 90, 90, 90, 200, 90, 180, 0, 180, -90, 0,
			];

			while (true) {
				for (let value of scatterPattern) {
					yield [
						([0, 1, 2, 3, 4, 5, 7].includes(scatterPattern.indexOf(value))
							? 0
							: randomHorizontal()) + value,
						rotationPattern[scatterPattern.indexOf(value)],
					];
				}
			}
		}

		const horizontalShift = shiftAndRollGen();

		selections = selections.map((selection) => {
			let tumble = horizontalShift.next().value as [number, number];

			return {
				...selection,
				xAdjustment: tumble[0],
				rotation: tumble[1],
			};
		});

		selections = selections.map((selection) => {
			return {
				...selection,
				yAdjustment: 232,
			};
		});
	}

	function eat() {
		isClearing = true;
		const intervalId = setInterval(() => {
			selections = selections.slice(0, -1);

			if (selections.length === 0) {
				clearInterval(intervalId); // Stop the interval when the array is empty
				isToppled = false;
				isClearing = false;
			}
		}, 210);
		runningYOffset = offsetCopy;
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Riff on exercises 29 and 30",
		startNumber=30.5,
		topic="Build your cone!"
	)

	.container.relative
		+if('isToppled')
			.absolute.w-full.h-full.flex.justify-center.pt-24.pl-12
				p.text-50.font-bold.text-engineering(class="rotate-[-12deg] z-40") YOU BOOB!

		.scoop-selector-panel.grid.grid-cols-2.gap-6.mt-6
			.front-plate.h-96.rounded-lg.flex.flex-col.items-center.justify-around.px-6.py-4
				+if('!isToppled')
					.rounded-xl.text-center.text-gray-900.font-semibold
						p.text-20 SCOOP
						p -O-
						p.text-20 MATIC
						p CONE BUILDER
					ButtonIceCream(
						choice=0,
						onClick!="{ addScoop }"
					)
					ButtonIceCream(
						choice=1,
						onClick!="{ addScoop }"
					)
					ButtonIceCream(
						choice=2,
						onClick!="{ addScoop }"
					)

			.order-fulfilled.bg-white.bg-opacity-75.rounded-lg.flex.flex-col.items-center.relative
				+each('selections as selection')
					//- .box.h-12.w-12.bg-red-600.bg-opacity-20
					Ex30RiffScoop(
						flavourSelect!="{ selection.scoopType }",
						rotation!="{ selection.rotation }",
						xAdjustment!="{ selection.xAdjustment }",
						yAdjustment!="{ selection.yAdjustment }"
					)
				Ex30RiffCone

				+if('selections.length > 0')
					+if('!isToppled')
						.absolute.bottom-6.bg-red.h-12.flex.flex-col
							ButtonGeneric1(onClick!="{ eat }") Eat it!
						+else
							.absolute.bottom-6.bg-red.h-12.flex.flex-col.z-50
								ButtonGeneric1(onClick!="{ eat }") EAT IT ANYWAY!</template>

<style lang="css">
	.front-plate {
		background: radial-gradient(circle at 70% 34%, #f0f1f3, #bfc2c9 60%);
		text-transform: uppercase;
		text-shadow:
			-1px -1px 2px rgba(0, 0, 0, 0.7),
			1px 1px 2px rgba(255, 255, 255, 0.877);
		box-shadow:
			0 3px 0 #858787,
			-3px 8px 8px rgba(0, 0, 0, 0.45);
	}
</style>
