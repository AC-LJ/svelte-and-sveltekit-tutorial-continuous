<script lang="ts">
	export let name: string;
	export let version: number;
	export let speed: string;
	export let website: string;

	$: href = `https://www.npmjs.com/package/${name}`;
	console.log(name);
	console.log("package info instantiated");
</script>

<template lang="pug">
	p.mt-6
	| The
	code &nbsp;{ name }&nbsp;
	| package is&nbsp;{ speed }&nbsp;fast. Download version { version } from
	a(href!="{ href }") &nbsp;npm&nbsp;
	| and
	a(href!="{ website }") &nbsp;learn more here</template>
