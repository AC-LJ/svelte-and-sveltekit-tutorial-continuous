<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// stores
	import { count } from "$lib/stores/Exercise35Store";

	function increment() {
		$count += 1;
	}
</script>

<template lang="pug">
	ButtonGeneric1(onClick!="{ increment }")
		p.text-20.font-bold +</template>
