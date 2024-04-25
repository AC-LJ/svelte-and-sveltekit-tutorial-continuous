<!--
@component
Called by Ex17.svelte to render emoji's by name. The underlying reason it is built this way is a little complicated, 
and it is probably best to study the exercise at https://learn.svelte.dev/tutorial/keyed-each-blocks to understand.
* prop name: keyof EmojiObject -- the name of the emoji to render
-->

<script lang="ts">
	// types
	type EmojiObject = {
		[key: string]: string;
	};

	// variables

	const emojis: EmojiObject = {
		apple: "🍎",
		banana: "🍌",
		carrot: "🥕",
		doughnut: "🍩",
		egg: "🥚",
	};

	// props

	// the name is updated whenever the prop value changes...
	export let name: keyof EmojiObject;

	// ...but the "emoji" variable is fixed upon initialization
	// of the component because it uses `const` instead of `$:`
	const emoji: string = emojis[name];
</script>

<template lang="pug">
	p { emoji } = { name }</template>
