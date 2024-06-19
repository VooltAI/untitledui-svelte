<script>
	/** @type {number} */
	export let size = 24;
	/** @type {string} */
	export let color = "currentColor";
	/** @type {number} */
	export let strokeWidth = 2;
</script>

<svg
	{...$$restProps}
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	fill="none"
	viewBox="0 0 24 24"
>
	<path
		stroke={color}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M5 21v-6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-8V3m7 18v-6m0-8V3m0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 14v-4m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-8V3"
	/>
</svg>
