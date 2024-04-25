<!--
@component
Accepts props from Exercise12.svelte and displays information about a package.
The code is sufficiently self-explanatory that any further documentation would amount to clutter.
-->
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
	.package-info-container(
		class=`
			bg-opacity-70
			bg-white
			mt-6
			p-6
			rounded-lg
			w-fit
		`
	)
		p
		| The
		code &nbsp;{ name }&nbsp;
		| package is&nbsp;{ speed }&nbsp;fast. Download version { version } from
		a(href!="{ href }") &nbsp;npm&nbsp;
		| and
		a(href!="{ website }") &nbsp;learn more here</template>
