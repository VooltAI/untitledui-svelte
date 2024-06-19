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
		d="m12 8 4 4m0 0-4 4m4-4H3m.338-5A10 10 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a10 10 0 0 1-8.662-5"
	/>
</svg>
