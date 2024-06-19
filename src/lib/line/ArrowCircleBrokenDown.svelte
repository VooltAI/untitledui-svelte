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
		d="M17 3.338A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 5-8.662M8 12l4 4m0 0 4-4m-4 4V2"
	/>
</svg>
