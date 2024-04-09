<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// stores
	import { name, greeting } from "$stores/exercise40Store";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Stores",
		startNumber=40,
		topic="Store bindings"
	)

	h1.text-36.mt-6 { $greeting }

	.flex.gap-4.mt-6
		input.px-3.rounded-lg(class="w-3/4", bind:value!="{ $name }")

		ButtonGeneric1(onClick!="{ () => $name += '!' }")
			p Add an exclamation mark!</template>
