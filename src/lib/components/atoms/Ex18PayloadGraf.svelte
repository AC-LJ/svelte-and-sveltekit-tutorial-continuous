<script lang="ts">
	// props
	export let textContent = "Real error, not a simulation.";
</script>

<template lang="pug">
    .m-auto.py-2.bg-eerie.bg-opacity-80.mt-3.border.border-neutral-400.rounded-lg(class="w-[86%]")
	    p.text-24.text-parchment.text-center.font-medium { textContent }
</template>
