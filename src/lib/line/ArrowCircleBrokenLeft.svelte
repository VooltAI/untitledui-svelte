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
		d="M20.662 17A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 8.662 5M12 8l-4 4m0 0 4 4m-4-4h14"
	/>
</svg>
