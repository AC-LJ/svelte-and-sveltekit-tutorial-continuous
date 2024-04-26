<!--
@component
A whimsical button that appears in Exercise30Riff when there is ice cream to eat.
* prop onClick: function -- accepts a function to run when the button is clicked.render
* prop buttonImage: string -- the path to the image to display on the button
-->
<script lang="ts">
	// props
	export let onClick: () => void;
	export let buttonImage = "";
</script>

<template lang="pug">
	button.eat-the-ice-cream(
		class=`
			h-24
			w-24
			flex
			justify-center
			items-center
			rounded-full
			shadow-blue-500
			shadow-md
			border
			border-blue-500
			border-opacity-20
			bg-white
			z-50

			active:bg-blue-100 
			hover:shadow-lg 
			hover:shadow-blue-500

			transition-shadow
			duration-150 
			ease-in-out
			`,
		on:click!="{ onClick }"
	)
		img(
			alt="A cartoon mouth",
			draggable="false",
			height="60",
			src!="{ buttonImage }",
			width="60"
		)

		slot</template>
