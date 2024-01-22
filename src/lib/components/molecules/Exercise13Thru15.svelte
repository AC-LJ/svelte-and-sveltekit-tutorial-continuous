<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// variables
	let count: number;
	const switchNumber = 5;
	const limit = 10;

	// functions
	function increment() {
		count += 1;
	}

	function clearCount() {
		count = 0;
	}

	// function calls
	clearCount();
</script>

<template lang="pug">
	h2 Exercises 13 and 14
		span.text-20.font-semibold.ml-4 Logic / If blocks and Else blocks
	.button-box.grid.grid-cols-2.gap-4.mt-6.max-w-sm
		ButtonGeneric1(
			buttonContent!="{`Clicked ${count} ${ count===1 ? 'time' : 'times' }`}",
			onClick!="{ increment }"
		)
		ButtonGeneric1(
			buttonContent="Clear the count",
			onClick!="{ clearCount }"
		)

	.message-container.h-20.px-8.flex.items-center
		+if('count > limit')
			p { count } is greater than { limit }
			+elseif('count < switchNumber')
				p { count } is less than { switchNumber }
			+else
				p { count } is between { switchNumber } and { limit } inclusive</template>
