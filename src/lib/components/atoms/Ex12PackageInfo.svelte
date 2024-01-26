<script lang="ts">
	// props
	export let name: string;
	export let version: number;
	export let speed: string;
	export let website: string;

	// variables
	$: href = `https://www.npmjs.com/package/${name}`;

	// console.log("package info instantiated");
</script>

<template lang="pug">
	.demo-container.mt-6.p-6.bg-white.rounded-lg.w-fit.bg-opacity-70
		p
		| The
		code &nbsp;{ name }&nbsp;
		| package is&nbsp;{ speed }&nbsp;fast. Download version { version } from
		a(href!="{ href }") &nbsp;npm&nbsp;
		| and
		a(href!="{ website }") &nbsp;learn more here</template>
