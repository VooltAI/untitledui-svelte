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
		d="M10 11.535a4.01 4.01 0 0 1 4 0M8.828 9.172a4 4 0 1 1-5.657 5.656 4 4 0 0 1 5.657-5.656m12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656"
	/>
</svg>
