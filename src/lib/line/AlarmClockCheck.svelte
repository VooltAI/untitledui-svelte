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
		d="M5 3 2 6m20 0-3-3M6 19l-2 2m14-2 2 2M9 13.5l2 2 4.5-4.5M12 21a8 8 0 1 0 0-16.001A8 8 0 0 0 12 21"
	/>
</svg>
