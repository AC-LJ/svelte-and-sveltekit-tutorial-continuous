<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";
	import ButtonAddScoop from "$atoms/Ex30ButtonIceAddScoop.svelte";
	import Ex30RiffScoop from "$atoms/Ex30RiffScoop.svelte";
	import Ex30RiffCone from "$atoms/Ex30RiffCone.svelte";
	import ButtonEat from "$atoms/Ex30ButtonEat.svelte";

	// types
	interface SelectionDetails {
		scoopType: number;
		yAdjustment: number;
		xAdjustment: number;
		rotation: number;
	}

	// variables
	// let flavours: string[] = [];
	let runningYOffset = 88;
	let coneYOffset = runningYOffset + 38;
	let offsetCopy = runningYOffset;
	let selections: SelectionDetails[] = [];
	let isToppled = false;
	let isClearing = false;
	let mouthOpen = true;

	$: eatImage = mouthOpen
		? "src/lib/assets/mouth-open.png"
		: "src/lib/assets/mouth-closed.png";

	// functions
	function addScoop(event: PointerEvent) {
		// adds a scoop to the cone

		function makeItTeeter() {
			// adds a little horizontal jitter to the scoops so they don't stack perfectly
			// returns a two-element array, with horizontal offset at [0] and rotation at index [1]
			return [
				Math.floor(Math.random() * 8 - 4),
				Math.floor(Math.random() * 30 - 15),
			];
		}

		if (!isToppled && !isClearing) {
			// the "choice" variable is passed to Ex30RiffScoop.svelte to select a flavor by index of the "flavors" array found there
			// 0 = cookies and cream, 1 = mint choc chip, 2 = raspberry ripple
			let choice: number | undefined;
			if (event.target) {
				// grab the last character of the id of the clicked button, which is an integer
				choice = parseInt((event.target as HTMLElement).id.slice(-1));
			}
			// The first scoop always goes on straight, so we don't add placement jitter if the selections array is empty
			// The part about "choice" is just to chill TypeScript out
			if (choice !== undefined && selections.length === 0) {
				selections = [
					...selections,
					{
						scoopType: choice,
						yAdjustment: runningYOffset,
						xAdjustment: choice === 0 ? -2 : -3,
						rotation: choice === 0 ? -15 : 0,
					},
				];
			} else if (choice !== undefined) {
				// If this scoop is being dropped on top of another scoop, we add the jitter
				selections = [
					...selections,
					{
						scoopType: choice,
						yAdjustment: runningYOffset,
						xAdjustment:
							choice === 0 ? -1 + makeItTeeter()[0] : -2 + makeItTeeter()[0],
						rotation:
							choice === 0 ? -15 + makeItTeeter()[1] : 0 + makeItTeeter()[1],
					},
				];
			}
			runningYOffset -= 33;
			if (selections.length === 12) topple();
		}
	}

	function topple() {
		// changes the position and rotation of all onscreen scoops to simulate a topple
		interface ScatterPattern {
			shift: number;
			rotation: number;
		}

		function randomHorizontal() {
			// adds some horizontal jitter so the toppled scoop positions aren't exactly the same every time

			return Math.ceil(Math.random() * 20);
		}

		function* shiftAndRollGen() {
			// generates a pattern of horizontal shifts and rotations for the toppled scoops

			const scatterPattern: ScatterPattern[] = [
				{ shift: -50, rotation: -102 },
				{ shift: -240, rotation: -110 },
				{ shift: 60, rotation: 90 },
				{ shift: 90, rotation: 90 },
				{ shift: 120, rotation: 90 },
				{ shift: 200, rotation: 200 },
				{ shift: 250, rotation: 90 },
				{ shift: -10, rotation: 180 },
				{ shift: -140, rotation: 0 },
				{ shift: 150, rotation: 180 },
				{ shift: -200, rotation: -90 },
				{ shift: -320, rotation: 0 },
			];

			isToppled = true;

			while (true) {
				for (let i = 0; i < scatterPattern.length; i++) {
					yield [
						([0, 1, 2, 3, 4, 5, 7].includes(i) ? 0 : randomHorizontal()) +
							scatterPattern[i].shift,
						scatterPattern[i].rotation,
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
				yAdjustment: 212,
			};
		});
	}

	function eat() {
		// makes all onscreen scoops disappear in a whimsical fashion

		if (!isClearing) {
			isClearing = true;
			mouthOpen = false;
			const intervalId = setInterval(() => {
				selections = selections.slice(0, -1);
				mouthOpen = !mouthOpen;

				if (selections.length === 0) {
					clearInterval(intervalId); // Stop the interval when the array is empty
					isToppled = false;
					isClearing = false;
					mouthOpen = true;
				}
			}, 210);
			runningYOffset = offsetCopy;
		}
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
					ButtonAddScoop(
						choice=0,
						onClick!="{ addScoop }"
					)
					ButtonAddScoop(
						choice=1,
						onClick!="{ addScoop }"
					)
					ButtonAddScoop(
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
				Ex30RiffCone(topOffset!="{ coneYOffset }")

				+if('selections.length > 0')
					.absolute.bottom-16.bg-red.h-12.flex.flex-col.z-50.text-16.font-semibold
						+if('!isToppled')
							ButtonEat(
								buttonImage!="{ eatImage }",
								onClick!="{ eat }"
							) Eat it!
							+else
								ButtonEat(
									buttonImage!="{ eatImage }",
									onClick!="{ eat }"
								) IT'S STILL GOOD!</template>

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
