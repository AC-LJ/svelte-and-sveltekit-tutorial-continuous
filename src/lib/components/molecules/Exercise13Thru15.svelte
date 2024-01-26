<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count = 0;
	const switchNumber = 5;
	const limit = 10;
	// still in variables: Some comparison operators trigger linting in this stack,
	// so we declare our comparisons as reactive booleans here...
	$: countIsUnderSwitch = count < switchNumber;

	// functions
	function increment() {
		count += 1;
	}

	function clearCount() {
		count = 0;
	}
</script>

<template lang="pug">
	h2 Exercises 13 through 15
	.headline.text-20.font-semibold.ml-4.mt-2
		p Logic / If, elseif, and else blocks

	.button-box.grid.grid-cols-2.gap-4.mt-8.max-w-sm
		ButtonGeneric1(onClick!="{ increment }")
			p Clicked { count } { count === 1 ? "time" : "times" }

		ButtonGeneric1(onClick!="{ clearCount }")
			p Clear the count

	.message-container.h-20.px-8.flex.items-center
		+if('count > limit')
			p { count } is greater than { limit }
			+elseif('countIsUnderSwitch')
				p { count } is less than { switchNumber }
			+else
				p { count } is between { switchNumber } and { limit } inclusive</template>
