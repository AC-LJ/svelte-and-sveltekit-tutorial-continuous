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
