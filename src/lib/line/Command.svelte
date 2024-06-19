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
		d="M9 9V6a3 3 0 1 0-3 3zm0 0v6m0-6h6m-6 6v3a3 3 0 1 1-3-3zm0 0h6m0 0h3a3 3 0 1 1-3 3zm0 0V9m0 0V6a3 3 0 1 1 3 3z"
	/>
</svg>
