<script lang="ts">
	// components
	import ButtonGeneric1 from "$atoms/ButtonGeneric1.svelte";

	// stores
	import { count } from "$stores/exercise35thru36Store";

	function decrement() {
		$count -= 1;
	}
</script>

<template lang="pug">
	ButtonGeneric1(onClick!="{ decrement }")
		p.text-20.font-bold -</template>
