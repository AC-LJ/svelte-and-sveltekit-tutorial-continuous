<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";
</script>

<template lang="pug">
	ExerciseHeader(
		section="Intro",
		startNumber=3,
		topic="Styling"
	)

	p The style rules applied to this paragraph are declared in a style element inside this component, and thus are scoped to this component (exercise3.svelte) only.
	p.bg-yellow-400.mt-4
		| Because Tailwind declares its style rules in a &lt;style&gt; element in the document head,
		| any conflicting style rules declared in the &lt;style&gt; element added to this component come later in order of appearance
		| and will override theTailwind utility class styles. But we can still use Tailwind classes to color the background of this paragraph
		| and add a margin-top value because our component-scoped styles don't include any declarations about the background or margins.

	.text-20.mt-4.px-2.max-w-3xl
		| This text, on the other hand, has only Tailwind styling because it is just inside a &lt;div&gt;,
		| and is, therefore, not affected by our paragraph rules.</template>

<style>
	p {
		color: #550055;
		font-family: "Comic Sans MS", cursive;
		font-size: 1.5em;
		padding: 8px 0.5em;
		max-width: 50ch;
	}
</style>
