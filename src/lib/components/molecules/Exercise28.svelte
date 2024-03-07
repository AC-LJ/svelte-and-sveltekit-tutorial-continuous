<script lang="ts">
	// components
	import ExerciseHeader from "$atoms/ExerciseHeader.svelte";

	// interfaces
	interface Question {
		id: number;
		text: string;
	}

	// variables
	let questions = [
		{
			id: 1,
			text: `Where did you go to school?`,
		},
		{
			id: 2,
			text: `What is your mother's name?`,
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`,
		},
	];

	let selected: Question;

	let answer = "";

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`,
		);
	}
</script>

<template lang="pug">
	ExerciseHeader(
		section="Bindings",
		startNumber=28,
		topic="Select bindings"
	)

	.select-grid.grid.grid-cols-1.gap-4.mt-6
		h2 Insecurity questions

		form(on:submit|preventDefault!="{ handleSubmit }")
			.form-items-grid.grid.grid-cols-1.gap-4
				select.px-3.py-2.rounded-lg(
					bind:value!="{ selected }",
					on:change!="{ () => (answer = '') }"
				)
					+each('questions as question')
						option(value!="{ question }") { question.text }

				input.px-3.py-2.rounded-lg(bind:value!="{ answer }")

				button.py-2.px-3.border.border-neutral-700.rounded-lg(
					class=`
						active:bg-opacity-40
						bg-opacity-60
						bg-white
						border-2
						border-neutral-700
						border-opacity-30
						duration-200
						hover:bg-opacity-100
						hover:border-opacity-50
						hover:shadow-md
						py-2
						px-3
						rounded-lg
						transition
						`,
					disabled!="{ !answer }",
					type="submit"
				) Submit</template>
