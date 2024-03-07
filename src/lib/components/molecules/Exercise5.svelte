<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// variables
	let string = `This string contains some <strong>HTML!!!</strong>`;
</script>

<template lang="pug">
	ExerciseHeader(
		section="Intro",
		startNumber=5,
		topic="HTML tags"
	)

	.cycle.grid.grid-cols-1.my-6.grow.content-center.content-center.text-center.border-2.border-eerie.border-opacity-30.shadow-stone-500.shadow-lg.py-4.px-3.rounded-xl
		p.text-22.self-center {  @html string  }
		p.text-16 (and the color cycling is totally unrelated)</template>

<style>
	.cycle {
		animation: color-change;
		-webkit-animation: color-change;
		-moz-animation: color-change;
		-o-animation: color-change;

		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-direction: normal;
	}
	@keyframes color-change {
		0%,
		100% {
			background: rgba(255, 0, 0, 0.8);
			color: white;
		}
		14% {
			background: rgba(255, 165, 0, 0.8);
			color: black;
		}
		28% {
			background: rgba(255, 255, 0, 0.8);
			color: black;
		}
		42% {
			background: rgba(0, 128, 0, 0.8);
			color: white;
		}
		56% {
			background: rgba(0, 0, 255, 0.8);
			color: white;
		}
		70% {
			background: rgba(0, 0, 139, 0.8);
			color: white;
		}
		84% {
			background: rgba(75, 0, 130, 0.8);
			color: white;
		}
	}

	@-webkit-keyframes color-change /* Safari and Chrome - necessary duplicate */ {
		0%,
		100% {
			background: rgba(255, 0, 0, 0.8);
			color: white;
		}
		14% {
			background: rgba(255, 165, 0, 0.8);
			color: black;
		}
		28% {
			background: rgba(255, 255, 0, 0.8);
			color: black;
		}
		42% {
			background: rgba(0, 128, 0, 0.8);
			color: white;
		}
		56% {
			background: rgba(0, 0, 255, 0.8);
			color: white;
		}
		70% {
			background: rgba(0, 0, 139, 0.8);
			color: white;
		}
		84% {
			background: rgba(75, 0, 130, 0.8);
			color: white;
		}
	}

	@-moz-keyframes color-change /* Firefox */ {
		0%,
		100% {
			background: rgba(255, 0, 0, 0.8);
			color: white;
		}
		14% {
			background: rgba(255, 165, 0, 0.8);
			color: black;
		}
		28% {
			background: rgba(255, 255, 0, 0.8);
			color: black;
		}
		42% {
			background: rgba(0, 128, 0, 0.8);
			color: white;
		}
		56% {
			background: rgba(0, 0, 255, 0.8);
			color: white;
		}
		70% {
			background: rgba(0, 0, 139, 0.8);
			color: white;
		}
		84% {
			background: rgba(75, 0, 130, 0.8);
			color: white;
		}
	}

	@-o-keyframes color-change /* Opera */ {
		0%,
		100% {
			background: rgba(255, 0, 0, 0.8);
			color: white;
		}
		14% {
			background: rgba(255, 165, 0, 0.8);
			color: black;
		}
		28% {
			background: rgba(255, 255, 0, 0.8);
			color: black;
		}
		42% {
			background: rgba(0, 128, 0, 0.8);
			color: white;
		}
		56% {
			background: rgba(0, 0, 255, 0.8);
			color: white;
		}
		70% {
			background: rgba(0, 0, 139, 0.8);
			color: white;
		}
		84% {
			background: rgba(75, 0, 130, 0.8);
			color: white;
		}
	}
</style>
